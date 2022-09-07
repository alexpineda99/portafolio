import "../Css/index.css";
import react, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navbar } from "react-responsive-navbar-overlay";
import Home from "./Home";
import Contact from "./Contact";
import Letra from "../Assets/img/letra-mayus-azul-25medium.png";

function Nav() {
  let location = useLocation();

  //   location = {
  //     pathname:"/",
  //     hash: "#contact"
  // }

  function scrollToTestDiv() {
    const divElement = document.getElementById("contact");
    divElement.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Navbar
        fontColor="#000"
        backgroundColor="#FBFAF5"
        brand={<img className="letra-principal" src={Letra} />}
        links={[{ text: "Contact me", link: "#contact" }]}
      />
      {/* <div className="seperator">
      </div> */}
      {/* <Navbar links={[{text: "Contact me", link: "#contact"}]}/> */}
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/#contact" component={Contact} />
      </Routes>
    </div>
  );
}

export default Nav;
