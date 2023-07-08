import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function TopSlider() {
  return (
    <>
      {/* Top Slider */}
      <MDBCarousel showControls showIndicators fade keyboard>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="../images/slider-1.jpg"
          alt="..."
        >
          {/* <h6 className="textOnTopSlider">Welcome to </h6>
          <h3 className="textOnTopSlider">Computer Science</h3> */}

          <h3 className="textOnTopSlider">Building the Future of Technology</h3>
          {/* <h3 className="textOnTopSlider">Unleash Your Tech Potential Here</h3> */}
          {/* <h3 className="textOnTopSlider">
            Innovating the Future with Computer Science
          </h3> */}
          {/* <h3 className="textOnTopSlider">
          Preparing Future Tech Leaders
          </h3> */}
        </MDBCarouselItem>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="../images/slider-2.jpg"
          alt="..."
        >
          {/* <h6 className="textOnTopSlider">Learn Programming from</h6>
          <h3 className="textOnTopSlider">Best Faculty</h3> */}

          <h3 className="textOnTopSlider">Transforming Ideas into Reality</h3>
        </MDBCarouselItem>
      </MDBCarousel>
    </>
  );
}
export default TopSlider;
