import { useState } from "react";
import axios, { toFormData } from "axios";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Styles from "./AdminStyle.module.css";

function Admin() {
  const [clickedNews, setClickedNews] = useState(false);
  const [clickedEvent, setClickedEvent] = useState(false);
  const [news, setNews] = useState("");
  const [event, setEvent] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  let navigate = useNavigate();

  // Add news function
  const addNews = async () => {
    if (!news) {
      // If user didn't write news then show warning
      toast.error("News box is empty !!!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // If User writes News then upload it
      try {
        const resp = await axios.post(
          "https://cs-department-website-mern-backend.vercel.app/addnews",
          {
            news,
            date: new Date(),
          }
        );

        // Clearing value of news variable
        toast.success("News is successfully added.", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setNews("");
        setClickedEvent(false);
        setClickedNews(false);
      } catch (error) {
        console.log("Error in Uploading News " + error);
      }
    }
  };

  // Add event function
  const addEvent = async () => {
    if (!event) {
      // If user didn't write event then show warning
      toast.error("Event box is empty !!!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!selectedDate) {
      // If user didn't write date then show warning
      toast.error("Event Date is not selected !!!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // If User writes Events then upload it
      try {
        const resp = await axios.post(
          "https://cs-department-website-mern-backend.vercel.app/addevent",
          {
            event,
            date: selectedDate,
          }
        );

        // Clearing value of event * date variable
        toast.success("Event is successfully added.", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setEvent("");
        setSelectedDate("");
        setClickedEvent(false);
        setClickedNews(false);
      } catch (error) {
        console.log("Error in Uploading an Event " + error);
      }
    }
  };

  return (
    <>
      <ToastContainer />

      {/* navBar */}
      <div className={Styles.navBarAdmin}>
        {/* AWKUM Logo */}
        <div className="awkumLogo">
          <h5>AWKUM</h5>
        </div>

        {/* Logout Button */}
        <div>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/csadminlogin");
            }}
            className=" ripple ripple-surface ripple-surface-light btn btn-danger btn-lg  logoutBtn"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Add News & Add Event Button */}
      {!clickedNews && !clickedEvent ? (
        <div className="">
          <button
            className="m-4 ripple ripple-surface ripple-surface-light btn btn-primary btn-lg mt-4"
            onClick={() => {
              setClickedNews(true);
            }}
          >
            Add News
          </button>

          <button
            className="m-4 ripple ripple-surface ripple-surface-light btn btn-primary btn-lg mt-4"
            onClick={() => {
              setClickedEvent(true);
            }}
          >
            Add Event
          </button>
        </div>
      ) : (
        ""
      )}

      {/* Add News */}
      {clickedNews && !clickedEvent ? (
        <div className={Styles.addNewsContainer}>
          <div className={Styles.insideAddNewsContainer}>
            {/* Add News Container */}

            <div>
              <label
                className={Styles.newsInputTextLabel}
                htmlFor="newsInputText"
              >
                News:{" "}
              </label>
            </div>
            <textarea
              placeholder="Write News here...,"
              className={Styles.NewsTextArea}
              name=""
              onChange={(e) => {
                setNews(e.target.value);
              }}
              value={news}
              id="newsInputText"
              cols="30"
              rows="8"
              required
            ></textarea>

            <br />

            {/* Add News Button */}
            <button
              className="m-4 ripple ripple-surface ripple-surface-light btn btn-primary btn-lg mt-4"
              onClick={() => {
                addNews();
              }}
            >
              Add News
            </button>

            {/* Back Button */}
            <button
              className="m-4 ripple ripple-surface ripple-surface-light btn btn-primary btn-lg mt-4"
              onClick={() => {
                setClickedEvent(false);
                setClickedNews(false);
              }}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Add Event */}
      {!clickedNews && clickedEvent ? (
        <div className={Styles.addEventContainer}>
          {/* Add Event Container */}
          <div className={Styles.insideAddEventContainerWrapper}>
            <div className={Styles.insideAddEventContainer}>
              <div className={Styles.calenderContainer}>
                {/* Label for Calender */}
                <label htmlFor="eventInputDate">Select Event Date: </label>
                {/* Select A Date by Calendar */}
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                  }}
                  showTimeSelect
                  className={Styles.datePickerEvent}
                  timeFormat="p"
                  id="eventInputDate"
                  minDate={new Date()}
                  placeholderText="Select Date"
                  timeIntervals={15}
                  dateFormat="d-M-y , p"
                  required
                />
              </div>
              <div>
                <label htmlFor="eventInputText">Event: </label>
              </div>
              <textarea
                placeholder="Write Event here...,"
                className={Styles.NewsTextArea}
                name=""
                value={event}
                onChange={(e) => {
                  setEvent(e.target.value);
                }}
                id="newsInputText"
                cols="40"
                rows="8"
                required
              ></textarea>

              <div className={Styles.EventAndBackBtns}>
                {/* Add Event Button */}
                <button
                  className=" ripple ripple-surface ripple-surface-light btn btn-primary btn-lg mt-4"
                  onClick={() => {
                    addEvent();
                  }}
                >
                  Add Event
                </button>

                {/* Back Button */}
                <button
                  className=" ripple ripple-surface ripple-surface-light btn btn-primary btn-lg mt-4"
                  onClick={() => {
                    setClickedEvent(false);
                    setClickedNews(false);
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default Admin;
