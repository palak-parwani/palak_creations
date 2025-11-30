
import styles from "./BudgetStore.module.css";

export default function BudgetStore() {
  const items = [
    { title: "Under ₹699", img: "/assets/suit4.jpg" },
    { title: "Flat ₹999 Store", img: "/assets/suit4.jpg" },
    { title: "Buy 1 Get 1 Free", img: "/assets/suit4.jpg" },
    { title: "Buy 2 & Get 20% OFF", img: "/assets/suit4.jpg" },
  ];

  return (
    <section className={styles.section}>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2 className={styles.heading}>Shop More, Save More</h2>
      <p className="desc">Women's ethnic wear in our exclusive Sale.</p>
      </div>

      <div className={styles.grid}>
        {items.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.img} alt={card.title} className={styles.img} />

            <div className={styles.overlay}>
              <p className={styles.title}>{card.title}</p>

              {/* CTA BUTTON — appears only on hover */}
              <button className={styles.ctaButton}>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


