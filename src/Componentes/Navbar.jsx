import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Navbar } from "react-responsive-navbar-overlay";
import Home from "./Home";
import Contact from "./Contact";
import Letra from "../Assets/img/letra-mayus-azul-25medium.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Nav() {
  let location = useLocation();

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
    <>
      <Navbar
        fontColor="#000"
        backgroundColor="#FBFAF5"
        brand={<LazyLoadImage effect="blur" className="letra-principal" alt="letter img" src={Letra} />}
        links={[{ text: "Contact me", link: "#contact" }]}
      />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/#contact" component={Contact} />
      </Routes>
    </>
  );
}

export default Nav;
