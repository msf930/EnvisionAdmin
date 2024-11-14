"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Parallax } from "swiper/modules";
import { client } from "../../sanity/lib/client";

import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";



import styles from "./Carousel.module.css";

export default function Carousel() {
  const [testData, setTestData] = useState([]);
  const [loading, setLoading] = useState(false);

  const TEST_DATA_QUERY = `*[_type == "testimonial"]{testimonial, author}`;

  useEffect(() => {
    const fetchTest = async () => {
      setLoading(true);
      const fetchedTest = await client.fetch(TEST_DATA_QUERY);
      setTestData(fetchedTest);
      setLoading(false);
    };

    fetchTest();
  }, [TEST_DATA_QUERY]);
  return (
    <Swiper
      modules={[Navigation, Autoplay, Parallax]}
      spaceBetween={50}
      slidesPerView={1}
      
      loop={true}
      parallax
      speed={3000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      style={{
        "--swiper-navigation-color": "#134074",
        "--swiper-navigation-sides-offset": "16px",
      }}
      //onSlideChange={() => console.log("slide change")}
      //onSwiper={(swiper) => console.log(swiper)}
    >
      {
        testData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={styles.slideCont}>
                <div className={styles.slideText} data-swiper-parallax="-500">
                  {item.testimonial}
                </div>
                <div className={styles.slideName}>{item.author}</div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};


