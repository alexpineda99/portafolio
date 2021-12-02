import "../Css/index.css";
import Fortnitepage from "../Assets/img/work/fortnitepage.PNG"
import Swinguapage from "../Assets/img/work/swinguapage.PNG"

function Experience() {
  return (
    <div className="main">
      <div className="second-title">My work experience</div>
      <div className="work-experience-div">
        <div className="experience-div">
            <a href="https://alex-fortnite.netlify.app/" target="_blank">
                <img src={Fortnitepage} className="experience-img" alt="fortnite page" />
            </a>
        </div>
        <div className="experience-div">
            <a href="https://swingua.com/ru" target="_blank">
                <img src={Swinguapage} className="experience-img" alt="fortnite page" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;