import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { logo } from "../assets/images";

const HomeInfo = ({ currentStage }) => {
  const commonStyles =
    "neo-brutalism-white neo-btn w-4 h-4 object-contain";

  const imageElement = (
    <img
      src={logo}
      alt="Logo"
      className="mx-auto logo-img"
      style={{ width: "150px", height: "150px" , marginTop: "-60px",}}
    />
  );

  if (currentStage === 1)
    return (
      <div className="text-center mx-5">
        {imageElement}
        <h1 className="sm:text-xl sm:leading-snug neo-brutalism-blue py-4 px-8 text-white">
          Hi, I'm <span className="font-semibold text-white">Bipin</span>
          <br />
          A Software Developer from Nepal
        </h1>
      </div>
    );

  if (currentStage === 2) {
    return (
     
     
     
      <div className="text-center mx-5">
          {imageElement}
          <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          To see my <br /> and picked up many skills along the way
        </p>

        <Link
          to="/ThreeJSProtfolioWebsite/about"
          className={`neo-brutalism-white neo-btn ${commonStyles}`}
        >
          Learn more
          <img src={arrow} alt="arrow" className={commonStyles} />
        </Link>
        </div>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="text-center mx-5">
      {imageElement}
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link
          to="/ThreeJSProtfolioWebsite/projects"
          className={`neo-brutalism-white neo-btn ${commonStyles}`}
        >
          Visit my portfolio
          <img src={arrow} alt="arrow" className={commonStyles} />
        </Link>
        </div>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="text-center mx-5">
      {imageElement}
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link
          to="/ThreeJSProtfolioWebsite/contact"
          className={`neo-brutalism-white neo-btn ${commonStyles}`}
        >
          Let's talk
          <img src={arrow} alt="arrow" className={commonStyles} />
        </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
