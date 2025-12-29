import Image from "next/image";
import styles from "./Footer.module.css";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className={`${styles.footer} standard-padding`}>
      {/* TOP ROW */}
      <div className={styles.topRow}>

        {/* BRAND */}
        <div className={styles.col}>
          {/* <h4 className={styles.title}>Palak Creations</h4> */}
          <Image src="/assets/newone2.png" alt="footer-logo" width={100} height={100} className={styles.logoimg} />
          <p className={styles.text}>
            Celebrating the elegance of Indian ethnic wear through
            handcrafted designs, premium fabrics, and timeless artistry.
          </p>

          <div className={styles.socials}>
            <FiInstagram />
            <FiFacebook />
            <FiTwitter />
            <FiYoutube />
          </div>
        </div>

        {/* SHOP */}
        <div className={styles.col}>
          <h5 className={styles.heading}>Shop</h5>
          <a>New Arrivals</a>
          <a>Kurtis</a>
          <a>Suit Sets</a>
          <a>Co-ords</a>
          <a>Festive Collection</a>
        </div>

        {/* CUSTOMER CARE */}
        <div className={styles.col}>
          <h5 className={styles.heading}>Customer Care</h5>
          <a>Track Order</a>
          <a>Return & Refund</a>
          <a>Shipping Info</a>
          <a>Contact Us</a>
          <a>FAQ</a>
        </div>

        {/* NEWSLETTER */}
        <div className={styles.col}>
          <h5 className={styles.heading}>Stay Updated</h5>
          <p className={styles.text}>
            Subscribe to receive updates on new launches and offers.
          </p>

          <div className={styles.newsletter}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      {/* BOTTOM ROW */}
      <div className={styles.bottomRow}>
        <p>© {new Date().getFullYear()} Palak Creations. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
