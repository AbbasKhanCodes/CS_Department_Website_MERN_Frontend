import Carousel from "react-elastic-carousel";

import Styles from "./CardStyle.module.css";

const Faculty = () => {
  return (
    <>
      <div>
        <Carousel>
          <div className={`${Styles.facultyCard}`}>Somethign</div>
          <div className={`${Styles.facultyCard}`}>Somethign</div>
          <div className={`${Styles.facultyCard}`}>Somethign</div>
          <div className={`${Styles.facultyCard}`}>Somethign</div>
          <div className={`${Styles.facultyCard}`}>Somethign</div>
        </Carousel>
      </div>
    </>
  );
};

export default Faculty;
