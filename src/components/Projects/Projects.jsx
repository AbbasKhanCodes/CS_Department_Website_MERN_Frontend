import Styles from "./ProjectsStyle.module.css";
import Card from "./Card";

import { motion } from "framer-motion";

// Animation
let animate = {
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

const Projects = () => {
  return (
    <>
      <motion.div
        className={`${Styles.wrapper} ProjectContainer`}
        initial={"offscreen"}
        whileInView={"onscreen"}
        variants={animate}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={`${Styles.container}`}>
          <h2 className={`${Styles.Heading} sectionHeading`}>
            Our <span className="colorTitle">Projects</span>
          </h2>
          <Card />
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
