import Styles from "./AdmissionsStyle.module.css";

const Admissions = () => {
  return (
    <>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.content}`}>
          <span className={`${Styles.admissionAlert}`}>
            ADMISSIONS ALERT FALL-2023
          </span>

          <h3>
            Admissions <span>OPEN.</span> Make your future,{" "}
            <span>Get Enrolled</span>
          </h3>
          <p>
            Grab this opportunity. Enrolled in graduate and weekend programs of
            Abdul Wali Khan University Mardan
          </p>
          <a href="https://admissions.awkum.edu.pk/">
            <button className={`${Styles.btnAction} btn-primary btn-lg`}>
              Click to apply
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Admissions;
