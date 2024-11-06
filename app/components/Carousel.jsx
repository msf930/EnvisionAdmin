"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Data from "@/app/data.json";

import styles from "../components/Carousel.module.css";

const Carousel = () => {
  const testData = Data.testimonials;
  return (
    <Swiper
      modules={[Navigation, Autoplay, Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      parallax
      speed={3000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      style={{
        "--swiper-navigation-color": "#134074",
        "--swiper-navigation-sides-offset": "80px"
      }}
      //onSlideChange={() => console.log("slide change")}
      //onSwiper={(swiper) => console.log(swiper)}
    >
      {testData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className={styles.slideCont}>
              <div className={styles.slideText} data-swiper-parallax="-500">
                {item.text}
              </div>
              <div className={styles.slideName}>{item.name}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
