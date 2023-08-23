import Styles from "./CardStyle.module.css";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import capitilize words
import { capitalizeFirstLetter } from "../../utilities/utilities";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Card = () => {
  const handleEmailClick = (mail) => {
    window.open("mailto:" + mail, "_blank");
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`${Styles.mySwiper} ${Styles.faculty} mySwiper`}
      >
        {facultyProfiles.map((item, index) => {
          return (
            <SwiperSlide>
              <div
                href="https://portal.awkum.edu.pk/faculty"
                className={`${Styles.wrapper} ${Styles.facultyCard}`}
                key={index}
              >
                <div className={`${Styles.col}`}>
                  <div className={`${Styles.imgWrapper}`}>
                    <img
                      className={`${Styles.SalmanImagePosition}`}
                      src={"../images/faculty/" + item.url}
                      alt={"Picture of " + item.name}
                    />
                  </div>
                  <div className={`${Styles.profileDetail}`}>
                    <p className={`${Styles.name}`}>
                      {capitalizeFirstLetter(item.name.fullName)}
                    </p>
                    <p>{item.designation}</p>
                    <p>{item.education}</p>
                    <p>
                      {" "}
                      <button
                        className={`${Styles.emailBtn} button18 mt-2`}
                        role="button"
                        onClick={() => {
                          handleEmailClick(item.email);
                        }}
                      >
                        Send Email
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Card;
