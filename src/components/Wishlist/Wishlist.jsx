import React from "react";
import TopNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Wishlist.module.css";
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
  return (
    <>
      <TopNavbar />

      <div className={styles.wrapper}>
        <h2 className={`heading2 text-center ${styles.heading}`}>Guest Wishlist</h2>
        <p className="desc">VIEWING 1 PRODUCTS</p>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <img
              src="/assets/wishlist-product.jpg" // replace with your image
              alt="wishlist-product"
              className={styles.productImage}
            />

            <div className={styles.productInfo}>
              <p className={styles.productName}>
                Maroon Viscose Blend Embroidered Suit Set With Sequins
              </p>

              <div className={styles.priceRow}>
                <span className={styles.price}>₹3,598</span>
                <span className={styles.oldPrice}>₹3,998</span>
                <span className={styles.discount}>10% off</span>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.deleteBtn}><MdDelete size={20} /></button>
                <button className={styles.cartBtn}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <img
              src="/assets/wishlist-product.jpg" // replace with your image
              alt="wishlist-product"
              className={styles.productImage}
            />

            <div className={styles.productInfo}>
              <p className={styles.productName}>
                Maroon Viscose Blend Embroidered Suit Set With Sequins
              </p>

              <div className={styles.priceRow}>
                <span className={styles.price}>₹3,598</span>
                <span className={styles.oldPrice}>₹3,998</span>
                <span className={styles.discount}>10% off</span>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.deleteBtn}><MdDelete size={20} /></button>
                <button className={styles.cartBtn}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <img
              src="/assets/wishlist-product.jpg" // replace with your image
              alt="wishlist-product"
              className={styles.productImage}
            />

            <div className={styles.productInfo}>
              <p className={styles.productName}>
                Maroon Viscose Blend Embroidered Suit Set With Sequins
              </p>

              <div className={styles.priceRow}>
                <span className={styles.price}>₹3,598</span>
                <span className={styles.oldPrice}>₹3,998</span>
                <span className={styles.discount}>10% off</span>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.deleteBtn}><MdDelete size={20} /></button>
                <button className={styles.cartBtn}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <img
              src="/assets/wishlist-product.jpg" // replace with your image
              alt="wishlist-product"
              className={styles.productImage}
            />

            <div className={styles.productInfo}>
              <p className={styles.productName}>
                Maroon Viscose Blend Embroidered Suit Set With Sequins
              </p>

              <div className={styles.priceRow}>
                <span className={styles.price}>₹3,598</span>
                <span className={styles.oldPrice}>₹3,998</span>
                <span className={styles.discount}>10% off</span>
              </div>

              <div className={styles.actionRow}>
                <button className={styles.deleteBtn}><MdDelete size={20} /></button>
                <button className={styles.cartBtn}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
