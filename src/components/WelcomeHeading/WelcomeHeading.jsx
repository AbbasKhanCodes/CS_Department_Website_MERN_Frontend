import Styles from "./WelcomeHeadingStyle.module.css";

function WelcomeHeading() {
  return (
    <>
      <div className={`${Styles.welcomeWrapper}`}>
        <h2>
          <span>WELCOME TO THE COMPUTER SCIENCE DEPARTMENT</span> <br />
          AWKUM, Garden Campus
        </h2>
      </div>
    </>
  );
}
export default WelcomeHeading;
