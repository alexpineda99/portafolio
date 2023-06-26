import "../Css/index.css";
import Mehey from "../Assets/img/bitmoji-20211123014412-removebg-preview.png";
import Nav from "./Navbar";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  return (
    <div className="main">
      <Nav />
      <div className="principal glitch">
        <div className="principal-1">
          <p className="principal-text-line1 glitch"> <span aria-hidden="true">Hi</span> Hi <span aria-hidden="true">Hi</span> </p>
          <p className="principal-text-line2 glitch"> <span aria-hidden="true">I am</span> I am <span aria-hidden="true">I am</span> </p>
          <p className="principal-text-line3 glitch"> <span aria-hidden="true">Alex</span> Alex <span aria-hidden="true">Alex</span> </p>
        </div>
        <div className="principal-2">
          <LazyLoadImage src={Mehey} alt="Greetings" className="bit-img" effect="blur" />
        </div>
      </div>
      <div className="second-title"> <p className="glitch">  <span aria-hidden="true">Full Stack Web Developer</span> Full Stack Web Developer <span aria-hidden="true">Full Stack Web Developer</span> </p> </div>
      <PersonalInfo/>
      <Experience/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
