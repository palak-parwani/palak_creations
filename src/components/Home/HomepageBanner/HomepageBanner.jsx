import React from "react";
import Slider from "react-slick";
import styles from "./HomepageBanner.module.css"; // make sure file exists

const HomepageBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };

  return (
    <div className={styles.bannerWrap}>
      <Slider {...settings}>
        <a href=" /">
          <div>
            <img src=" /assets/homebanner3.png" alt="banner 1" />
          </div>
        </a>

        <a href=" /">
          <div>
            <img src="/assets/homebanner.png" alt="banner 2" />
          </div>
        </a>
        <a href=" /">
          <div>
            <img src="/assets/homebanner4.png" alt="banner 3" />
          </div>
        </a>
      </Slider>
    </div>
  );
};

export default HomepageBanner;
