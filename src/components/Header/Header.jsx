import "./header.css";
const Header = () => {
  return (
    <div className="Header-Main">
      <div className="Header-Main-Top">
        <p>Abdul Wali Khan University Mardan, Pakistan</p>
      </div>

      {/* <div className="Header-Main-Middle">
        <p>
          <span>
            <img
              src="./images/Header/information-icon.svg"
              alt="information icon"
              height={22}
              width={22}
            />{" "}
            GLOBAL MESSAGE:
          </span>{" "}
          Welcome to the new computer science website
        </p>
      </div>  */}
      <div className="Header-Main-Bottom">
        <span className="header-heading">AWKUM |</span> Computer Science
        Department
      </div>
    </div>
  );
};

export default Header;
