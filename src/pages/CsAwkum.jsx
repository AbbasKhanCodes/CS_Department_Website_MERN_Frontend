import TopSlider from "./TopSlider";
import WelcomeHeading from "../components/WelcomeHeading/WelcomeHeading";
import NewsAndEvents from "../components/NewsAndEvents/NewsAndEvents";
import ChairmanMessage from "../components/ChairmanMessage/ChairmanMessage";
import Faculty from "../components/Faculty/Faculty";
import Projects from "../components/Projects/Projects";

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
    </>
  );
}
export default CsAwkum;
