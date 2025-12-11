"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./BestSellers.module.css";
import { style } from "framer-motion/client";

export default function BestSellers() {
  const sliderSettings = {
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };

  const images = [
    {
      url: "/assets/suitsets3.jpg",
      title: "Summer Collection",
      desc: "All types of wear in ethnic",
    },
    {
      url: "/assets/suitsets5.jpg",
      title: "New Arrivals",
      desc: "All types of wear in ethnic",
    },
    {
      url: "/assets/suitsets8.jpg",
      title: "Best Sellers",
      desc: "All types of wear in ethnic",
    },
    {
      url: "/assets/suit4.jpg",
      title: "Trending Now",
      desc: "All types of wear in ethnic",
    },
    {
      url: "/assets/suit4.jpg",
      title: "Special Offers",
      desc: "All types of wear in ethnic",
    },
    {
      url: "/assets/suit4.jpg",
      title: "Special Offers",
      desc: "All types of wear in ethnic",
    },
    {
      url: "/assets/suit4.jpg",
      title: "Special Offers",
      desc: "All types of wear in ethnic",
    },
  ];

  return (
    <div className="standard-padding">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2 className="heading">Best Sellers</h2>
        <p className={styles.subheading}>
          Our most-loved outfits, refreshed every week.
        </p>
      </div>
      <Slider {...sliderSettings}>
        {images.map((item, index) => (
          <div key={index} className={styles.cardBox}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.url}
                  width={400}
                  height={350}
                  alt={item.title}
                  className={styles.image}
                />

                <div className={styles.shadowOverlay}></div>

                <div className={styles.caption}>
                  <p className={`${styles.desc} mb-0`}>{item.desc}</p>
                  <div className={styles.premium}>{item.title}</div>
                  <button className={styles.shopbtn}>SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
