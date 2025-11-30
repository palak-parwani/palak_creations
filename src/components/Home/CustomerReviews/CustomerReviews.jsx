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
      img: "/assets/suit1.jpg",
      name: "Ayesha",
      rating: 5,
      text: "Amazing quality! Loved the fabric and finishing.",
    },
    {
      id: 2,
      img: "/assets/suit1.jpg",
      name: "Ritika",
      rating: 4,
      text: "Perfect fitting and very elegant!",
    },
    {
      id: 3,
      img: "/assets/suit1.jpg",
      name: "Simran",
      rating: 5,
      text: "Premium designs. Worth every penny!",
    },
    {
      id: 4,
      img: "/assets/suit1.jpg",
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
      img: "/assets/suit1.jpg",
      name: "Shalini",
      rating: 5,
      text: "Loved the stitching and comfort.",
    },
  ];

  const stopAutoplay = () => {
    sliderRef.current?.slickPause();
  };

  const settings = {
    arrows: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 2, infinite: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, infinite: true } },
    ],
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
            className={`${styles.customSliderArrows} ${
              slideIndex === 0 ? "" : styles.active
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
            <div key={index} className={styles.packageItemdiv}>
              <div className={styles.packageItem}>
                <div className={styles.reviewCard}>
                  {/* Profile Image */}
                  {/* <div className={styles.reviewImgWrapper}> */}
                    <Image
                      src={rev.img}
                      alt={rev.name}
                      
                      className={`${styles.reviewImg} rounded-2`}
                      width={100} height={100}
                    />
                  {/* </div> */}

                  {/* Stars */}
                  <div className={styles.stars}>
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className={styles.reviewText}>“{rev.text}”</p>

                  {/* Name */}
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
