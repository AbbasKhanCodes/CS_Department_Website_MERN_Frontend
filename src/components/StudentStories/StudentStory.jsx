import Styles from "./StudentStory.module.css";
const Courses = () => {
  return (
    <div className={Styles.courses}>
      <div className={Styles.course}>
        <img src="./background/coding-man.jpg" alt="" height={80} width={80} />
        <h3>Saad Khan</h3>
        <p>
          "Embrace challenges with determination, for they shape the warrior
          within. Every obstacle conquered is a step closer to greatness."
        </p>
        <a href="./pdf/CurriculumBCS(Software).pdf" target="_blank">
          <button className={Styles.button}>View Semester Details</button>
        </a>
      </div>
      <div className={Styles.course}>
        <img
          src="./background/computer-science-background.jpg"
          alt=""
          height={80}
          width={80}
        />
        <h3>Rukhsar Khan</h3>
        <p>
          "Let curiosity be your compass, guiding you through the uncharted
          realms of knowledge. Your thirst for learning fuels your journey to
          success."
        </p>
        <a href="./pdf/CurriculumBCS.pdf" target="_blank">
          <button className={Styles.button}>View Semester Details</button>
        </a>
      </div>
      <div className={Styles.course}>
        <img
          src="./background/cyber-security-background.jpg"
          alt=""
          height={80}
          width={80}
        />
        <h3>Zeeshan Ahmed</h3>
        <p>
          Embark on a journey of paramount importance in the digital age with
          our exceptional Cyber Security program at the university. As
          technology continues to evolve.
        </p>
        <a href="./pdf/CyberSecurityCurriculum.pdf" target="_blank">
          <button className={Styles.button}>View Semester Details</button>
        </a>
      </div>
    </div>
  );
};

export default Courses;
