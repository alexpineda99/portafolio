import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/index.css";
import Fortnitepage from "../Assets/img/work/fortnitepage.PNG";
import Swinguapage from "../Assets/img/work/swinguapage.PNG";
import Levide from "../Assets/img/work/levideclothing.png";

function Experience() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchdata = async () => {
      await axios
        .get("http://localhost:3001/listimg")
        .then((res) => {
          console.log(res.data);
          setData(res.data.data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchdata();
  }, []);

  return (
    <div className="experience-main-div">
      <div className="second-title">My work experience</div>
      <div className="work-experience-div">
        <div className="experience-div">
          <a href="https://alex-fortnite.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img
              src={Fortnitepage}
              className="experience-img"
              alt="fortnite page"
            />
          </a>
          <span> Personal project </span>
          <span> ReactJS, NodeJS, ExpressJS </span>
        </div>
        <div className="experience-div">
          <a href="https://swingua.com/ru" target="_blank" rel="noopener noreferrer">
            <img
              src={Swinguapage}
              className="experience-img"
              alt="fortnite page"
            />
          </a>
          <span> Location: USA and Ukraine</span>
          <span> Charge: Frontend Developer</span>
          <span> Laravel, VueJS, Bootstrap </span>
        </div>
        <div className="experience-div">
          <a href="https://levideclothing.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img
              src={Levide}
              className="experience-img"
              alt="Le Vide Clothing"
            />
          </a>
          <span> Cancelled by the client </span>
          <span> Location: USA</span>
          <span> Charge: Full Stack Developer</span>
          <span> ReactJS, NodeJS, ExpressJS, JWT </span>
        </div>
      </div>
      {/* {data.map((img, index) => 
      
      <img
      src={`http://localhost:3001/screenshots/${img}`}
      className="experience-img"
      alt="fortnite page"
    />
      
      )} */}
    </div>
  );
}

export default Experience;
