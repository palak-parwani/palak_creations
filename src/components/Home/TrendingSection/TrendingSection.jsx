import Slider from "react-slick";
import styles from "./TrendingSection.module.css";
import { FiHeart } from "react-icons/fi";
import { BsBag } from "react-icons/bs";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Image from "next/image";

export default function TrendingSection() {
  const products = [
    {
      id: 1,
      name: "Orange Tissue Embroidered Suit Set With Sequins",
      strikeprice:"₹9,998",
      price: "₹9,998",
      sizes: ["S", "M"],
      img: "/assets/suitsets5.jpg",
    },
    {
      id: 2,
      name: "Wine Chinon Embroidered Suit Set With Zari",
      strikeprice:"₹9,998",
      price: "₹7,998",
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      img: "/assets/suitsets2.jpg",
    },
    {
      id: 3,
      name: "Black Dola Silk Woven Design Suit Set With Mirror Work",
      strikeprice:"₹9,998",
      price: "₹8,998",
      sizes: ["S/M", "L/XL"],
      img: "/assets/suitsets5.jpg",
    },
    {
      id: 4,
      name: "Fuchsia Organza Zari Suit Set With Zardosi",
      strikeprice:"₹9,998",
      price: "₹9,998",
      sizes: ["XS", "S", "L", "XL"],
      img: "/assets/suitsets1.jpg",
    },
    {
      id: 5,
      name: "Fuchsia Organza Zari Suit Set With Zardosi",
      strikeprice:"₹9,998",
      price: "₹9,998",
      sizes: ["XS", "S", "L", "XL"],
      img: "/assets/suitsets6.jpg",
    },
    {
      id: 6,
      name: "Fuchsia Organza Zari Suit Set With Zardosi",
      strikeprice:"₹9,998",
      price: "₹9,998",
      sizes: ["XS", "S", "L", "XL"],
      img: "/assets/suitsets7.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

 const PrevArrow = ({ onClick, currentSlide }) => (
  <div
    className={`${styles.arrow} ${styles.leftArrow} ${
      currentSlide === 0 ? styles.disabled : ""
    }`}
    onClick={currentSlide === 0 ? null : onClick}
  >
    <GrFormPrevious  size={18}/>
  </div>
);

const NextArrow = ({ onClick, currentSlide, slideCount }) => (
  <div
    className={`${styles.arrow} ${styles.rightArrow} ${
      currentSlide === slideCount - 4 ? styles.disabled : ""
    }`}
    onClick={currentSlide === slideCount - 4 ? null : onClick}
  >
    <MdNavigateNext size={18} />
  </div>
);


  const sliderSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 600,
  arrows: true,
  beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  prevArrow: <PrevArrow currentSlide={currentSlide} />,
  nextArrow: <NextArrow currentSlide={currentSlide} slideCount={products.length} />,
};

  return (
    <section className="standard-padding">
      <div className="container">
        <div className={styles.wrapper}>
          {/* LEFT SIDE CONTENT */}
          <div className={styles.left}>
            <h2 className={styles.heading}>Trending Styles You’ll Love</h2>
            <p className={styles.subheading}>
              Your most-loved outfits, refreshed for the season.
            </p>

            <div className={styles.models}>
              <button className={styles.btn}>
                <span className={styles.description}>SHOP NOW</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className={styles.right}>
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <div key={product.id} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <Image src={product.img} className={styles.productImg} width={100} height={100} unoptimized />

                    <button className={styles.wishlistBtn}>
                      <FaRegHeart size={18} />
                    </button>

                    <span className={styles.badge}>Save 40%</span>

                    <div className={styles.cartCircle}>
                      <RiShoppingBagLine size={18} />
                    </div>
                  </div>

                  <p className={styles.productName}>{product.name}</p>
                  
                  <div className="d-flex justify-content-start align-items-center gap-2">
                    <p className={styles.strikeprice}>{product.strikeprice}</p>
                    <p className={styles.price}>{product.price}</p>
                  </div>

                  <p className={styles.sizeList}>
  {product.sizes.map((s, idx) => (
    <span key={idx} className={styles.sizeItem}>
      {s}
    </span>
  ))}
</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
