import Styles from "./FacultyStyle.module.css";
import Card from "./Card";

const Faculty = () => {
  return (
    <>
      <div className={`${Styles.wrapper} facultyContainer`}>
        <div className={`${Styles.container}`}>
          <h2 className={`${Styles.facultyHeading} sectionHeading`}>
            Our <span className="colorTitle">Faculty</span>
          </h2>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Faculty;
