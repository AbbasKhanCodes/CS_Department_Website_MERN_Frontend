import "./Quotation.css";
const Quotation = () => {
  return (
    <div className="quotation">
      <div className="quotation-text">
        <img
          src="../../../public/images/Research/quotation-front.svg"
          alt=""
          className="quotation-front"
        />
        <img
          src="../../../public/images/Research/quotation-back.svg"
          alt=""
          className="quotation-back"
        />
        <p>
          "Welcome to the Computer Science Department at AWKUM! We are dedicated
          to fostering a dynamic learning environment where innovation and
          technology converge. Our commitment to excellence drives us to offer
          cutting-edge programs, expert faculty, and a platform for students to
          explore the ever-evolving world of computer science. Together, we
          shape the future of technology."
        </p>
      </div>
    </div>
  );
};

export default Quotation;
