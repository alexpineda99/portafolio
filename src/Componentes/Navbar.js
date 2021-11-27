import "../Css/index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navbar } from "react-responsive-navbar-overlay";
import Home from "./Home";
import Letra from "../Assets/img/letra-mayus-azul-25medium.png";

function Nav() {
  return (
    <BrowserRouter>
      <Navbar fontColor="#000" backgroundColor="#fff" brand={<img src={Letra} width="100%" height="50px" />} links={[{text: "Contact me", link: "/Contact"}]} />
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default Nav;
