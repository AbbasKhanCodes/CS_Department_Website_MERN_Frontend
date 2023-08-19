import "./ResearchCard.css";
const ResearchCards = () => {
  return (
    // a main card component with two cards inside it
    <div className="research-cards">
      <div className="research-card">
        <img src="./images/Research/research1.jpg" alt="" />
        <h3>Researches in AWKUM</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <button className="ResearchButton">Read More...</button>
      </div>
      <div className="research-card">
        <img src="./images/Research/research2.jpg" alt="" />
        <h3>Technology</h3>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
        <button className="ResearchButton">Read More...</button>
      </div>
    </div>
  );
};

export default ResearchCards;
