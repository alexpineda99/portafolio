import "../Css/index.css";
import "react-dropdown-now/style.css";
import React, {useState, useEffect} from "react";
import { Dropdown, Selection } from "react-dropdown-now";
import CvSpanish from "../Assets/cvs/AP CV - Español.pdf";
import CvEnglish from "../Assets/cvs/AP CV - English.pdf";
import ThumbsUp from "../Assets/img/bitmoji-20211123015036.png"

function Achievements() {

  let [language, setLanguage] = useState("Spanish");
  let [cv, setCv] = useState(CvSpanish)

  function handleLanguage(value) {
    console.log(value.label)
    if (value.label === "Spanish") {
      setCv(CvSpanish)
      console.log(value)
    } else if (value.label === "English") {
      setCv(CvEnglish)
      console.log(value)
    }
    
  }



  useEffect(() => {


    
  }, [language, cv])

  return (
    <div className="achievements-main-div">
      <div className="second-title">My Achievements</div>
      <div className="achievements">
        <div className="achieve-div">
          <strong className="tittle-achieve">
            {" "}
            Computer Software Engineering{" "}
          </strong>
          <span className="school-achieve">
            {" "}
            Universidad Rafael Belloso Chacin{" "}
          </span>
          <span className="country-achieve"> Maracaibo ▪ Venezuela </span>
          <span className="date-achieve"> 09/2016 – 03/2021 </span>
        </div>

        <div className="achieve-div">
          <strong className="tittle-achieve"> Full Stack Web Developer </strong>
          <span className="school-achieve">
            {" "}
            Universidad Rafael Belloso Chacin{" "}
          </span>
          <span className="country-achieve"> Maracaibo ▪ Venezuela </span>
          <span className="date-achieve"> 10/2019 – 04/2020 </span>
        </div>

        <div className="achieve-div">
          <strong className="tittle-achieve">
            {" "}
            Cisco Certified Network Associate 1{" "}
          </strong>
          <span className="school-achieve">
            {" "}
            Universidad Rafael Belloso Chacin{" "}
          </span>
          <span className="country-achieve"> Maracaibo ▪ Venezuela </span>
          <span className="date-achieve"> 02/2019 – 07/2019 </span>
        </div>

        <div className="achieve-div">
          <strong className="tittle-achieve">
            {" "}
            Mobile Application Development{" "}
          </strong>
          <span className="school-achieve">
            {" "}
            Universidad Complutense de Madrid{" "}
          </span>
          <span className="country-achieve"> Madrid ▪ España </span>
          <span className="date-achieve"> 11/2019 </span>
        </div>
      </div>

      <div className="cv-div">
        <span>
          <a href={cv}> Download my CV here </a>{" "}
        </span>
        <div>
          <Dropdown
          className="dropdown-language"
            placeholder="Select a language"
            options={
              ["Spanish", 
              "English", 
              {disabled: true,label:"Italian"}]
            }
            value={language}
            onChange={(value) => handleLanguage(value)}
            onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
            onClose={(closedBySelection) =>
              console.log("closedBySelection?:", closedBySelection)
            }
            onOpen={() => console.log("open!")}
          />
          <img src={ThumbsUp} alt="Thumbs Up" className="bit-img" />
          {/* <span class="flag-icon flag-icon-us"><img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" /></span> */}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
