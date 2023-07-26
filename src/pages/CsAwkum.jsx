import TopSlider from "../components/TopSlider/TopSlider";
import WelcomeHeading from "../components/WelcomeHeading/WelcomeHeading";
import Events from "../components/NewsAndEvents/NewsAndEvents";
import Faculty from "../components/Faculty/Faculty";
import Projects from "../components/Projects/Projects";
import Programs from "../components/Programs/Programs";
import ProgramsMsPhd from "../components/Programs/ProgramsMsPhd";
import Footer from "../components/Footer/Footer";

function CsAwkum() {
  return (
    <>
      {/* Top Slider */}
      <TopSlider />

      {/*  */}
      <WelcomeHeading />

      {/* News & Events */}
      <Events />

      {/* Chairman Message */}
      {/* <ChairmanMessage /> */}

      {/* Faculty */}
      <Faculty />

      {/* Projects */}
      <Projects />

      {/* Program and Majors */}
      <Programs />

      {/* Programs MS & Phd */}
      <ProgramsMsPhd />

      {/* Footer */}
      <Footer />
    </>
  );
}
export default CsAwkum;
