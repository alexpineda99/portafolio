import Mehey from "../Assets/img/bitmoji-20211123014412-removebg-preview.png";
import Nav from "./Navbar";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  return (
    <div className="main">
      <Nav />
      <Box >
      <Grid container >
        <Grid xs={6} sx={{display: "flex", justifyContent: "center"}}>
        <Box className="principal-1">
          <p className="principal-text-line1 glitch"> <span aria-hidden="true">Hi</span> Hi <span aria-hidden="true">Hi</span> </p>
          <p className="principal-text-line2 glitch"> <span aria-hidden="true">I am</span> I am <span aria-hidden="true">I am</span> </p>
          <p className="principal-text-line3 glitch"> <span aria-hidden="true">Alex</span> Alex <span aria-hidden="true">Alex</span> </p>
        </Box>
        </Grid >
        <Grid xs={6} sx={{display: "flex", justifyContent: "center", textAlign: "center"}}>
        <LazyLoadImage src={Mehey} className="bit-img" alt="Greetings" width={"200px"} height={"200px"} effect="blur" />
        </Grid>
      </Grid>
    </Box>
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
