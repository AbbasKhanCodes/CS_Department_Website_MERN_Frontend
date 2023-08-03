import Styles from "./FacultyStyle.module.css";
import Card from "./Card";
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
          <h2 className={`${Styles.facultyHeading} sectionHeading`}>
            Our <span className="colorTitle">Faculty</span>
          </h2>
          <Card />
        </div>
      </motion.div>
    </>
  );
};

export default Faculty;
