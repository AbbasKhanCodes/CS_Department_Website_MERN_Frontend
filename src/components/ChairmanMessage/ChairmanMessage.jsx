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
            Dear all, Welcome to the Computer Science Department of Abdul Wali
            Khan University Mardan (AWKUM) As the Chairman, I am honored to lead
            this institution dedicated to excellence in education, research, and
            innovation...,
          </p>
          <button className={`${Styles.ReadMoreBtn}  button18`} role="button">
            Read More
          </button>
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
