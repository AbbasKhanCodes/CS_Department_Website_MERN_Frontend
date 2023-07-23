import Styles from "./ProjectsStyle.module.css";
import Card from "./Card";

const Projects = () => {
  return (
    <>
      <div className={`${Styles.wrapper} ProjectContainer`}>
        <div className={`${Styles.container}`}>
          <h2 className={`${Styles.Heading} sectionHeading`}>
            Our <span className="colorTitle">Projects</span>
          </h2>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Projects;
