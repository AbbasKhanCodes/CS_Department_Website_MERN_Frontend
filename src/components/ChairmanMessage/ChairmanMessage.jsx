import Styles from "./ChairmanMessageStyle.module.css";

function ChairmanMessage() {
  return (
    <>
      <div className={`${Styles.chairmanMessageContainer}`}>
        <h2 className={`${Styles.chairmanMessageHeading} sectionHeading`}>
          <span className="colorTitle">Chairman</span> Message
        </h2>

        {/* Profile Image & Message Text */}
        <div className="clearfix">
          <img
            className={`${Styles.chairmanImg}`}
            src="../images/faculty/nadeemIqbal.jpg"
            alt="Picture of Nadeem Iqbal"
          />

          <p className={`${Styles.chairmanMessage}`}>
            Dear students, faculty, and staff, Welcome to the Computer Science
            Department of Abdul Wali Khan University Mardan (AWKUM) As the
            Chairman, I am honored to lead this institution dedicated to
            excellence in education, research, and innovation. Our experienced
            faculty, state-of-the-art facilities, and diverse academic programs
            ensure a comprehensive learning experience. We are committed to
            nurturing your talents, fostering critical thinking, and preparing
            you for the dynamic field of computer science. Together, let us
            embark on a transformative journey of growth and success. At our
            department, we strive to provide you with a supportive and inclusive
            environment where you can excel academically, engage in hands-on
            learning, and develop leadership skills. Through our range of
            courses and access to cutting-edge technologies, we aim to equip you
            with the necessary skills and knowledge to thrive in the
            ever-evolving world of technology. Join us as we explore the
            fascinating realms of software development, artificial intelligence,
            data science, cybersecurity, and more. Together, we will shape the
            future of computer science and make a positive impact in our
            society.
          </p>
        </div>

        {/* Profile Details */}
        <div>
          <h4 className={`${Styles.chairmanName}`}> DR. NADEEM IQBAL</h4>
          <p>
            Associate Professor <br />
            Abdul Wali Khan University Mardan
          </p>
        </div>
      </div>
    </>
  );
}
export default ChairmanMessage;
