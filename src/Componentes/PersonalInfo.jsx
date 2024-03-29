import React, {useState } from "react";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Grid from '@mui/material/Grid';
import me from "../Assets/img/me.webp";
import goat from "../Assets/img/bitmoji- goat.png";

function PersonalInfo() {

  const [classSkillDiv, setClassSkillDiv] = useState(null)
  const { ref: divref, inView: Elementvisible } = useInView();

  return (
    <div className="main-personalinfo">
      <div className="info-div">
        <Box ref={divref} className={`personal-img ${Elementvisible ? "move-right-img" : ""}`}  mt={2} mb={1}><img  src={me} className="me-img" /> </Box>
        <div className={`introduction-div ${Elementvisible ? "move-left-introduction" : ""}`}>
          <div className="corners">
            <div className="top left"></div>
            <div className="top right"></div>
            <div className="bottom right"></div>
            <div className="bottom left"></div>
            <p className="text-personalinfo principal-info">
              <span className="personalinfo-title"> Who am i?</span>
              Junior Full-Stack Web Developer who loves coding
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
          <LazyLoadImage effect="blur" src="https://img.icons8.com/ios/50/000000/design--v1.png" alt="Monitor image" />
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
          <LazyLoadImage effect="blur" src="https://img.icons8.com/ios/50/000000/database.png" alt="Database image" />
          <div className="main-skill-div">
            {" "}
            <span className="skills-title"> Backend Skills </span>
            <div className="skills">
              <p>PHP</p>
              <p>NodeJS</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>MySQL</p>
              <p>ExpressJS</p>
            </div>
          </div>
        </div>
        <div className="additional-skills-div">
          <LazyLoadImage effect="blur" src="https://img.icons8.com/ios/50/000000/add-bookmark.png" alt="Additional image" />
          <div className="main-skill-div">
            <span className="skills-title"> Additional Skills </span>
            <div className="skills">
              <p>JWT</p>
              <p>Axios</p>
              <p>Redux</p>
              <p>Material UI</p>
              <p>Open Graph</p>
              <p>SEO</p>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{width: "100%", display: "flex", justifyContent: "center", textAlign: "center"}} mt={10} mb={10} >
        <LazyLoadImage effect="blur" className="goat-img" src={goat} />
      </Box>

    </div>
  );
}

export default PersonalInfo;
