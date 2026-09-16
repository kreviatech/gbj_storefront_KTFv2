"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { createShopifyCheckout } from "@/lib/shopify";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, cartTotal, cartCount } =
    useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (cart.length === 0 || isCheckingOut) return;
    setIsCheckingOut(true);
    setCheckoutError(null);
    try {
      const checkoutItems = cart.map((item) => ({
        merchandiseId: item.variantId || item.product.variants?.[0]?.id,
        quantity: item.quantity,
        product: item.product,
      }));

      const res = await createShopifyCheckout(checkoutItems);
      if (res.checkoutUrl) {
        window.location.href = res.checkoutUrl;
      } else {
        throw new Error("Checkout URL was not returned by Shopify.");
      }
    } catch (err: unknown) {
      console.error("Shopify checkout creation failed:", err);
      const msg =
        err instanceof Error ? err.message : "Unable to initiate checkout. Please try again.";
      setCheckoutError(msg);
      setIsCheckingOut(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className={styles.header}>
          <div className={styles.headerTitleGroup}>
            <span className={styles.cartIcon}>🛍️</span>
            <h3 className={styles.title}>Your Shopping Bag</h3>
            <span className={styles.countBadge}>{cartCount}</span>
          </div>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Close Bag">
            ✕
          </button>
        </div>

        {/* Drawer Content */}
        <div className={styles.itemsList}>
          {cart.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>💎</span>
              <h4 className={styles.emptyTitle}>Your Bag is Empty</h4>
              <p className={styles.emptyText}>
                Discover our luxury watches, fine gold chains, bangles, and diamond pieces.
              </p>
              <button className={styles.shopNowBtn} onClick={closeCart}>
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map(({ product, quantity }) => {
              const price = parseFloat(product.priceRange.minVariantPrice.amount);
              const currency = product.priceRange.minVariantPrice.currencyCode;
              const imgUrl = product.featuredImage?.url || "/images/hero-watch-dial.jpg";

              return (
                <div key={product.id} className={styles.cartItem}>
                  <div className={styles.itemImageWrapper}>
                    <Image
                      src={imgUrl}
                      alt={product.title}
                      width={80}
                      height={80}
                      className={styles.itemImage}
                    />
                  </div>

                  <div className={styles.itemDetails}>
                    <div className={styles.itemTopRow}>
                      <h4 className={styles.itemTitle}>{product.title}</h4>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(product.id)}
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>

                    <p className={styles.itemPrice}>
                      {currency} {(price * quantity).toLocaleString()}
                    </p>

                    <div className={styles.quantityControls}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        -
                      </button>
                      <span className={styles.qtyNumber}>{quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotalRow}>
              <span className={styles.subtotalLabel}>Estimated Subtotal</span>
              <span className={styles.subtotalAmount}>
                INR {cartTotal.toLocaleString()}
              </span>
            </div>
            <p className={styles.shippingNotice}>
              Taxes and insured courier shipping calculated at checkout.
            </p>
            {checkoutError && (
              <p className={styles.checkoutError}>{checkoutError}</p>
            )}
            <button
              className={styles.checkoutBtn}
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? "Securing Your Order..." : "Proceed to Secure Checkout"}
            </button>
            <button className={styles.continueBtn} onClick={closeCart}>
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
