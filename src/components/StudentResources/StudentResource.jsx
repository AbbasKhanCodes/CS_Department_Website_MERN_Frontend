import Styles from "./StudentResource.module.css";
const StudentResource = () => {
  return (
    <div className={Styles.student_resources_component}>
      <h1>Student Resources</h1>
      <div className={Styles.student_resources}>
        <a href="https://lms.awkum.edu.pk/" target="_blank">
          <div className={Styles.student_resource}>
            <img
              src="./icons/icons8-management-50.png"
              alt=""
              height={64}
              width={64}
            />
            <h2>Learning Management System</h2>
          </div>
        </a>

        <a href="https://fyps.aamirakbar.com/" target="_blank">
          <div className={Styles.student_resource}>
            <img
              src="./icons/icons8-woman-at-computer-50.png"
              alt=""
              height={64}
              width={64}
            />
            <h2>Final Year Project</h2>
          </div>
        </a>
        <a href="http://qec.awkum.edu.pk/login.php" target="_blank">
          <div className={Styles.student_resource}>
            <img
              src="./icons/icons8-evaluation-50.png"
              alt=""
              height={64}
              width={64}
            />
            <h2>Teacher Evaluation</h2>
          </div>
        </a>
        <a href="https://awkum.edu.pk/downloads/" target="_blank">
          <div className={Styles.student_resource}>
            <img
              src="./icons/icons8-more-details-50.png"
              alt=""
              height={64}
              width={64}
            />
            <h2>Download Forms</h2>
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCphpd6Yex5dXx2iAee5rBPg"
          target="_blank"
        >
          <div className={Styles.student_resource}>
            <img
              src="./icons/icons8-youtube-50.png"
              alt=""
              height={64}
              width={64}
            />
            <h2>Youtube Channel</h2>
          </div>
        </a>
        <a href="https://lms.awkum.edu.pk/" target="_blank">
          <div className={Styles.student_resource}>
            <img
              src="./icons/icons8-facebook-50.png"
              alt=""
              height={64}
              width={64}
            />
            <h2>Facebook Channel</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default StudentResource;
