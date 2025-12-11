  import { useState } from "react";
  import { Navbar, Nav, Container } from "react-bootstrap";
  import { FiUser, FiSearch, FiHeart,  FiX } from "react-icons/fi";
  import styles from "./Navbar.module.css";
  import { FaShoppingCart } from "react-icons/fa";
  import LoginModal from "../LoginModal/LoginModal";
  import Link from "next/link";
  import CartSidebar from "../CartSidebar/CartSidebar";

  export default function TopNavbar() {
    //Import name can be anything because default export can be renamed.
    // const [showSearch, setShowSearch] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);

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

    // const [showCart, setShowCart] = useState(false);

// STATIC DATA HERE ⬇⬇⬇
const [cartItems, setCartItems] = useState([
  {
    id: 1,
    name: "Off White Polka Kurta Set",
    size: "XS",
    price: 999,
    quantity: 1,
    image: "/assets/dress1.webp"
  },
  {
    id: 2,
    name: "Printed Cotton Kurti",
    size: "M",
    price: 749,
    quantity: 2,
    image: "/assets/dress2.webp"
  }
]);


    return (
      <>
        <div className="position-relative">
          <Navbar expand="lg" className={`${styles.navbar}`}>
            <Container className="d-flex align-items-center justify-content-between">
              {/* LEFT: LOGO */}
              <Navbar.Brand href="/">
                <img
                  src="/assets/newone2.png"
                  alt="Brand Logo"
                  className={styles.logoimg}
                />
              </Navbar.Brand>

              {/* CENTER MENU */}
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
                <div className={styles.searchBox}>
                  <FiSearch className={styles.searchInsideIcon} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className={styles.searchInputNavbar}
                    autoFocus
                  />
                  {/* <FiX
                    className={styles.closeSearchIcon}
                    onClick={() => setShowSearch(false)}
                  /> */}
                </div>
                <FiUser onClick={() => setShowLogin(true)} />
                <LoginModal
                  open={showLogin}
                  onClose={() => setShowLogin(false)}
                />

                <Link href="/wishlist">
                  <FiHeart style={{ cursor: "pointer" }} />
                </Link>
                <FaShoppingCart
                  onClick={() => setShowCart(true)}
                  style={{ cursor: "pointer" }}
                />

                <CartSidebar 
  isOpen={showCart} 
  onClose={() => setShowCart(false)} 
  cartItems={cartItems} 
  setCartItems={setCartItems}
/>
              </div>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }




// If you want:

// 🔥 I can also explain

// how slug routing works
// how your category pages load filters/products
// how to use dynamic params
// how to make dropdown animation

// Just say "Explain category page also".