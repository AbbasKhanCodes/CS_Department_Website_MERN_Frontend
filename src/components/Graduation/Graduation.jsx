import Styles from "./Graduation.module.css";
const Graduation = () => {
  return (
    <>
      <div className={Styles.graduation}>
        <div className={`${Styles.image}`}>
          <img
            src="./images/graduation/agraduationImage.webp"
            alt="graduation"
          />
        </div>

        <div className={Styles.Graduation_heading_container}>
          <h2 className={Styles.graduation_heading}>
            "Department of Computer Science has long been a magnet for talent in
            computing an unparalleled center of technological and scientific
            innovation."
          </h2>
          <p className={Styles.graduation_paragraph}>
            - Dr. Sher Afzal Khan Professor at the department of Computer
            Science and Dean Faculty of Business & Economics.
          </p>
        </div>
      </div>
    </>
  );
};

export default Graduation;
