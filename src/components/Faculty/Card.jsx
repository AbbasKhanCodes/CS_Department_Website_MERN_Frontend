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

// Faculty Profile data
const facultyProfiles = [
  {
    url: "SHERAFZALKHAN.jpg",
    name: { title: "Dr.", fullName: "SHER AFZAL KHAN" },
    designation: "Professor",
    education: "Ph.D.",
    email: "sher.afzal@awkum.edu.pk",
  },

  {
    url: "MAQSOODHAYAT.jpg",
    name: { title: "Dr.", fullName: "MAQSOOD HAYAT" },
    designation: "  Professor",
    education: "Ph.D.",
    email: "m.hayat@awkum.edu.pk",
  },
  {
    url: "nadeemIqbal.jpg",
    name: { title: "Dr.", fullName: "NADEEM IQBAL" },
    designation: "Associate Professor",
    education: "Ph.D.",
    email: "nikhan@awkum.edu.pk",
  },
  {
    url: "RAHIMKHAN.jpg",
    name: { title: "Dr.", fullName: "RAHIM KHAN" },
    designation: "Assistant Professor",
    education: "Ph.D.",
    email: "rahimkhan@awkum.edu.pk",
  },

  {
    url: "IZAZURREHMAN.jpg",
    name: { title: "Dr.", fullName: "IZAZ UR REHMAN" },
    designation: "Assistant Professor",
    education: "Ph.D.",
    email: "izaz@awkum.edu.pk",
  },
  {
    url: "FAZLULLAHKHAN.jpg",
    name: { title: "Dr.", fullName: "FAZLULLAH KHAN" },
    designation: "Associate Professor",
    education: "Ph.D.",
    email: "fazlullah@awkum.edu.pk",
  },

  {
    url: "HASHIMALI.jpg",
    name: { title: "Dr.", fullName: "HASHIM ALI" },
    designation: "Assistant Professor",
    education: "Ph.D.",
    email: "hashimali@awkum.edu.pk",
  },
  {
    url: "MIANAHMADJAN.jpg",
    name: { title: "Dr.", fullName: "MIAN AHMAD JAN" },
    designation: "Assistant Professor",
    education: "Ph.D.",
    email: "mianjan@awkum.edu.pk",
  },

  {
    url: "MUHAMMADTAHIR.jpg",
    name: { title: "Dr.", fullName: "MUHAMMAD TAHIR" },
    designation: "Assistant Professor",
    education: "Ph.D.",
    email: "muhammadtahir@awkum.edu.pk",
  },
  {
    url: "AFTABAHMED.jpg",
    name: { title: "Dr.", fullName: "AFTAB AHMED" },
    designation: "Lecturer",
    education: "Ph.D.",
    email: "aftab.ahmed.khan@awkum.edu.pk",
  },
  {
    url: "salman.jpg",
    name: { title: "Dr.", fullName: "SALMAN" },
    designation: "Lecturer",
    education: "Ph.D.",
    email: "salman@awkum.edu.pk",
  },
  {
    url: "SHAHZADKHAN.jpg",
    name: { title: "Mr.", fullName: "SHAHZAD KHAN" },
    designation: "Lecturer",
    education: "",
    email: "shahzad@awkum.edu.pk",
  },

  {
    url: "ROOHULLAHJANSYED.jpg",
    name: { title: "Dr.", fullName: "ROOHULLAH JAN SYED" },
    designation: "Lecturer",
    education: "Ph.D.",
    email: "roohullahsyed@awkum.edu.pk",
  },
  {
    url: "AAMIRAKBAR.jpg",
    name: { title: "Dr.", fullName: "AAMIR AKBAR" },
    designation: "Lecturer",
    education: "Ph.D.",
    email: "amirakbar@awkum.edu.pk",
  },
];

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
                      {item.name.title}{" "}
                      {capitalizeFirstLetter(item.name.fullName)}
                    </p>
                    <p>{item.designation}</p>
                    <p>{item.education}</p>
                    <p>
                      {" "}
                      <button
                        className="btn-primary btn-sm"
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
