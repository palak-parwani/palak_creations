import styles from "./BrandStory.module.css";

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          
          <div className={styles.motif}></div>

          <h2 className={styles.heading}>Our Brand Story</h2>
          <div className={styles.line}></div>

          <p className={styles.quote}>
            “Elegance crafted through tradition  
            and reimagined for the modern woman.”
          </p>

          <p className={styles.text}>
            Palak Creations was founded with a simple belief — 
            ethnic wear should celebrate every woman’s inner grace 
            while embracing the beauty of Indian craftsmanship.
            <br /><br />
            Every design is inspired by heritage artistry, 
            handworked detailing, and the timeless charm of 
            traditional textiles.  
            <br /><br />
            Our pieces are created not just to be worn,  
            but to be cherished.
          </p>

          <p className={styles.signature}>— Palak Creations</p>
        </div>
      </div>
    </section>
  );
}
