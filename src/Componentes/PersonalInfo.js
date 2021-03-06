import React, { useEffect, useState } from "react";
import "../Css/index.css";
import me from "../Assets/img/me.PNG";
import goat from "../Assets/img/bitmoji- goat.png";

function PersonalInfo() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [classSkillDiv, setClassSkillDiv] = useState(null)
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    console.log(position)
    // if (position >= 250) {
    //   setClassSkillDiv("open-div");
    // }else if (position <= 250) {
    //   setClassSkillDiv(null);
    // }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-personalinfo">
      <div className="info-div">
        <div className="personal-img"><img src={me} className="me-img" /> </div>
        <div className="introduction-div">
          <div className="corners">
            <div class="top left"></div>
            <div class="top right"></div>
            <div class="bottom right"></div>
            <div class="bottom left"></div>
            <p className="text-personalinfo principal-info">
              <span className="personalinfo-title"> Who am i?</span>
              I am Alexandro Pineda, a software Engineering who loves coding
              with a big coffee cup and listening to music. Always encouraged to
              learn about new programming web technologies. Enthusiast,
              motivated and passionate.
            </p>
          </div>
        </div>
      </div>
      <div className="title-skills-div">
        <h1> Some skills and development experience </h1>
      </div>
      <div className={`skill-div ${classSkillDiv}`}>
        <div className="frontend-skills-div">
          <img src="https://img.icons8.com/ios/50/000000/design--v1.png" alt="Monitor image" />
          <div className="main-skill-div">
            <span className="skills-title"> Frontend Skills </span>
            <div className="skills">
              <p>HTML</p>
              <p>CSS3</p>
              <p>Javascript</p>
              <p>ReactJS</p>
              <p>React Native</p>
              <p>Laravel</p>
              <p>VueJS</p>
            </div>
          </div>
        </div>
        <div className="backend-skills-div">
          <img src="https://img.icons8.com/ios/50/000000/database.png" alt="Database image" />
          <div className="main-skill-div">
            {" "}
            <span className="skills-title"> Backend Skills </span>
            <div className="skills">
              <p>PHP</p>
              <p>NodeJS</p>
              <p>MySQL</p>
            </div>
          </div>
        </div>
        <div className="additional-skills-div">
          <img src="https://img.icons8.com/ios/50/000000/add-bookmark.png" alt="Additional image" />
          <div className="main-skill-div">
            <span className="skills-title"> Additional Skills </span>
            <div className="skills">
              <p>JWT</p>
              <p>Axios</p>
              <p>Redux</p>
              <p>ExpressJS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="goat-div">
        <img src={goat} className="goat-img" />
      </div>

    </div>
  );
}

export default PersonalInfo;
