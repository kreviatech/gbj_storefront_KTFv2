"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import styles from "./Navbar.module.css";

const SUB_MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Chains", href: "/collections/chains" },
  { label: "Bangles", href: "/collections/bangles" },
  { label: "Bracelets", href: "/collections/bracelets" },
  { label: "Rings", href: "/collections/rings" },
  { label: "Earrings", href: "/collections/earrings" },
  { label: "Diamonds", href: "/collections/diamonds" },
  { label: "Watches", href: "/collections/watches" },
  { label: "Pandora", href: "/collections/pandora" },
  { label: "Latest Products", href: "/collections/latest-products" },
  { label: "Looking to sell?", href: "/looking-to-sell", isSpecial: true },
];

export default function Navbar() {
  const { openCart, cartCount } = useCart();
  const { customer, logout } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/collections/latest-products`;
    }
  };

  return (
    <>
      <header className={styles.header}>
        {/* 1. Top Announcement Bar */}
        <div className={styles.announcementBar}>
          <span className={styles.announcementText}>NEW PRODUCTS ADDED DAILY</span>
        </div>

        {/* 2. Main Navigation Bar */}
        <div className={styles.mainNavRow}>
          <div className={styles.navContainer}>
            {/* ====== MOBILE ONLY: Left Actions [ ☰ ] [ 🔍 ] ====== */}
            <div className={styles.mobileLeftActions}>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>

              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search Catalog"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>

            {/* ====== DESKTOP ONLY: Left Brand Logo ====== */}
            <Link href="/" className={styles.desktopLogo}>
              <Image
                src="/images/gold-bank-logo.png"
                alt="Gold Bank Jewellers - Est. 2016"
                width={140}
                height={52}
                priority
                className={styles.brandLogoImg}
              />
            </Link>

            {/* ====== DESKTOP ONLY: Center Menu ====== */}
            <nav className={styles.desktopNavMenu}>
              <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.activeLink : ""}`}>
                Home
              </Link>
              <div className={styles.dropdownTrigger}>
                <Link href="/collections/latest-products" className={styles.navLink}>
                  Shop <span className={styles.arrowDown}>▾</span>
                </Link>
              </div>
              <a href="/#features-precision" className={styles.navLink}>
                Feature
              </a>
              <Link href="/collections/watches" className={styles.navLink}>
                Watches & Jewellery
              </Link>
              <a href="/#crafted-bento" className={styles.navLink}>
                Craftsmanship
              </a>
            </nav>

            {/* ====== MOBILE ONLY: Center Framed Logo ====== */}
            <div className={styles.mobileCenterLogo}>
              <Link href="/" className={styles.logoFrame}>
                <Image
                  src="/images/gold-bank-logo.png"
                  alt="Gold Bank Jewellers - Est. 2016"
                  width={120}
                  height={42}
                  priority
                  className={styles.brandLogoImgMobile}
                />
              </Link>
            </div>

            {/* ====== DESKTOP ONLY: Right Actions (Search, Cart, Sell Jewellery) ====== */}
            <div className={styles.desktopRightActions}>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search Catalog"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              <div style={{ position: "relative" }}>
                <button
                  type="button"
                  className={`${styles.iconButton} ${customer ? styles.userLoggedIn : ""}`}
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  aria-label={customer ? `VIP Member: ${customer.displayName}` : "Customer Account"}
                  title={customer ? `VIP Member: ${customer.displayName}` : "Customer Account"}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  {customer && <span className={styles.authStatusDot} title="Authenticated Customer"></span>}
                </button>
              </div>

              <button
                type="button"
                className={`${styles.iconButton} ${styles.cartButton}`}
                onClick={openCart}
                aria-label={`View Cart (${cartCount} items)`}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className={styles.cartBadge}>{cartCount}</span>
              </button>

              <Link href="/looking-to-sell" className={styles.sellBtn}>
                Sell Jewellery
              </Link>
            </div>

            {/* ====== MOBILE ONLY: Right Actions [ 👤 ] [ 🛒 (0) ] ====== */}
            <div className={styles.mobileRightActions}>
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                aria-label="Customer Account"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>

              <button
                type="button"
                className={`${styles.iconButton} ${styles.cartButton}`}
                onClick={openCart}
                aria-label={`View Shopping Cart (${cartCount} items)`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className={styles.cartBadge}>{cartCount}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Luxury Horizontal Category Sub-Menu Bar */}
        <nav className={styles.subMenuBar} aria-label="Category Navigation">
          <div className={styles.subMenuContainer}>
            {SUB_MENU_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.subMenuItem} ${
                    isActive ? styles.activeSubItem : ""
                  } ${item.isSpecial ? styles.specialSubItem : ""}`}
                >
                  {item.label}
                  {item.isSpecial && <span className={styles.goldDot}>✨</span>}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Dropdown search bar */}
        {isSearchOpen && (
          <form onSubmit={handleSearch} className={styles.searchBarDropdown}>
            <input
              type="text"
              placeholder="Search Rolex, IWC, Gold Chains, Bangles, Rings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              autoFocus
            />
            <button type="submit" className={styles.searchSubmit}>
              Search
            </button>
          </form>
        )}

        {/* Account Quick Dropdown */}
        {isAccountOpen && (
          <div className={styles.accountDropdown}>
            {customer ? (
              <>
                <div className={styles.accountHeader}>
                  <strong>👑 {customer.displayName}</strong>
                  <span className={styles.dropdownEmail}>{customer.email}</span>
                  <span className={styles.dropdownRole}>Authenticated VIP Member</span>
                </div>
                <div className={styles.accountLinks}>
                  <Link
                    href="/account"
                    className={styles.accountLinkItem}
                    onClick={() => setIsAccountOpen(false)}
                  >
                    📦 My Orders & Addresses
                  </Link>
                  <Link
                    href="/looking-to-sell"
                    className={styles.accountLinkItem}
                    onClick={() => setIsAccountOpen(false)}
                  >
                    💰 Looking to Sell? Instant Valuation
                  </Link>
                  <a href="tel:08001234567" className={styles.accountLinkItem}>
                    📞 Showroom Concierge: 0800 123 4567
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setIsAccountOpen(false);
                    }}
                    className={styles.accountSignOutBtn}
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.accountHeader}>
                  <strong>Gold Bank Vault Access</strong>
                  <span>Est. 2016 • East Midlands</span>
                </div>
                <div className={styles.accountLinks}>
                  <Link
                    href="/account"
                    className={styles.accountLinkItem}
                    onClick={() => setIsAccountOpen(false)}
                  >
                    🔐 Sign In / Create Account
                  </Link>
                  <Link
                    href="/looking-to-sell"
                    className={styles.accountLinkItem}
                    onClick={() => setIsAccountOpen(false)}
                  >
                    💰 Looking to Sell? Instant Valuation
                  </Link>
                  <a href="tel:08001234567" className={styles.accountLinkItem}>
                    📞 Showroom Enquiries: 0800 123 4567
                  </a>
                  <a
                    href="https://shopify.com/99668787516/account"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.accountSignInBtn}
                    style={{ textAlign: "center", textDecoration: "none", display: "block" }}
                    onClick={() => setIsAccountOpen(false)}
                  >
                    Sign In with Shop Pay
                  </a>
                </div>
              </>
            )}
          </div>
        )}
      </header>

      {/* Slide-out Hamburger Menu Drawer */}
      {isMenuOpen && (
        <div className={styles.drawerOverlay} onClick={() => setIsMenuOpen(false)}>
          <div
            className={styles.drawerContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Navigation Menu"
          >
            <div className={styles.drawerHeader}>
              <div className={styles.drawerLogoBox}>
                <Image
                  src="/images/gold-bank-logo.png"
                  alt="Gold Bank Jewellers"
                  width={120}
                  height={44}
                  className={styles.brandLogoImg}
                />
              </div>
              <button
                type="button"
                className={styles.drawerCloseBtn}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className={styles.drawerCategoryLabel}>Store Collections</div>

            <nav className={styles.drawerNav}>
              {SUB_MENU_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.drawerLink} ${
                      isActive ? styles.drawerActiveLink : ""
                    } ${item.isSpecial ? styles.drawerSpecialLink : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className={styles.drawerArrow}>→</span>
                  </Link>
                );
              })}
            </nav>

            <div className={styles.drawerFooter}>
              <div className={styles.drawerGuarantee}>
                <span>🛡️ 100% Assayed & XRF Tested</span>
                <span>📦 Insured Next-Day UK Dispatch</span>
              </div>
              <a href="tel:08001234567" className={styles.drawerCallBtn}>
                📞 Call Valuers: 0800 123 4567
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
