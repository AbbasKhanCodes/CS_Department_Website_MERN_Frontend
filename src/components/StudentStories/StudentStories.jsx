import StudentStory from "./StudentStory";
import "./StudentStories.css";
const StudentStories = () => {
  return (
    // a main card component with two cards inside it
    <div className="research-cards-container">
      <div className="research-card-text-box">
        <h2 className="research-card-text-heading">STUDENT STORIES</h2>
        <p className="research-card-text-paragraph">
          Unveiling Journeys: Inspiring Tales of Growth and Triumph from Abdul
          Wali Khan University Mardan's Vibrant Student Community
        </p>
      </div>
      {/* <div className="research-cards">
        <div className="research-card">
          <img src="./images/Research/robot1.jpg" alt="" />
          <h5>Scientific Discovery</h5>
          <h3>Researches in AWKUM</h3>
          <p>
            AWKUM university strives to solve the country's most pressing
            problems working in conjunction with other leaders across the globe.
          </p>
          <button className="ResearchButton">Explore Faculty</button>
        </div>
        <div className="research-card">
          <img src="./images/Research/robot2.jpg" alt="" />
          <h5>Passion + Inspiration</h5>
          <h3>Technology</h3>
          <p>
            The CS department is a center of research and education, discovering
            new frontiers in AI, Machine learning, Robotics and more
          </p>
          <button className="ResearchButton">More about CS Research</button>
        </div>
      </div> */}
      <StudentStory />
    </div>
  );
};

export default StudentStories;
