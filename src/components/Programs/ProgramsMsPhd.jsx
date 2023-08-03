import Styles from "./ProgramsMsPhdStyle.module.css";
import { motion } from "framer-motion";

// Animation
let animate = {};
const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
if (!isMobile) {
  animate = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
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
}
//if the width >= 768px, boxVariants will be empty, resulting in no animation
//you need to refresh the page, it doesn't work when you resize it!

const ProgramsMsPhd = () => {
  return (
    <>
      <motion.div
        className={`${Styles.container}`}
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={animate}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={`${Styles.backgroundImg} `}></div>
        <div className={`${Styles.content}`}>
          <h2>
            Explore our <span>MS & Phd Programs</span>{" "}
          </h2>

          <p>
            The structure of a MS & Phd programme in Computer Science is
            proposed to meet the needs of students with formal computing
            experience and with established relevant skills. Students are
            expected to learn theoretical and practical understanding of the
            entire field of Computer Science. The proposed structure is dynamic
            and provides basis for various options including Breadth-Based,
            Depth-Based, and Integrated Breadth & Depth-Based specializations.
            Student may choose a particular option, which is most appropriate to
            their planned future career.
          </p>
          <a href="https://awkum.edu.pk/faculties-colleges/faculty-of-physical-numerical-sciences/cs-garden/programs/">
            <button className="btn-primary btn-lg">Explore Programs</button>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default ProgramsMsPhd;
