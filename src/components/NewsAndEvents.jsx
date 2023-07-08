import { useState, useEffect } from "react";
import axios from "axios";

import Styles from "./NewsAndEventsStyle.module.css";

function NewsAndEvents() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  // Getting Data from backend
  const getAllData = async () => {
    const resp = await axios.get(
      "https://cs-department-website-mern-backend.vercel.app/getalldata"
    );

    if (resp) {
      const dataTemp = resp.data;

      const newsTemp = dataTemp.news;
      setNews(newsTemp);

      const eventsTemp = dataTemp.events;
      setEvents(eventsTemp);
    }
  };

  let obj = { some: 6 };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
      <div
        className={`${Styles.container_fluid} ${Styles.content_width} ${Styles.space_below} ${Styles.NewsAndEventsContainer}`}
      >
        <div className={`${Styles.row}`}>
          <div
            className={`${Styles.col_xs_12} ${Styles.col_md_6} ${Styles.no_padding_xs} ${Styles.no_padding_sm}`}
          >
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
                <h2
                  className={`${Styles.panel_title} ${Styles.text_uppercase}`}
                >
                  Events
                </h2>
              </div>
              <div className={`${Styles.panel_body}`} id="events_list_4">
                <ul
                  className={`${Styles.media_list} ${Styles.media_list_links}`}
                >
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
          </div>

          <div
            className={`${Styles.col_xs_12} ${Styles.col_md_6} ${Styles.no_padding_xs} ${Styles.no_padding_sm}`}
          >
            {/* <!-- NEWS --> */}
            <div
              className={`${Styles.panel} ${Styles.panel_dark_brown_heading} ${Styles.no_margin}`}
            >
              <div className={`${Styles.panel_heading} ${Styles.clearfix}`}>
                <a
                  className={`${Styles.btn} ${Styles.btn_white_outline_on_dark_brown} ${Styles.pull_right} ${Styles.text_uppercase}`}
                  href="#"
                >
                  All News
                </a>
                <h2
                  className={`${Styles.panel_title} ${Styles.text_uppercase}`}
                >
                  News
                </h2>
              </div>
              <div className={`${Styles.panel_body}`} id="news_list_4">
                <ul
                  className={`${Styles.media_list} ${Styles.media_list_links}`}
                >
                  {news.map((item, index) => {
                    return (
                      <>
                        <li key={index}>
                          <div
                            className={`${Styles.media} ${Styles.media_body}`}
                          >
                            <a href="#">{item.news}</a>
                          </div>
                        </li>
                        <br />
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsAndEvents;
