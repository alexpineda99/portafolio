import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../Css/index.css";
import Fortnitepage from "../Assets/img/work/fortnitepage.PNG";
import Swinguapage from "../Assets/img/work/swinguapage.PNG";

function Experience() {

  useEffect(() => {

    // axios.get("")

  }, [])

  return (
    <div className="experience-main-div">
      <div className="second-title">My work experience</div>
      <div className="work-experience-div">
        <div className="experience-div">
            <a href="https://alex-fortnite.netlify.app/" target="_blank">
                <img src={Fortnitepage} className="experience-img" alt="fortnite page" />
            </a>
            <span> Personal project </span>
            <span> Coded on: ReactJS and NodeJS </span>
        </div>
        <div className="experience-div">
            <a href="https://swingua.com/ru" target="_blank">
                <img src={Swinguapage} className="experience-img" alt="fortnite page" />
            </a>
            <span> Location: USA and Ukraine</span>
            <span> Charge: Frontend Developer</span>
            <span> 01/2020 - 03/2020  </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;