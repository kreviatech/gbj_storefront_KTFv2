"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import styles from "./account.module.css";

interface AccountClientProps {
  accountUrl: string;
  oauthUrl: string;
  shopName: string;
}

export default function AccountClient({
  accountUrl,
  shopName,
}: AccountClientProps) {
  const {
    customer,
    customerAccessToken,
    isLoading,
    authError,
    login,
    register,
    logout,
    recoverPassword,
    clearError,
  } = useAuth();

  // Tab: 'signin' | 'register' | 'recover'
  const [activeTab, setActiveTab] = useState<"signin" | "register" | "recover">("signin");

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [acceptsMarketing, setAcceptsMarketing] = useState(true);

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  // Dispatch lookup mock
  const [orderQuery, setOrderQuery] = useState("");
  const [emailQuery, setEmailQuery] = useState("");
  const [lookupMessage, setLookupMessage] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setFormSubmitting(true);
    setActionSuccessMessage(null);
    clearError();

    const res = await login(email.trim(), password);
    setFormSubmitting(false);

    if (res.success) {
      setPassword("");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setFormSubmitting(true);
    setActionSuccessMessage(null);
    clearError();

    const res = await register({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      password,
      acceptsMarketing,
    });
    setFormSubmitting(false);

    if (res.success) {
      setPassword("");
    }
  };

  const handleRecover = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setFormSubmitting(true);
    clearError();

    const res = await recoverPassword(email.trim());
    setFormSubmitting(false);

    if (res.success) {
      setActionSuccessMessage(
        `If an account exists for ${email.trim()}, password recovery instructions have been sent.`
      );
    }
  };

  const handleOrderLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim() && !emailQuery.trim()) {
      setLookupMessage("Please enter an Order Number or Email address to look up your dispatch.");
      return;
    }

    setIsSearching(true);
    setLookupMessage(null);

    setTimeout(() => {
      setIsSearching(false);
      setLookupMessage(
        `Order details for "${orderQuery.trim() || emailQuery.trim()}" are synced with your Shopify Customer Account. Sign in above for full tracking, authenticity certs, and dispatch status.`
      );
    }, 500);
  };

  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Accessing Gold Bank Secure Vault...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span>Customer Account</span>
      </nav>

      {/* Hero Header */}
      <div className={styles.heroHeader}>
        <span className={styles.badge}>Gold Bank Vault Access</span>
        <h1 className={styles.title}>
          {customer ? `Welcome back, ${customer.firstName || "Member"}` : "Customer Account & Orders"}
        </h1>
        <p className={styles.subtitle}>
          {customer
            ? "Your authenticated customer identity is connected. All orders and cart checkouts are tied directly to your Gold Bank Vault profile."
            : "Sign in with your email and password to access your saved addresses, track insured UK shipments, and ensure authenticated checkout."}
        </p>
      </div>

      {/* LOGGED IN VIEW: VIP DASHBOARD */}
      {customer && customerAccessToken ? (
        <div className={styles.dashboard}>
          {/* Member Banner */}
          <div className={styles.memberBanner}>
            <div className={styles.memberMeta}>
              <span className={styles.memberStatusBadge}>👑 Authenticated VIP Member</span>
              <h2 className={styles.memberName}>{customer.displayName}</h2>
              <span className={styles.memberEmail}>{customer.email}</span>
            </div>
            <div className={styles.bannerActions}>
              <Link href="/collections/latest-products" className={styles.browseVaultBtn}>
                Browse New Arrivals
              </Link>
              <button onClick={() => logout()} className={styles.signOutBtn}>
                Sign Out
              </button>
            </div>
          </div>

          {/* Customer Overview Grid */}
          <div className={styles.overviewGrid}>
            {/* Card 1: Default Address */}
            <div className={styles.dashboardCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  <span>📍</span> Primary Shipping Address
                </h3>
              </div>
              {customer.defaultAddress ? (
                <div className={styles.addressBox}>
                  <p className={styles.addressLine}>
                    <strong>
                      {customer.defaultAddress.firstName} {customer.defaultAddress.lastName}
                    </strong>
                  </p>
                  <p className={styles.addressLine}>{customer.defaultAddress.address1}</p>
                  {customer.defaultAddress.address2 && (
                    <p className={styles.addressLine}>{customer.defaultAddress.address2}</p>
                  )}
                  <p className={styles.addressLine}>
                    {customer.defaultAddress.city}, {customer.defaultAddress.province}{" "}
                    {customer.defaultAddress.zip}
                  </p>
                  <p className={styles.addressLine}>{customer.defaultAddress.country}</p>
                  {customer.defaultAddress.phone && (
                    <p className={styles.addressPhone}>📞 {customer.defaultAddress.phone}</p>
                  )}
                  <div className={styles.syncNotice}>
                    ✓ Pre-fills automatically at Shopify Checkout
                  </div>
                </div>
              ) : (
                <div className={styles.emptyAddress}>
                  <p>No default address saved yet.</p>
                  <p className={styles.subtext}>
                    Your shipping address will be automatically saved to your profile upon your next authenticated checkout.
                  </p>
                </div>
              )}
            </div>

            {/* Card 2: Vault Privileges */}
            <div className={styles.dashboardCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  <span>🛡️</span> Vault Member Privileges
                </h3>
              </div>
              <ul className={styles.privilegeList}>
                <li>
                  <strong>Direct Authenticated Checkout:</strong> Cart buyer identity is automatically recognized with zero friction.
                </li>
                <li>
                  <strong>Complimentary Insured Delivery:</strong> Royal Mail Special Delivery transit coverage up to £50,000.
                </li>
                <li>
                  <strong>Preferential Scrap & Trade-in:</strong> Best scrap rates for pre-owned 9ct/18ct gold and Swiss watches.
                </li>
                <li>
                  <strong>Private Viewing Room:</strong> Complimentary valuation appointments at our East Midlands showroom.
                </li>
              </ul>
            </div>
          </div>

          {/* Live Orders Section */}
          <div className={styles.ordersSection}>
            <div className={styles.ordersHeader}>
              <h2 className={styles.ordersTitle}>
                <span>📦</span> Acquisition & Order History
              </h2>
              <span className={styles.ordersCount}>
                {customer.orders?.edges.length || 0} Orders on Record
              </span>
            </div>

            {!customer.orders || customer.orders.edges.length === 0 ? (
              <div className={styles.emptyOrdersCard}>
                <span className={styles.emptyIcon}>💎</span>
                <h3 className={styles.emptyOrdersTitle}>No Orders Yet</h3>
                <p className={styles.emptyOrdersText}>
                  Any pieces acquired while signed into your account will automatically display here with live Royal Mail tracking and invoice history.
                </p>
                <Link href="/collections/latest-products" className={styles.primaryAuthBtn} style={{ maxWidth: "260px", margin: "0 auto" }}>
                  Explore New Acquisitions
                </Link>
              </div>
            ) : (
              <div className={styles.orderList}>
                {customer.orders.edges.map(({ node: order }) => {
                  const dateStr = new Date(order.processedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });

                  return (
                    <div key={order.id} className={styles.orderCard}>
                      <div className={styles.orderCardTop}>
                        <div>
                          <span className={styles.orderNumber}>Order {order.name}</span>
                          <span className={styles.orderDate}>Placed on {dateStr}</span>
                        </div>
                        <div className={styles.orderStatuses}>
                          <span
                            className={`${styles.statusBadge} ${
                              order.financialStatus === "PAID"
                                ? styles.statusPaid
                                : styles.statusPending
                            }`}
                          >
                            {order.financialStatus || "PAID"}
                          </span>
                          <span
                            className={`${styles.statusBadge} ${
                              order.fulfillmentStatus === "FULFILLED"
                                ? styles.statusFulfilled
                                : styles.statusUnfulfilled
                            }`}
                          >
                            {order.fulfillmentStatus || "PROCESSING"}
                          </span>
                          <span className={styles.orderTotal}>
                            {order.totalPrice.currencyCode}{" "}
                            {parseFloat(order.totalPrice.amount).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Line items */}
                      <div className={styles.orderLineItems}>
                        {order.lineItems.edges.map(({ node: item }, i) => (
                          <div key={i} className={styles.lineItemRow}>
                            {item.variant?.image?.url && (
                              <div className={styles.lineItemImgWrap}>
                                <Image
                                  src={item.variant.image.url}
                                  alt={item.title}
                                  width={48}
                                  height={48}
                                  className={styles.lineItemImg}
                                />
                              </div>
                            )}
                            <div className={styles.lineItemInfo}>
                              <span className={styles.lineItemTitle}>{item.title}</span>
                              {item.variant?.title && item.variant.title !== "Default Title" && (
                                <span className={styles.lineItemVariant}>{item.variant.title}</span>
                              )}
                              <span className={styles.lineItemQty}>Qty: {item.quantity}</span>
                            </div>
                            {item.variant?.price && (
                              <span className={styles.lineItemPrice}>
                                {item.variant.price.currencyCode}{" "}
                                {parseFloat(item.variant.price.amount).toLocaleString()}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Tracking / Fulfillments if available */}
                      {order.successfulFulfillments && order.successfulFulfillments.length > 0 && (
                        <div className={styles.trackingBox}>
                          {order.successfulFulfillments.map((f, fi) => (
                            <div key={fi} className={styles.trackingRow}>
                              <span>🚚 Carrier: {f.trackingCompany || "Royal Mail Tracked"}</span>
                              {f.trackingInfo?.map((t, ti) =>
                                t.url ? (
                                  <a
                                    key={ti}
                                    href={t.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.trackingLink}
                                  >
                                    Track Consignment: {t.number || "View Dispatch"} →
                                  </a>
                                ) : (
                                  <span key={ti}>Tracking: {t.number}</span>
                                )
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* LOGGED OUT VIEW: AUTH TABS (SIGN IN / REGISTER / RECOVER) */
        <div className={styles.gridContainer}>
          {/* Main Auth Form Card */}
          <div className={`${styles.card} ${styles.cardFeatured}`}>
            {/* Tab Headers */}
            <div className={styles.tabHeaders}>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === "signin" ? styles.activeTabBtn : ""}`}
                onClick={() => {
                  setActiveTab("signin");
                  clearError();
                  setActionSuccessMessage(null);
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === "register" ? styles.activeTabBtn : ""}`}
                onClick={() => {
                  setActiveTab("register");
                  clearError();
                  setActionSuccessMessage(null);
                }}
              >
                Create Account
              </button>
            </div>

            {/* Error Message */}
            {authError && (
              <div className={styles.errorAlert}>
                <span>⚠️</span>
                <span>{authError}</span>
              </div>
            )}

            {/* Success Message */}
            {actionSuccessMessage && (
              <div className={styles.successAlert}>
                <span>✓</span>
                <span>{actionSuccessMessage}</span>
              </div>
            )}

            {/* TAB 1: SIGN IN */}
            {activeTab === "signin" && (
              <form onSubmit={handleSignIn} className={styles.authForm}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>
                    <span>🔐</span> Sign In to Gold Bank Vault
                  </h2>
                  <p className={styles.cardSubtitle}>
                    Enter your email and password. Your session will associate directly with the checkout cart for recognized member privileges.
                  </p>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="signinEmail" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="signinEmail"
                    type="email"
                    required
                    placeholder="e.g. customer@example.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.labelRow}>
                    <label htmlFor="signinPassword" className={styles.label}>
                      Password
                    </label>
                    <button
                      type="button"
                      className={styles.forgotLink}
                      onClick={() => {
                        setActiveTab("recover");
                        clearError();
                      }}
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <input
                    id="signinPassword"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className={styles.primaryAuthBtn}
                >
                  {formSubmitting ? "Authenticating..." : "Sign In to Your Account →"}
                </button>

                <div className={styles.authDivider}>or passwordless access</div>

                <a
                  href={accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAuthBtn}
                >
                  Sign In with Shop Pay / One-Time Code ↗
                </a>
              </form>
            )}

            {/* TAB 2: REGISTER */}
            {activeTab === "register" && (
              <form onSubmit={handleRegister} className={styles.authForm}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>
                    <span>👑</span> Create a Vault Account
                  </h2>
                  <p className={styles.cardSubtitle}>
                    Join {shopName}&apos;s customer network for saved addresses, instant authenticated checkout, and guaranteed buy-back rates.
                  </p>
                </div>

                <div className={styles.nameRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="regFirstName" className={styles.label}>
                      First Name
                    </label>
                    <input
                      id="regFirstName"
                      type="text"
                      required
                      placeholder="e.g. John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="regLastName" className={styles.label}>
                      Last Name
                    </label>
                    <input
                      id="regLastName"
                      type="text"
                      required
                      placeholder="e.g. Smith"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="regEmail" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="regEmail"
                    type="email"
                    required
                    placeholder="e.g. customer@example.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="regPassword" className={styles.label}>
                    Create Password (min. 6 characters)
                  </label>
                  <input
                    id="regPassword"
                    type="password"
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={acceptsMarketing}
                    onChange={(e) => setAcceptsMarketing(e.target.checked)}
                    className={styles.checkbox}
                  />
                  <span>Receive notification of rare gold pieces and private vault drops.</span>
                </label>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className={styles.primaryAuthBtn}
                >
                  {formSubmitting ? "Creating Account..." : "Create Account & Enter Vault →"}
                </button>
              </form>
            )}

            {/* TAB 3: RECOVER PASSWORD */}
            {activeTab === "recover" && (
              <form onSubmit={handleRecover} className={styles.authForm}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.cardTitle}>
                    <span>🔑</span> Reset Your Password
                  </h2>
                  <p className={styles.cardSubtitle}>
                    Enter your account email address and we will send you instructions to reset your password.
                  </p>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="recoverEmail" className={styles.label}>
                    Account Email Address
                  </label>
                  <input
                    id="recoverEmail"
                    type="email"
                    required
                    placeholder="e.g. customer@example.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className={styles.primaryAuthBtn}
                >
                  {formSubmitting ? "Sending..." : "Send Password Reset Link"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("signin");
                    clearError();
                  }}
                  className={styles.secondaryAuthBtn}
                  style={{ marginTop: "12px" }}
                >
                  ← Back to Sign In
                </button>
              </form>
            )}

            <div className={styles.securityNote}>
              <span>🛡️</span>
              <div>
                <strong>Bank-Grade Customer Token Encryption:</strong> Your identity is verified directly against Shopify with 256-bit TLS encryption.
              </div>
            </div>
          </div>

          {/* Quick Dispatch & Order Lookup Form */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>
                <span>📦</span> Quick Dispatch Lookup
              </h2>
              <p className={styles.cardSubtitle}>
                Have a reference number from a recent acquisition? Enter it below to check courier transit status.
              </p>
            </div>

            <form onSubmit={handleOrderLookup}>
              <div className={styles.formGroup}>
                <label htmlFor="orderNum" className={styles.label}>
                  Order Reference Number
                </label>
                <input
                  id="orderNum"
                  type="text"
                  placeholder="e.g. #1001 or GBJ-10482"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="emailAddress" className={styles.label}>
                  Account Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  placeholder="e.g. customer@example.co.uk"
                  value={emailQuery}
                  onChange={(e) => setEmailQuery(e.target.value)}
                  className={styles.input}
                />
              </div>

              <button
                type="submit"
                className={styles.lookupBtn}
                disabled={isSearching}
              >
                {isSearching ? "Searching Records..." : "Lookup Shipment Status"}
              </button>
            </form>

            {lookupMessage && (
              <div className={styles.lookupResult}>
                <p style={{ margin: 0 }}>{lookupMessage}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Perks Grid */}
      <div className={styles.perksGrid}>
        <div className={styles.perkCard}>
          <h3 className={styles.perkTitle}>Insured Next-Day Dispatch</h3>
          <p className={styles.perkText}>
            Every piece is shipped via Royal Mail Special Delivery or armoured courier with comprehensive transit insurance.
          </p>
        </div>

        <div className={styles.perkCard}>
          <h3 className={styles.perkTitle}>Assayed Authenticity</h3>
          <p className={styles.perkText}>
            All solid 9ct and 18ct jewellery is hallmarked in Birmingham, London, or Sheffield with XRF spectroscopy verification.
          </p>
        </div>

        <div className={styles.perkCard}>
          <h3 className={styles.perkTitle}>Guaranteed Buy-Back</h3>
          <p className={styles.perkText}>
            Vault members receive preferential rates when looking to upgrade, trade in, or sell luxury watches and scrap gold.
          </p>
        </div>
      </div>

      {/* Concierge & Showroom */}
      <div className={styles.showroomCard}>
        <h3 className={styles.showroomTitle}>Need Personal Concierge Assistance?</h3>
        <p className={styles.showroomText}>
          Our East Midlands showroom specialists are available Monday to Saturday for private viewings, custom sizing, and valuation appointments.
        </p>
        <div className={styles.showroomActions}>
          <a href="tel:08001234567" className={styles.callShowroomBtn}>
            Speak to a Specialist: 0800 123 4567
          </a>
          <Link href="/looking-to-sell" className={styles.sellShowroomBtn}>
            Sell or Trade In Jewellery
          </Link>
        </div>
      </div>
    </div>
  );
}
