import Styles from "./FacultyStyle.module.css";

import Card from "./Card";
import { faculty } from "./FacultyStaff";

// Import capitilize words
import { capitalizeFirstLetter } from "../../utilities/utilities";

import { motion } from "framer-motion";

// Animation
let animate = {};
const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
if (!isMobile) {
  animate = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };
} else {
  animate = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };
} //if the width >= 768px, boxVariants will be empty, resulting in no animation
//you need to refresh the page, it doesn't work when you resize it!

const Faculty = () => {
  faculty.map((person) => {
    console.log("Faculty Name " + person.name.fullName);
  });

  return (
    <>
      <motion.div
        className={`${Styles.wrapper} facultyContainer`}
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={animate}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={`${Styles.container}`}>
          {/* Faculty Heading */}
          <div className={`${Styles.row}`}>
            <h2 className={`${Styles.facultyHeading} `}>Meet the faculty</h2>
          </div>

          {/* Paragraph text */}
          <div className={`${Styles.row}`}>
            <p>
              AWKUM CS department’s outstanding faculty offer access to
              world-class research, a wealth of industry experience and the
              ability to present complex concepts and lead high-level executive
              debate.
            </p>
          </div>
        </div>

        <div className={Styles.faculty_component}>
          <div className={Styles.faculty_tree}>
            {faculty.map((person) => (
              <div key={person.name.fullName} className={Styles.faculty_person}>
                <img
                  src={"../images/faculty/" + person.imageSrc}
                  alt="Faculty Staff"
                />
                <div className={Styles.faculty_person_text_box}>
                  <h2>{capitalizeFirstLetter(person.name.fullName)}</h2>
                  <img src="./icons/Arrow 8.svg" alt="arrow forward" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Faculty;
