import styles from "./FabricStories.module.css";

const img = "/assets/suit1.jpg";

export default function FabricStories() {
  const items = ["Cotton Collection", "Muslin Collection", "Rayon Collection", "Georgette Collection"];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Fabric Stories</h2>

      <div className={styles.row}>
        {items.map((t, i) => (
          <div key={i} className={styles.card}>
            <img src={img} className={styles.img} />
            <span className={styles.label}>{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
