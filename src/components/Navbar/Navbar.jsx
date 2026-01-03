"use client";

import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FiUser,
  FiSearch,
  FiHeart,
  FiX,
} from "react-icons/fi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";
import LoginModal from "../LoginModal/LoginModal";
import Link from "next/link";
import CartSidebar from "../CartSidebar/CartSidebar";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";

export default function TopNavbar() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // ✅ MOBILE STATES
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  const isWishlistPage = router.pathname === "/wishlist";

  const menuItems = [
    {
      name: "NEW ARRIVALS",
      sub: ["Kurtis", "Suits & Sets", "Co-ords", "Sarees"],
    },
    {
      name: "KURTIS",
      sub: ["Cotton Kurtis", "Printed Kurtis", "Straight Fit", "Anarkali"],
    },
    {
      name: "SUIT SETS",
      sub: [
        "Kurta With Plazo",
        "Kurta With Plazo & Dupatta",
        "Anarkali Suit",
        "Kurta With Afgani-Pant & Dupatta",
        "Kurta With Pant & Jacket",
        "Kurta With Pant & Dupatta",
      ],
    },
    {
      name: "CO-ORDS",
      sub: [
        "Casual Co-ords",
        "Formal Co-ords",
        "Part Wear Co-ords",
        "Co-ords With Plazo",
      ],
    },
    {
      name: "ETHENIC WEAR",
      sub: [
        "Wedding Wear",
        "Festive Wear",
        "Office Wear",
        "Daily Wear",
        "Plazo Set",
        "Garara Set",
        "Lehanga Choli",
      ],
    },
    {
      name: "OFFERS",
      sub: ["Flat 999", "Under 699", "Clearance Sale"],
    },
  ];

  // ✅ STATIC CART DATA (UNCHANGED)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Off White Polka Kurta Set",
      size: "XS",
      price: 999,
      quantity: 1,
      image: "/assets/dress1.webp",
    },
    {
      id: 2,
      name: "Printed Cotton Kurti",
      size: "M",
      price: 749,
      quantity: 2,
      image: "/assets/dress2.webp",
    },
  ]);
  const handleMobileMenuToggle = (name) => {
    setActiveMobileMenu((prev) => (prev === name ? null : name));
  };


  return (
    <>
      {/* ================= MOBILE SEARCH ================= */}
      {showMobileSearch && (
        <div className={styles.mobileSearch}>
          <FiSearch />
          <input placeholder="Search products..." />
          <FiX onClick={() => setShowMobileSearch(false)} />
        </div>
      )}

      {/* ================= NAVBAR ================= */}
      <Navbar expand="lg" className={styles.navbar}>
        <div className={`d-flex align-items-center justify-content-between w-100 standard-padding ${styles.padding}`}>
          {/* LOGO */}
          <Navbar.Brand href="/">
            <img
              src="/assets/newone2.png"
              alt="Brand Logo"
              className={styles.logoimg}
            />
          </Navbar.Brand>

          {/* DESKTOP MENU */}
          <Nav className="mx-auto d-none d-lg-flex gap-2 me-5 ps-5">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={styles.menuWrapper}
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={`/category/${item.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  <span className={styles.navLink}>{item.name}</span>
                </Link>

                {activeMenu === item.name && (
                  <div className={styles.dropdownMenu}>
                    {item.sub.map((subItem, i) => (
                      <Link
                        key={i}
                        href={`/category/${item.name
                          .toLowerCase()
                          .replaceAll(" ", "-")}/${subItem
                            .toLowerCase()
                            .replaceAll(" ", "-")}`}
                        className={styles.dropdownItem}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Nav>

          {/* RIGHT ICONS */}
          <div className={styles.iconContainer}>
            {/* MOBILE SEARCH ICON */}
            <FiSearch
              className="d-lg-none mt-2"
              onClick={() => setShowMobileSearch(true)}
            />

            {/* DESKTOP SEARCH */}
            <div className="d-none d-lg-flex">
              <div className={styles.searchBox}>
                <FiSearch className={styles.searchInsideIcon} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className={styles.searchInputNavbar}
                />
              </div>
            </div>

            {/* DESKTOP LOGIN */}
            <FiUser
              className="d-none d-lg-block"
              onClick={() => setShowLogin(true)}
              size={20}
            />

            <Link href="/wishlist">
              {isWishlistPage ? (
                <FaHeart size={20} color="red" style={{ transition: "0.3s" }} />
              ) : (
                <FiHeart size={20} />
              )}
            </Link>
            {/* 🛒 CART ICON (UNCHANGED) */}
            <FaShoppingCart onClick={() => setShowCart(true)} size={18} />

            {/* 🍔 HAMBURGER */}
            <div className="d-lg-none">
              <span
                className={styles.hamburger}
                onClick={() => setShowMobileMenu(true)}
              >
                ☰
              </span>
            </div>
          </div>
        </div>
      </Navbar>

      {/* ================= CART SIDEBAR (UNCHANGED) ================= */}
      <CartSidebar
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

      {/* ================= LOGIN MODAL ================= */}
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />

      {/* ================= MOBILE MENU ================= */}
      {showMobileMenu && (
        <div
          className={styles.mobileMenuOverlay}
          onClick={() => setShowMobileMenu(false)}
        >
          <div
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
          >
            <FiX
              className={styles.closeIcon}
              onClick={() => setShowMobileMenu(false)}
            />

            <div
              className={styles.mobileLogin}
              onClick={() => {
                setShowLogin(true);
                setShowMobileMenu(false);
              }}
            >
              <FiUser /> Login / Signup
            </div>

            {menuItems.map((item, i) => {
              const isOpen = activeMobileMenu === item.name;

              return (
                <div key={i} className={styles.mobileMenuItem}>
                  {/* MAIN ITEM */}
                  <div
                    className={styles.mobileMenuTitle}
                    onClick={() => handleMobileMenuToggle(item.name)}
                  >
                    <span>{item.name}</span>
                    <span
                      className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
                    >
                      <IoMdArrowDropdown size={20} />
                    </span>
                  </div>

                  {/* SUB MENU */}
                  <div
                    className={`${styles.mobileSubMenu} ${isOpen ? styles.open : ""
                      }`}
                  >
                    {item.sub.map((sub, j) => (
                      <Link
                        key={j}
                        href={`/category/${item.name
                          .toLowerCase()
                          .replaceAll(" ", "-")}/${sub
                            .toLowerCase()
                            .replaceAll(" ", "-")}`}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      )}

      {/* ================= MOBILE SEARCH OVERLAY ================= */}
      {showMobileSearch && (
        <div className={styles.mobileSearchOverlay}>
          <div className={styles.mobileSearchBox}>
            <FiSearch />
            <input
              autoFocus
              type="text"
              placeholder="Search products..."
            />
            <FiX onClick={() => setShowMobileSearch(false)} />
          </div>
        </div>
      )}
    </>
  );
}
