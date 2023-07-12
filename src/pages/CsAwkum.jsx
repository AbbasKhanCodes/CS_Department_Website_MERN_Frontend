import TopSlider from "./TopSlider";
import WelcomeHeading from "../components/WelcomeHeading/WelcomeHeading";
import NewsAndEvents from "../components/NewsAndEvents/NewsAndEvents";
import ChairmanMessage from "../components/ChairmanMessage/ChairmanMessage";
import FacultySlider from "../components/FacultySlider/FacultySlider";
import CardsSlider from "../components/CardSlider/CardsSlider";

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
      {/* <FacultySlider /> */}
    </>
  );
}
export default CsAwkum;
