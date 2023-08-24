import Styles from "./StudentStory.module.css";
const Courses = () => {
  return (
    <div className={Styles.courses}>
      <div className={Styles.course}>
        <img
          src="./images/studentStories/1.webp"
          alt=""
          height={80}
          width={80}
        />
        <h3>Saad Khan</h3>
        <p>
          BCS'AI Batch 1st student from AWKUM earns Prime Minister's National
          Innovation Award (PMNIA) through rigorous selection at NUST.
          IMSciences Peshawar training, along with HEC and NUST support, played
          a vital role. Heartfelt gratitude for the journey and the presence of
          NADEEM IQBAL.
        </p>
        <a
          href="https://www.linkedin.com/posts/saad-amazon-ppc-specialist_pmnia-june-2023-activity-7091073468800151552-J4z2?utm_source=share&utm_medium=member_desktop"
          target="_blank"
        >
          <button className={Styles.button}>View Details</button>
        </a>
      </div>
      <div className={Styles.course}>
        <img
          src="./images/studentStories/2.jpeg"
          alt=""
          height={80}
          width={80}
        />
        <h3>Rukhsar Bakhtaj</h3>
        {/* <p>
          As a member of BCS'AI Batch 1st at AWKUM's Computer Science
          department, I'm proud to highlight a remarkable achievement within our
          ranks. She not only contributed significantly to the "Prime Minister's
          National Innovation Award (PMNIA)" but also secured a prestigious
          scholarship from Google, solidifying her dedication to excellence.
          Furthermore, her role as a pioneer in technological societies
          exemplifies her commitment to shaping a dynamic future.
        </p> */}

        {/* <p>
          As a student of BCS'AI Batch 1st at AWKUM's Computer Science
          department, I'm excited to highlight her exceptional journey embracing
          the "Prime Minister's National Innovation Award (PMNIA)," securing a
          Google scholarship, and pioneering in technological societies.
        </p> */}

        <p>
          Being a member of BCS'AI Batch 1st at AWKUM's Computer Science
          department, I take pride in my journey—contributing to the "Prime
          Minister's National Innovation Award (PMNIA)," earning a Google
          scholarship, and pioneering in technological societies and leveraging
          my graphic design expertise with gratitude.
        </p>
        <a href="https://www.linkedin.com/in/rukhsarai/" target="_blank">
          <button className={Styles.button}>View Details</button>
        </a>
      </div>
      <div className={Styles.course}>
        <img
          src="./images/studentStories/3.webp"
          alt=""
          height={80}
          width={80}
        />
        <h3>Zeeshan Ahmed</h3>
        <p>
          Completing the ISPR internship 2023 marks a significant achievement
          for me as a BCS Batch 11th student at AWKUM's Computer Science
          department. Engaging with national leaders, including Caretaker Prime
          Minister Anwar ul Haq Kakar and Army Chief Syed Asim Munir, ignited
          hope for a prosperous Pakistan.
        </p>
        {/* The experience, enriched by diverse
          friendships and cultural exchanges, at EME College is unforgettable.
          Grateful to ISPR, staff, and research officers for this invaluable
          opportunity. */}
        <a
          href="https://www.facebook.com/permalink.php?story_fbid=pfbid02WbZ3hiGK4aTopd3T1XGYNJWwMZQXUVzZsAcywxwWuWPwuACyNDHjCE2fQGihnioal&id=100011465593010"
          target="_blank"
        >
          <button className={Styles.button}>View Details</button>
        </a>
      </div>
    </div>
  );
};

export default Courses;
