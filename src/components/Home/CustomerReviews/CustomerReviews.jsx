import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React, { useRef, useState, useEffect } from "react";
import styles from "./CustomerReviews.module.css";
import Slider from "react-slick";
import Image from "next/image";

export default function CustomerReviews() {
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      img: "/assets/suitsets1.jpg",
      name: "Ayesha",
      rating: 5,
      text: "Amazing quality! Loved the fabric and finishing.",
    },
    {
      id: 2,
      img: "/assets/ethnic1.jpg",
      name: "Ritika",
      rating: 4,
      text: "Perfect fitting and very elegant!",
    },
    {
      id: 3,
      img: "/assets/cord3.jpg",
      name: "Simran",
      rating: 5,
      text: "Premium designs. Worth every penny!",
    },
    {
      id: 4,
      img: "/assets/suit2.jpg",
      name: "Pooja",
      rating: 5,
      text: "Fast delivery and great quality.",
    },
    {
      id: 5,
      img: "/assets/suit1.jpg",
      name: "Divya",
      rating: 4,
      text: "Soft fabric and beautiful colours.",
    },
    {
      id: 6,
      img: "/assets/suitsets6.jpg",
      name: "Shalini",
      rating: 5,
      text: "Loved the stitching and comfort.",
    },
  ];

  const stopAutoplay = () => {
    sliderRef.current?.slickPause();
  };
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 600) {
        setSlidesToShow(1.02);
      } else if (width < 800) {
        setSlidesToShow(2);
      } else if (width < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 600,
  infinite: true,

  slidesToScroll: 1,
  slidesToShow: 1,          // still required
  variableWidth: true,      // 🔥 MOST IMPORTANT

  beforeChange: (_, next) => setSlideIndex(next),
};



  return (
    <div className={`${styles.packagesBox}`}>
      {/* Header with Arrows */}
      <div className={`${styles.customPeaceOfMindDiv} mb-md-4 mb-2`}>
        <h2 className={`heading2 ${styles.staycationPeaceHead}`}>
          What Our Customers Say
        </h2>

        {/* ARROWS */}
        <div className="d-flex gap-2">
          <div
            className={`${styles.customSliderArrows} ${slideIndex === 0 ? "" : styles.active
              }`}
            onClick={() => {
              stopAutoplay();
              sliderRef.current?.slickPrev();
            }}
          >
            <MdArrowBackIos className={styles.customSliderIcon1} />
          </div>

          <div
            className={`${styles.customSliderArrows}`}
            onClick={() => {
              stopAutoplay();
              sliderRef.current?.slickNext();
            }}
          >
            <MdArrowForwardIos className={styles.customSliderIcon2} />
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className={styles.packagesContainer}>
        <Slider ref={sliderRef} {...settings}>
  {reviews.map((rev, index) => (
    <div key={index} style={{ width: 220 }}>
      <div className={styles.packageItem}>
        <div className={styles.reviewCard}>
          <Image
            src={rev.img}
            alt={rev.name}
            width={100}
            height={100}
            className={styles.reviewImg}
          />

          <div className={styles.stars}>
            {Array.from({ length: rev.rating }).map((_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>

          <p className={styles.reviewText}>“{rev.text}”</p>
          <p className={styles.reviewName}>— {rev.name}</p>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
    </div>
  );
}
