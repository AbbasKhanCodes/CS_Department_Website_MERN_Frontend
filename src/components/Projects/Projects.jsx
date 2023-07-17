import Styles from "./ProjectsStyle.module.css";
import Card from "./Card";

const Projects = () => {
  return (
    <>
      <div className={`${Styles.Container}`}>
        <h2 className={`${Styles.Heading}`}>Projects</h2>
        <Card />
      </div>
    </>
  );
};

export default Projects;
