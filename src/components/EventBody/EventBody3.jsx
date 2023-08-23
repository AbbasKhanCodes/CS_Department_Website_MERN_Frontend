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
          DLSEI Program Launch and Focal Person Selection
        </h1>

        <div className={`${Styles.detail}`}>
          <h5>
            <span className={`${Styles.fontNormal}`}>Time: </span> 5 July 23 |
            12:00 PM
          </h5>

          <h5>
            <span className={`${Styles.fontNormal}`}>Venue: </span> Computer
            Science Department
          </h5>
        </div>

        <div>
          <p>
            Computer Science Department celebrated the launch of the Digital
            Learning & Skills Enrichment Initiative (DLSEI). In collaboration
            with Coursera, this initiative, led by the Higher Education
            Commission (HEC) of Pakistan, aims to provide students with valuable
            digital skills and learning opportunities. One of the program's
            remarkable features is that it allows students to enroll in Coursera
            courses completely free of cost. During the event, an HEC
            representative introduced the DLSEI program and announced the
            selection of focal persons who will guide and support students in
            their DLSEI journey. This event heralds an exciting prospect for
            students to embrace digital education and skill development
            effectively.
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
