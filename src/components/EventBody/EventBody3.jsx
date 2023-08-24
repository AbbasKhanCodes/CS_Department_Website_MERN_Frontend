import React, { useEffect } from "react";
import Styles from "./EventBodyStyle.module.css";

export default function EventBody3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`${Styles.container}`}>
        <h1 className={`${Styles.titleHeading}`}>
          Nurturing Innovation: AWKUM's Inspiring Student Shines at PMNIA
          Ceremony
        </h1>

        <div className={`${Styles.detail}`}>
          <h5>
            <span className={`${Styles.fontNormal}`}>Time: </span> 5 July 23 |
            12:00 PM
          </h5>

          <h5>
            <span className={`${Styles.fontNormal}`}>Venue: </span>
            Prime Minister's House
          </h5>
        </div>

        <div>
          <p>
            Abdul Wali Khan University Mardan (AWKUM) shines through students
            like Saad, a BCS (AI) scholar, whose journey led to the prestigious
            Prime Minister's National Innovation Award ceremony at the Prime
            Minister's House. Competing among 256 peers at NUST, Saad's
            innovative ideas emerged triumphant after rigorous selection.
            Benefiting from comprehensive training at IMSciences Peshawar, he
            confidently presented his startup idea, epitomizing AWKUM's
            nurturing environment. The university's collaborations with
            institutions like NUST and IMSciences, along with its alignment with
            government initiatives, amplify its commitment to fostering a
            culture of innovation. Saad's accomplishment underscores how AWKUM
            empowers students to transform visionary ideas into tangible
            achievements, a true testament to their support for students'
            aspirations.
          </p>
        </div>

        <div className={`${Styles.pictures}`}>
          <img
            className={`${Styles.image}`}
            src="../../images/events/3/1.png"
            alt="Event Picture"
          />

          <img
            className={`${Styles.image}`}
            src="../../images/events/3/2.png"
            alt="Event Picture"
          />
        </div>
      </div>
    </>
  );
}
