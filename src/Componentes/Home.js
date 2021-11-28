import "../Css/index.css";
import Mehey from "../Assets/img/bitmoji-20211123014412-removebg-preview.png";
import Nav from "./Navbar";
import PersonalInfo from "./PersonalInfo";

function Home() {
  return (
    <div className="main">
      <Nav />
      <div className="principal">
        <div className="principal-1">
          <p className="principal-text-line1"> Hi </p>
          <p className="principal-text-line2"> I am </p>
          <p className="principal-text-line3"> Alex </p>
        </div>
        <div className="principal-2">
          <img src={Mehey} className="bit-img" />
        </div>
      </div>
      <div className="second-title">Full Stack Web Developer</div>
      <PersonalInfo/>
    </div>
  );
}

export default Home;
