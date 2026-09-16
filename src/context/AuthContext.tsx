"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  ShopifyCustomer,
  ShopifyCustomerAccessToken,
} from "@/lib/types";
import {
  customerLogin,
  customerRegister,
  customerLogout,
  customerRecoverPassword,
  getCustomer,
} from "@/lib/shopify";

interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptsMarketing?: boolean;
}

interface AuthContextType {
  customer: ShopifyCustomer | null;
  customerAccessToken: string | null;
  isLoading: boolean;
  authError: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (input: RegisterInput) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  recoverPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  refreshCustomer: () => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "gbj_customer_access_token";
const EXPIRY_KEY = "gbj_customer_token_expires_at";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [customer, setCustomer] = useState<ShopifyCustomer | null>(null);
  const [customerAccessToken, setCustomerAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);

  const clearError = () => setAuthError(null);

  const persistToken = (token: ShopifyCustomerAccessToken) => {
    try {
      localStorage.setItem(TOKEN_KEY, token.accessToken);
      localStorage.setItem(EXPIRY_KEY, token.expiresAt);
      document.cookie = `gbj_customer_token=${token.accessToken}; path=/; max-age=2592000; SameSite=Lax`;
    } catch {
      // ignore storage errors
    }
  };

  const clearStoredToken = () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(EXPIRY_KEY);
      document.cookie = "gbj_customer_token=; path=/; max-age=0; SameSite=Lax";
    } catch {
      // ignore storage errors
    }
  };

  const refreshCustomer = useCallback(async () => {
    if (!customerAccessToken) return;
    try {
      const data = await getCustomer(customerAccessToken);
      if (data) {
        setCustomer(data);
      } else {
        // Token is no longer recognized by Shopify
        setCustomer(null);
        setCustomerAccessToken(null);
        clearStoredToken();
      }
    } catch (err) {
      console.error("Failed to refresh customer session:", err);
    }
  }, [customerAccessToken]);

  // Restore session on initial load
  useEffect(() => {
    const initAuth = async () => {
      try {
        const savedToken = localStorage.getItem(TOKEN_KEY);
        const expiresAt = localStorage.getItem(EXPIRY_KEY);

        if (savedToken) {
          // Check if token has expired
          if (expiresAt && new Date(expiresAt) < new Date()) {
            clearStoredToken();
            setIsLoading(false);
            return;
          }

          setCustomerAccessToken(savedToken);
          const customerData = await getCustomer(savedToken);
          if (customerData) {
            setCustomer(customerData);
          } else {
            clearStoredToken();
            setCustomerAccessToken(null);
          }
        }
      } catch (err) {
        console.warn("Could not restore customer auth session:", err);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    setAuthError(null);

    try {
      const token = await customerLogin(email, password);
      persistToken(token);
      setCustomerAccessToken(token.accessToken);

      const customerData = await getCustomer(token.accessToken);
      setCustomer(customerData);

      return { success: true };
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Unable to sign in. Please verify your credentials.";
      setAuthError(msg);
      return { success: false, error: msg };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    input: RegisterInput
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    setAuthError(null);

    try {
      await customerRegister(input);
      // Auto login after registration
      const token = await customerLogin(input.email, input.password);
      persistToken(token);
      setCustomerAccessToken(token.accessToken);

      const customerData = await getCustomer(token.accessToken);
      setCustomer(customerData);

      return { success: true };
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Registration failed. Please review the details provided.";
      setAuthError(msg);
      return { success: false, error: msg };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    if (customerAccessToken) {
      try {
        await customerLogout(customerAccessToken);
      } catch (err) {
        console.warn("Remote token revocation failed:", err);
      }
    }
    clearStoredToken();
    setCustomer(null);
    setCustomerAccessToken(null);
    setAuthError(null);
  };

  const recoverPassword = async (
    email: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      await customerRecoverPassword(email);
      return { success: true };
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Failed to initiate password reset.";
      return { success: false, error: msg };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        customer,
        customerAccessToken,
        isLoading,
        authError,
        login,
        register,
        logout,
        recoverPassword,
        refreshCustomer,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
