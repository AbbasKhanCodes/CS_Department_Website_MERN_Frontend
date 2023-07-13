import Styles from "./CardStyle.module.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

const facultyProfiles = [
  {
    url: "salman.jpg",
    name: "Dr. SALMAN",
    designation: "Lecturer",
    education: "Ph.D.",
    email: "salman@awkum.edu.pk",
  },
  {
    url: "salman1.jpg",
    name: "Dr. SALMAN",
    designation: "Lecturer",
    education: "Ph.D.",
    email: "salman@awkum.edu.pk",
  },
  {
    url: "MAQSOODHAYAT.jpg",
    name: "Dr. MAQSOOD HAYAT",
    designation: "Associate Professor",
    education: "Ph.D.",
    email: "m.hayat@awkum.edu.pk",
  },
  {
    url: "IZAZURREHMAN.jpg",
    name: "Dr. IZAZ UR REHMAN",
    designation: "Assistant Professor",
    education: "Ph.D.",
    email: "izaz@awkum.edu.pk",
  },
  {
    url: "MIANAHMADJAN.jpg",
    name: "Dr. MIAN AHMAD JAN",
    designation: "Assistant Professor",
    education: "Ph.D.",
    email: "mianjan@awkum.edu.pk",
  },
  {
    url: "SHAHZADKHAN.jpg",
    name: "Mr. SHAHZAD KHAN",
    designation: "Lecturer",
    education: "???",
    email: "shahzad@awkum.edu.pk",
  },
  {
    url: "SHERAFZALKHAN.jpg",
    name: "Prof. Dr. SHER AFZAL KHAN",
    designation: "Professor",
    education: "Ph.D.",
    email: "sher.afzal@awkum.edu.pk",
  },
  {
    url: "nadeemIqbal.jpg",
    name: "Dr. NADEEM IQBAL",
    designation: "Associate Professor",
    education: "Ph.D.",
    email: "nikhan@awkum.edu.pk",
  },

  {
    url: "HASHIMALI.jpg",
    name: "Mr. HASHIM ALI",
    designation: "Associate Professor",
    education: "Ph.D.",
    email: "hashimali@awkum.edu.pk",
  },

  {
    url: "MUHAMMADTAHIR.jpg",
    name: "Dr. MUHAMMAD TAHIR",
    designation: "Assistant Professor",
    education: "Ph.D.",
    email: "muhammadtahir@awkum.edu.pk",
  },
  {
    url: "AFTABAHMED.jpg",
    name: "Dr. AFTAB AHMED",
    designation: "Lecturer",
    education: "Ph.D.",
    email: "aftab.ahmed.khan@awkum.edu.pk",
  },
  {
    url: "",
    name: "Dr. FAZLULLAH KHAN",
    designation: "Associate Professor",
    education: "Ph.D.",
    email: "fazlullah@awkum.edu.pk",
  },
  {
    url: "",
    name: "Dr. RAHIM KHAN",
    designation: "Associate Professor",
    education: "Ph.D.",
    email: "rahimkhan@awkum.edu.pk",
  },
  {
    url: "",
    name: "Dr. ROOHULLAH JAN SYED",
    designation: "Lecturer",
    education: "Ph.D.",
    email: "roohullahsyed@awkum.edu.pk",
  },
  {
    url: "",
    name: "Dr. AAMIR AKBAR",
    designation: "Lecturer",
    education: "Ph.D.",
    email: "amirakbar@awkum.edu.pk",
  },
  {
    url: "",
    name: "Dr. SHAHID AKBAR",
    designation: "Lecturer",
    education: "Ph.D.",
    email: "shahid.akbar@awkum.edu.pk",
  },
];

const Faculty = () => {
  return (
    <>
      <div className={`${Styles.facultyContainer}`}>
        <h2 className={`${Styles.facultyHeading}`}>Faculty</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          keyboard={{ enabled: true }}
          navigation={true}
          modules={[Pagination, Navigation, Keyboard]}
          className="mySwiper"
        >
          {facultyProfiles.map((item, index) => {
            return (
              <SwiperSlide>
                <div className={`${Styles.facultyCard}`} key={index}>
                  <div>
                    <img
                      className={`${Styles.SalmanImagePosition}`}
                      src={"../images/faculty/" + item.url}
                      alt={"Picture of " + item.name}
                    />
                  </div>

                  <div className={`${Styles.profileDetail}`}>
                    <h4>{item.name}</h4>
                    <p>{item.designation}</p>
                    <p>{item.education}</p>
                    <p>{item.email}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Faculty;
