import TopSlider from "./TopSlider";
import WelcomeHeading from "../components/WelcomeHeading/WelcomeHeading";
import NewsAndEvents from "../components/NewsAndEvents/NewsAndEvents";
import ChairmanMessage from "../components/ChairmanMessage/ChairmanMessage";
import Faculty from "../components/Faculty/Faculty";
import Projects from "../components/Projects/Projects";
import Admissions from "../components/Admissions/Admissions";
import Footer from "../components/Footer/Footer";

function CsAwkum() {
  return (
    <>
      {/* Slider checking */}
      {/* <CardsSlider /> */}

      {/* Top Slider */}
      <TopSlider />

      {/* Welcome Heading  */}
      <WelcomeHeading />

      {/* News & Events */}
      <NewsAndEvents />

      {/* Chairman Message */}
      <ChairmanMessage />

      {/* Faculty */}
      <Faculty />

      {/* Projects */}
      <Projects />

      {/* Admissions */}
      <Admissions />

      {/* Footer */}
      <Footer />
    </>
  );
}
export default CsAwkum;
