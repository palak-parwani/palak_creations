import React from "react";
import TopNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <TopNavbar />

      <div className={`standard-padding ${styles.wrapper}`}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.intro}>
          Contemporary ethnic wear designed for comfort, elegance, and everyday
          confidence.
        </p>

        <section className={styles.section}>
          <p>
            We are a women’s ethnic wear brand offering a curated range of
            kurtis, suit sets, co-ords, festive wear, wedding wear, office wear,
            and daily wear. Our collections are thoughtfully designed to blend
            Indian aesthetics with modern silhouettes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What We Believe</h2>
          <p>
            Clothing should feel effortless. We focus on quality fabrics,
            comfortable fits, and timeless designs that women can wear across
            occasions — from everyday routines to special celebrations.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What We Offer</h2>
          <ul className={styles.list}>
            <li>Kurtis & Tunics</li>
            <li>Suit Sets & Anarkalis</li>
            <li>Co-ord Sets</li>
            <li>Festive & Wedding Wear</li>
            <li>Office & Daily Wear</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Our Promise</h2>
          <p>
            We are committed to delivering well-crafted ethnic wear that balances
            style, comfort, and affordability — without compromise.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
