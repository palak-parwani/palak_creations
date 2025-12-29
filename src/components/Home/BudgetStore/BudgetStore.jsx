"use client";
import Slider from "react-slick";
import styles from "./BudgetStore.module.css";
import { useEffect, useState } from "react";

export default function BudgetStore() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
  };

  const items = [
    { title: "Under ₹699", img: "/assets/suit4.jpg" },
    { title: "Flat ₹999 Store", img: "/assets/suit4.jpg" },
    { title: "Buy 1 Get 1 Free", img: "/assets/suit4.jpg" },
    { title: "Buy 2 & Get 20% OFF", img: "/assets/suit4.jpg" },
  ];

  return (
    <section
      className={`${styles.section} ${isMobile ? "standard-padding" : ""}`}
    >
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2 className="heading">Shop More, Save More</h2>
        <p className="desc">Women's ethnic wear in our exclusive Sale.</p>
      </div>

      {/* DESKTOP → GRID */}
      {!isMobile && (
        <div className={styles.grid}>
          {items.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      )}

      {/* MOBILE → SLIDER */}
      {isMobile && (
        <Slider {...sliderSettings} className={styles.mobileSlider}>
          {items.map((card, index) => (
            <div key={index}>
              <Card card={card} />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
}

/* CARD */
const Card = ({ card }) => (
  <div className={styles.card}>
    <img src={card.img} alt={card.title} className={styles.img} />

    <div className={styles.overlay}>
      <p className={styles.title}>{card.title}</p>
      <button className={styles.ctaButton}>Shop Now</button>
    </div>
  </div>
);
