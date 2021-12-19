import "../Css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "react-responsive-navbar-overlay";
import Home from "./Home";
import Contact from "./Contact";
import Letra from "../Assets/img/letra-mayus-azul-25medium.png";

function Nav() {

  function scrollToTestDiv(){
    const divElement = document.getElementById('contact');
    divElement.scrollIntoView({ behavior: 'smooth' });
  }

  // let text = "<span onClick={scrollToTestDiv}>/#contact </span>"

  return (
    <BrowserRouter>
      <Navbar fontColor="#000" backgroundColor="#fff" brand={<img onClick={scrollToTestDiv} className="letra-principal" src={Letra} />} links={[{text: "Contact me", link: "#contact"}]} />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/#contact" component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default Nav;
