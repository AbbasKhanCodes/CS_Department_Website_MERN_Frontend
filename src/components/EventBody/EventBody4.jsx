import React, { useEffect } from "react";
import Styles from "./EventBodyStyle.module.css";

export default function EventBody4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={`${Styles.container}`}>
        <h1 className={`${Styles.titleHeading}`}>
          Session on Artificial Intelligence & Job market ethics
        </h1>

        <div className={`${Styles.detail}`}>
          <h5>
            <span className={`${Styles.fontNormal}`}>Time: </span> 2 March 23 |
            12:00 PM
          </h5>

          <h5>
            <span className={`${Styles.fontNormal}`}>Venue: </span> Computer
            Science Department
          </h5>
        </div>

        <div>
          <p>
            The Computer Science Department at Abdul Wali Khan University Mardan
            (AWKUM) conducted a significant session on "Artificial Intelligence
            & Job Market Ethics." This event aimed to bridge the gap between
            cutting-edge technology and ethical considerations in the job
            market. Attendees were treated to insights into the ever-evolving
            landscape of artificial intelligence and its profound impact on
            various industries. The session emphasized the importance of
            upholding ethical standards while implementing AI solutions.
            Distinguished speakers from both academia and the industry shared
            their perspectives on how AI is reshaping the job market and the
            ethical dilemmas that arise. Through such insightful initiatives,
            AWKUM continues to foster a holistic understanding of technological
            advancements while ensuring students are well-versed in the ethical
            dimensions of their future careers.
          </p>
        </div>

        <div className={`${Styles.pictures}`}>
          <img
            className={`${Styles.image}`}
            src="../../images/events/4/2.png"
            alt="Event Picture"
          />
          <img
            className={`${Styles.image}`}
            src="../../images/events/4/3.png"
            alt="Event Picture"
          />
          <img
            className={`${Styles.image}`}
            src="../../images/events/4/4.png"
            alt="Event Picture"
          />
        </div>
      </div>
    </>
  );
}
