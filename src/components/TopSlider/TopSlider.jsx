import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

// import Styles
import Styles from "./TopSliderStyle.module.css";

function TopSlider() {
  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  return (
    <>
      {/* Top Slider */}
      <div className={`${Styles.topSlider} topSlider`}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // autoplay={{
          //   delay: 4800,
          //   disableOnInteraction: false,
          // }}
          effect={"fade"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="../images/topSlider/mobile/1.webp"
              srcset="../images/topSlider/mobile/1.webp 700w, ../images/topSlider/1.jpg 1920w"
              alt="AWKUM top rank picture"
            />
          </SwiperSlide>

          {!isMobile && (
            <SwiperSlide>
              <img
                src="../images/topSlider/2.jpg"
                alt="AWKUM top rank picture"
              />
            </SwiperSlide>
          )}
          <SwiperSlide>
            <img
              src="../images/topSlider/mobile/2.webp"
              srcset="../images/topSlider/mobile/3.webp 700w, ../images/topSlider/3.jpg 1920w"
              alt="AWKUM top rank picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../images/topSlider/mobile/4.webp"
              srcset="../images/topSlider/mobile/4.webp 700w, ../images/topSlider/4.jpg 1920w"
              alt="AWKUM top rank picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../images/topSlider/mobile/5.webp"
              srcset="../images/topSlider/mobile/5.webp 700w, ../images/topSlider/5.jpg 1920w"
              alt="AWKUM top rank picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../images/topSlider/mobile/6.webp"
              srcset="../images/topSlider/mobile/6.webp 700w, ../images/topSlider/6.jpg 1920w"
              alt="AWKUM top rank picture"
            />
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${Styles.container}`}>
              <div className={`${Styles.textDetail}`}>
                <h3>CREATIVE WORKSHOP</h3>
                <h1>BUILDING PROFESSIONAL WEBSITE</h1>
                <h5>AN EASY INTRODUCTION TO WORDPRESS DEVELOPMENT.</h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${Styles.container} ${Styles.container2}`}>
              <div className={`${Styles.textDetail}`}>
                <h1>CERTIFICATE DISTRIBUTION</h1>
                <h2>AT WORKSHOP</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default TopSlider;
