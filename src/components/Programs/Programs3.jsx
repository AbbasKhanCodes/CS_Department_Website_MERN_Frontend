import Styles from "./ProgramsStyle.module.css";

const Programs3 = () => {
  return (
    <>
      <div className={`${Styles.container}`}>
        <div
          className={`${Styles.backgroundImg} ${Styles.programs3}`}
          style={{
            backgroundImage: `url(../images/programs/programs3.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        >
          <div className={`${Styles.insideBackgroundImg}`}></div>
        </div>
        <div className={`${Styles.content}`}>
          <h2>
            Explore our <span>Programs & Majors</span>{" "}
          </h2>

          <p>
            Discover a world of possibilities through our comprehensive range of
            cutting-edge programs and majors in Computer Science. Whether you're
            passionate about artificial intelligence, cybersecurity, software
            engineering, or data science, we offer a diverse array of
            specialized tracks to fuel your passion for technology. Explore the
            opportunities that await you and choose your path to a successful
            and fulfilling career in the tech industry.
          </p>
          <a href="https://admissions.awkum.edu.pk/">
            <button className="btn-primary btn-lg">Explore Programs</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Programs3;
