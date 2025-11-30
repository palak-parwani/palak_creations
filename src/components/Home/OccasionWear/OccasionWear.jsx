import React from "react";
import styles from "./OccasionWear.module.css";

const img = "/assets/suit1.jpg";

export default function OccasionWear() {
  const items = ["Festive Wear", "Wedding Wear", "Office Wear", "Daily Wear"];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Shop by Occasion</h2>

      <div className={styles.grid}>
        {items.map((name, i) => (
          <div className={styles.card} key={i}>
            <img src={img} className={styles.img} />
            <div className={styles.tag}>{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
