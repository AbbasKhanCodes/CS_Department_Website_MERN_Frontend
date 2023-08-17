import { useState } from "react";
import { createPortal } from "react-dom";
import Header from "../components/Header/Header";
import TopSlider from "../components/TopSlider/TopSlider";
import WelcomeHeading from "../components/WelcomeHeading/WelcomeHeading";
import Events from "../components/NewsAndEvents/NewsAndEvents";
import Faculty from "../components/Faculty/Faculty";
import Projects from "../components/Projects/Projects";
import Programs from "../components/Programs/Programs";
import ProgramsMsPhd from "../components/Programs/ProgramsMsPhd";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";
import ResearchCards from "../components/ResearchCards/ResearchCard";
import Quotation from "../components/Quotation/Quotation";

function CsAwkum() {
  const [popupOpen, setPopupOpen] = useState(true);
  const handleCloseBtn = () => {
    setPopupOpen(false);
  };

  return (
    <>
      {/* Popup-admission */}
      {popupOpen &&
        createPortal(<Popup onClose={handleCloseBtn} />, document.body)}
      {/* Header */}
      <Header />
      {/* <ResearchCards /> */}
      <Quotation />
      {/* Top Slider */}
      {/* <TopSlider /> */}

      {/* Welcome Heading */}
      {/* <WelcomeHeading /> */}

      {/* News & Events */}
      {/* <Events /> */}

      {/* Chairman Message */}
      {/* <ChairmanMessage /> */}

      {/* Faculty */}
      {/* <Faculty /> */}

      {/* Projects */}
      {/* <Projects /> */}

      {/* Program and Majors */}
      {/* <Programs /> */}

      {/* Programs MS & Phd */}
      {/* <ProgramsMsPhd /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
export default CsAwkum;
