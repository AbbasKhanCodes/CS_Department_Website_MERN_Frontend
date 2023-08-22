import React, { useEffect } from "react";
import Styles from "./EventBodyStyle.module.css";

export default function EventBody1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`${Styles.container}`}>
        <h1 className={`${Styles.titleHeading}`}>
          Building Professional Websites: An Easy Introduction to WordPress
          Development
        </h1>

        <div className={`${Styles.detail}`}>
          <h5>
            <span className={`${Styles.fontNormal}`}>Time: </span> 08 June 23 |
            12:00 PM
          </h5>

          <h5>
            <span className={`${Styles.fontNormal}`}>Venue: </span> Computer
            Science Department
          </h5>

          <h5>
            <span className={`${Styles.fontNormal}`}>Speaker: </span> Mr. Sufyan
            Sher
          </h5>
        </div>

        <div>
          <p>
            Workshop on "Building Professional Websites: An Easy Introduction to
            WordPress Development" organized by the Technology and Innovation
            Society, AWKUM's Student Council, in collaboration with the District
            Youth Office, Mardan, and the Office of the Provost, AWKUM!. Led by
            Mr. Sufyan Sher, Asst. Director of Admissions & FAD at Abdul Wali
            Khan University, this 2-hour workshop covers website setup, theme
            customization, and plugin usage.
          </p>
        </div>

        <div className={`${Styles.pictures}`}>
          <img
            className={`${Styles.image}`}
            src="../../images/events/1/1.webp"
            alt="Event Picture"
          />

          <img
            className={`${Styles.image}`}
            src="../../images/events/1/2.webp"
            alt="Event Picture"
          />

          <img
            className={`${Styles.image}`}
            src="../../images/events/1/3.webp"
            alt="Event Picture"
          />

          <img
            className={`${Styles.image}`}
            src="../../images/events/1/4.webp"
            alt="Event Picture"
          />

          <img
            className={`${Styles.image}`}
            src="../../images/events/1/5.webp"
            alt="Event Picture"
          />
        </div>
      </div>
    </>
  );
}
