import React from "react";
import TopNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Wishlist.module.css";
import { MdDelete } from "react-icons/md";

const wishlistData = [
  {
    id: 1,
    name: "Maroon Viscose Blend Embroidered Suit Set With Sequins",
    price: "₹3,598",
    oldPrice: "₹3,998",
    discount: "10% off",
    image: "/assets/wishlist-product.jpg",
  },
  {
    id: 2,
    name: "Maroon Viscose Blend Embroidered Suit Set With Sequins",
    price: "₹3,598",
    oldPrice: "₹3,998",
    discount: "10% off",
    image: "/assets/wishlist-product.jpg",
  },
  {
    id: 3,
    name: "Maroon Viscose Blend Embroidered Suit Set With Sequins",
    price: "₹3,598",
    oldPrice: "₹3,998",
    discount: "10% off",
    image: "/assets/wishlist-product.jpg",
  },
  {
    id: 4,
    name: "Maroon Viscose Blend Embroidered Suit Set With Sequins",
    price: "₹3,598",
    oldPrice: "₹3,998",
    discount: "10% off",
    image: "/assets/wishlist-product.jpg",
  },
];

const Wishlist = () => {
  return (
    <>
      <TopNavbar />

      <div className={styles.wrapper}>
        <h2 className={`heading2 text-center ${styles.heading}`}>
          Guest Wishlist
        </h2>
        <p className="desc text-center">
          VIEWING {wishlistData.length} PRODUCTS
        </p>

        {/* GRID */}
        <div className={styles.grid}>
          {wishlistData.map((item) => (
            <div className={styles.card} key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.productImage}
              />

              <div className={styles.productInfo}>
                <p className={styles.productName}>{item.name}</p>

                <div className={styles.priceRow}>
                  <span className={styles.price}>{item.price}</span>
                  <span className={styles.oldPrice}>{item.oldPrice}</span>
                  <span className={styles.discount}>{item.discount}</span>
                </div>

                <div className={styles.actionRow}>
                  <button className={styles.deleteBtn}>
                    <MdDelete size={20} />
                  </button>
                  <button className={styles.cartBtn}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
