import "../Css/index.css";

function PersonalInfo() {
  return (
    <div className="main-personalinfo">
      <span className="personalinfo-title"> Who i am?</span>

      <div className="principal">
        <div className="principal-info">
          <div>
            <p className="text-personalinfo">
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
      <div className="skill-div">
        <div className="frontend-skills-div">
          <img src="https://img.icons8.com/ios/50/000000/design--v1.png" />
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
          <img src="https://img.icons8.com/ios/50/000000/database.png" />
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
          <img src="https://img.icons8.com/ios/50/000000/add-bookmark.png" />
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
    </div>
  );
}

export default PersonalInfo;
