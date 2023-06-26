import "../Css/index.css";
import "react-dropdown-now/style.css";
import React, { useState, useEffect} from "react";
import { Dropdown } from "react-dropdown-now";
import CvSpanish from "../Assets/cvs/Cv Alexandro Pineda - Español.pdf";
import CvEnglish from "../Assets/cvs/Cv Alexandro Pineda - English.pdf";
import ThumbsUp from "../Assets/img/bitmoji-20211123015036.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";
import { Achievements_info } from "../Assets/Json info/info";

function Achievements() {
  let [language, setLanguage] = useState("Spanish");
  let [cv, setCv] = useState(CvSpanish);

  const { ref: divref, inView: Elementvisible } = useInView({triggerOnce:true});

  function handleLanguage(value) {
    console.log(value.label);
    if (value.label === "Spanish") {
      setCv(CvSpanish);
      console.log(value);
    } else if (value.label === "English") {
      setCv(CvEnglish);
      console.log(value);
    }
  }

  useEffect(() => {

    console.log(Elementvisible)

  }, [language, cv, Elementvisible]);

  return (
    <div className="achievements-main-div">
      <div className="second-title">My Achievements</div>
      <div className="achievements" ref={divref}>

        {Achievements_info.map((Achievement, i) => 
          <div className={`achieve-div ${i % 2 === 1 && Elementvisible ? "isEven" : "" } ${i % 2 === 0 && Elementvisible ? "isOdd" : "" }`} key={i}>
            <strong className="tittle-achieve">
              {" "}
              {Achievement.title}  {" "}
            </strong>
            <span className="school-achieve">
              {" "}
              {Achievement.school} {" "}
            </span>
            <span className="country-achieve"> {Achievement.place} </span>
            <span className="date-achieve"> {Achievement.date} </span>
          </div>

        )}
      </div>

      <div className="cv-div">
        <span>
          <a href={cv} target="_blank">
            {" "}
            Download my CV here{" "}
          </a>{" "}
        </span>
        <div>
          <Dropdown
            className="dropdown-language"
            placeholder="Select a language"
            options={[
              "Spanish",
              "English",
              { disabled: true, label: "Italian" },
            ]}
            value={language}
            onChange={(value) => handleLanguage(value)}
            onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) =>
              console.log("closedBySelection?:", closedBySelection)
            }
            onOpen={() => console.log("open!")}
          />
          <LazyLoadImage effect="blur" src={ThumbsUp} alt="Thumbs Up" className="bit-img" />
          {/* <span class="flag-icon flag-icon-us"><img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" /></span> */}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
