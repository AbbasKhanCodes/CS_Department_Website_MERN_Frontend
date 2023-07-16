import Styles from "./FacultyStyle.module.css";
import Card from "./Card";

const Faculty = () => {
  return (
    <>
      <div className={`${Styles.facultyContainer}`}>
        <h2 className={`${Styles.facultyHeading}`}>Faculty</h2>
        <Card />
      </div>
    </>
  );
};

export default Faculty;
