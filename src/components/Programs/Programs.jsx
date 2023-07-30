import Styles from "./ProgramsStyle.module.css";

const Programs = () => {
  return (
    <>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.backgroundImg} `}></div>
        <div className={`${Styles.content}`}>
          <h2>
            Explore our <span>Bachelor's Programs</span>{" "}
          </h2>

          <p>
            The structure of a BS programme in Computer Science is proposed to
            meet the needs of students with formal computing experience and with
            established relevant skills. Students are expected to learn
            theoretical and practical understanding of the entire field of
            Computer Science. The proposed structure is dynamic and provides
            basis for various options including Breadth-Based, Depth-Based, and
            Integrated Breadth & Depth-Based specializations. Student may choose
            a particular option, which is most appropriate to their planned
            future career.
          </p>
          <a href="https://awkum.edu.pk/faculties-colleges/faculty-of-physical-numerical-sciences/cs-garden/programs/">
            <button className="btn-primary btn-lg">Explore Programs</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Programs;
