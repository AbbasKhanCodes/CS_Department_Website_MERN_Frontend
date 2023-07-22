import Styles from "./CardStyle.module.css";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Projects data
const projectsData = [
  {
    url: "onlineQuranPortal.png",
    projectName: "Online Quran Portal",
    superviserName: "Dr. Izaz-ur-Rehman",
    detail: "",
  },

  {
    url: "eMechanic.jpg",
    projectName: "E-mechanics using Php & laravel",
    superviserName: "Dr. Nazia",
    detail: "It is used to find different type of mechanics online.",
  },
  {
    url: "schoolManagementSystem.png",
    projectName: "School Management System using MERN stack",
    superviserName: "Dr. Salman Khan",
    detail: "asdlkfj",
  },
  {
    url: "smartMirror.jpg",
    projectName: "A.I Enabled Face Recognition in Smart Mirror based on IoT",
    superviserName: "Dr. Nadeem Iqbal",
    detail: "",
  },
  {
    url: "doctor.png",
    projectName: "Hospital Management System using MERN stack",
    superviserName: "Dr. Salman Khan",
    detail: "",
  },
  {
    url: "autoMechanicFinder.png",
    projectName: "Online auto mechanic finder",
    superviserName: "Dr. Izaz-ur-Rehman",
    detail: "",
  },
];

const Card = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        // autoplay={{
        //   delay: 3800,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {projectsData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={`${Styles.Card}`}>
                <div>
                  <img
                    src={"../images/projects/" + item.url}
                    alt={"Picture of " + item.name}
                  />
                </div>

                <div className={`${Styles.Detail}`}>
                  <h4>{item.projectName}</h4>
                  <p>
                    Supervised by:{" "}
                    <span className={`${Styles.superviserName}`}>
                      {item.superviserName}
                    </span>
                  </p>
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
