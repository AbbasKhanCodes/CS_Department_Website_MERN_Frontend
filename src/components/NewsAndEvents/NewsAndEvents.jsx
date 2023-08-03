import { useState, useEffect } from "react";
import axios from "axios";

import ChairmanMessage from "../ChairmanMessage/ChairmanMessage";

import Styles from "./Style.module.css";

import { motion } from "framer-motion";

// Animation
const animate = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

function Events() {
  const [events, setEvents] = useState([]);

  // Getting Data from backend
  const getAllData = async () => {
    const resp = await axios.get(
      "https://cs-department-website-mern-backend.vercel.app/getalldata"
    );

    if (resp) {
      const dataTemp = resp.data;

      const eventsTemp = dataTemp.events;
      setEvents(eventsTemp);
    }
  };

  // Getting data from backend once the page loads
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div
        className={`${Styles.container_fluid} ${Styles.content_width} ${Styles.space_below} ${Styles.NewsAndEventsContainer}`}
      >
        <motion.div
          className={`${Styles.row}`}
          initial={"offscreen"}
          whileInView={"onscreen"}
          variants={animate}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Chairman Message */}
          <ChairmanMessage />

          {/* <!-- EVENTS --> */}
          <div
            className={`${Styles.panel} ${Styles.panel_dark_brown_heading} ${Styles.no_margin}`}
          >
            <div className={`${Styles.panel_heading} ${Styles.clearfix}`}>
              <a
                className={`${Styles.btn} ${Styles.btn_white_outline_on_dark_brown} ${Styles.pull_right} ${Styles.text_uppercase}`}
                href="#"
              >
                All Events
              </a>
              <h2 className={`${Styles.panel_title} ${Styles.text_uppercase}`}>
                Events
              </h2>
            </div>
            <div className={`${Styles.panel_body}`} id="events_list_4">
              <ul className={`${Styles.media_list} ${Styles.media_list_links}`}>
                {events.map((item, index) => {
                  return (
                    <li className={`${Styles.media}`} key={index}>
                      <div className={`${Styles.media_left}`}>
                        <a href="#" className={`${Styles.date_icon}`}>
                          <span className={`${Styles.day}`}>
                            {new Date(item.date).getDate()}
                          </span>
                          <span className={`${Styles.month}`}>
                            {new Date(item.date).getMonth() + 1}
                          </span>
                        </a>
                      </div>
                      <div className={`${Styles.media_body}`}>
                        <a href="#">{item.event}</a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
export default Events;
