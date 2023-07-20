import Styles from "./AdmissionsStyle.module.css";

const Admissions = () => {
  return (
    <>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.backgroundImg}`}>
          <div className={`${Styles.insideBackgroundImg}`}></div>
        </div>
        <div className={`${Styles.content}`}>
          <h2>
            Admissions <span>OPEN</span>{" "}
          </h2>
          <h3>
            Make your future, <span>Get Enrolled</span>
          </h3>
          <p>
            Grab this opportunity. Enrolled in graduate and weekend programs of
            Abdul Wali Khan University Mardan Grab this opportunity. Enrolled in
            graduate and weekend programs of Abdul Wali Khan University Mardan
          </p>
          <a href="https://admissions.awkum.edu.pk/">
            <button className="btn-primary btn-lg">Click to apply</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Admissions;
