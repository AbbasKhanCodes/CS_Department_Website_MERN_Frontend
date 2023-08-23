import Styles from "./Courses.module.css";
const Courses = () => {
  return (
    <div className={Styles.courses}>
      <div className={Styles.course}>
        <img src="./images/Research/robot1.jpg" alt="" height={80} width={80} />
        <h3>Artificial Intelligence</h3>
        <p>
          In our university programs, the study of AI encompasses a
          multidisciplinary exploration of computer science, mathematics, and
          cognitive psychology. Students delve into the intricacies of machine
          learning, where algorithms evolve and adapt through data-driven
          experiences, enabling computers to mimic human-like learning. Neural
          networks, the heart of AI, simulate the human brain's
          interconnectedness, enabling tasks like image recognition, natural
          language processing, and autonomous decision-making. As university
          programs showcase AI's potential, they empower students to push
          boundaries, unravel complexity, and shape the future by infusing
          technology with unprecedented levels of intellect and insight.
        </p>
        <a href="./pdf/CurriculumBCS(AI).pdf" target="_blank">
          <button className={Styles.button}>View Semester Details</button>
        </a>
      </div>
      <div className={Styles.course}>
        <img src="./background/coding-man.jpg" alt="" height={80} width={80} />
        <h3>Software Engineering</h3>
        <p>
          In our university programs, the realm of Software Engineering unfolds
          through a comprehensive curriculum that blends theory with practical
          application. Students embark on a journey to master programming
          languages, software architecture, and development methodologies,
          equipping them to design, build, and optimize intricate software
          systems. Through hands-on projects, they learn to translate concepts
          into functional code, collaborating in agile teams to simulate
          real-world industry practices. From mobile apps that enhance daily
          lives to robust web platforms that connect global communities,
          university programs in Software Engineering empower students to craft
          elegant solutions, bridging imagination and technology to forge the
          digital landscapes of tomorrow.
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
        <h3>Computer Science</h3>
        <p>
          Step into the dynamic realm of computer science at our esteemed
          university, where cutting-edge technology and limitless creativity
          converge. Our computer science courses and programs are meticulously
          crafted to equip students with the skills needed to tackle complex
          challenges in this digital age. From foundational principles to
          advanced specializations such as artificial intelligence,
          cybersecurity, and software engineering, our expert faculty guide
          students through a transformative learning journey. Through hands-on
          projects, internships, and research opportunities, students gain
          real-world experience that hones their problem-solving abilities. Join
          our vibrant community of innovators and explorers, and embark on a
          path that not only embraces the exciting advancements of today but
          also shapes the technological landscape of tomorrow.
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
        <h3>Cyber Security</h3>
        <p>
          Embark on a journey of paramount importance in the digital age with
          our exceptional Cyber Security program at the university. As
          technology continues to evolve, so do the threats that accompany it.
          Our program offers a comprehensive curriculum that delves into the
          intricacies of safeguarding digital assets, networks, and sensitive
          information. Guided by seasoned experts, students will acquire
          proficiency in threat detection, risk assessment, encryption
          techniques, and ethical hacking. With hands-on simulations and
          real-world case studies, our students graduate equipped to defend
          against cyber threats in various domains, from finance to healthcare
          and beyond. Join us in cultivating the next generation of cyber
          defenders who will play a pivotal role in upholding the integrity of
          the digital landscape.
        </p>
        <a href="./pdf/CyberSecurityCurriculum.pdf" target="_blank">
          <button className={Styles.button}>View Semester Details</button>
        </a>
      </div>
    </div>
  );
};

export default Courses;
