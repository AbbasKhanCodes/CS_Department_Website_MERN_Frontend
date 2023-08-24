import { useState } from "react";
import { createPortal } from "react-dom";

import TopSlider from "../components/TopSlider/TopSlider";
import Events from "../components/NewsAndEvents/NewsAndEvents";
import Faculty from "../components/Faculty/Faculty";
import Projects from "../components/Projects/Projects";
import Programs from "../components/Programs/Programs";
import ProgramsMsPhd from "../components/Programs/ProgramsMsPhd";
import StudentResource from "../components/StudentResources/StudentResource";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import Header from "../components/Header/Header";

import ResearchCards from "../components/ResearchCards/ResearchCard";
import Quotation from "../components/Quotation/Quotation";
import StudentStories from "../components/StudentStories/StudentStories";
import Graduation from "../components/Graduation/Graduation";
import SlidingFaculty from "../components/SlidingFaculty/SlidingFaculty";

function CsAwkum() {
  const [popupOpen, setPopupOpen] = useState(true);
  const handleCloseBtn = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {/* Popup-admission */}
      {!popupOpen &&
        createPortal(<Popup onClose={handleCloseBtn} />, document.body)}

      {/* Header */}
      <Header />

      {/* Top Slider */}
      <TopSlider />

      {/* Welcome Heading */}
      {/* <WelcomeHeading /> */}

      <ResearchCards />
      {/* <Quotation /> */}

      {/* News & Events */}
      <Events />

      {/* Chairman Message */}
      {/* <ChairmanMessage /> */}
      <StudentStories />
      <StudentResource />

      {/* Faculty */}
      <Faculty />

      <Graduation />

      {/* Projects */}
      {/* <Projects /> */}

      {/* Program and Majors */}
      {/* <Programs /> */}

      {/* Programs MS & Phd */}
      {/* <ProgramsMsPhd /> */}

      {/* Footer */}
      <img src="/Line 1.png" width={"100%"} />
      <Footer />
    </>
  );
}
export default CsAwkum;
