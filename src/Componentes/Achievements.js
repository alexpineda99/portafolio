import "../Css/index.css";

function Achievements() {
  return (
    <div className="achievements-main-div">
      <div className="second-title">My Achievements</div>
        <div className="achievements">
            
            <div className="achieve-div">
                <span className="tittle-achieve"> Ingeniería en informática </span>
                <span className="school-achieve"> Universidad Rafael Belloso Chacin  </span>
                <span className="country-achieve"> Maracaibo ▪ Venezuela </span>
                <span className="date-achieve"> 09/2016 – 03/2021 </span>
            </div>

            <div className="achieve-div">
                <span className="tittle-achieve"> Full Stack Web Developer </span>
                <span className="school-achieve"> Universidad Rafael Belloso Chacin  </span>
                <span className="country-achieve"> Maracaibo ▪ Venezuela </span>
                <span className="date-achieve"> 10/2019 – 04/2020 </span>
            </div>

            <div className="achieve-div">
                <span className="tittle-achieve"> Cisco Certified Network Associate 1 </span>
                <span className="school-achieve"> Universidad Rafael Belloso Chacin  </span>
                <span className="country-achieve"> Maracaibo ▪ Venezuela </span>
                <span className="date-achieve"> 02/2019 – 07/2019 </span>
            </div>

            <div className="achieve-div">
                <span className="tittle-achieve"> Mobile Application Development </span>
                <span className="school-achieve"> Universidad Complutense de Madrid  </span>
                <span className="country-achieve"> Madrid ▪ España </span>
                <span className="date-achieve"> 11/2019 </span>
            </div>

        </div>
    </div>
  );
}

export default Achievements;