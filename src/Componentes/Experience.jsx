import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { experiences } from "../Assets/Json info/info";
import JSConfetti from "js-confetti";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function Experience() {
  const { ref: divref, inView: Elementvisible } = useInView({
    triggerOnce: true,
  });
  const jsConfetti = new JSConfetti();

  useEffect(() => {}, [Elementvisible]);

  return (
    <>
      <Grid
        ref={divref}
        container
        direction="row"
        className={Elementvisible ? "div-experience" : ""}
      >
        {experiences.map((experience, i) => (
          <Grid key={i} item xs={12} sm={6} md={6} lg={4} mb={2}>
            <Box className="experience-div">
              <Link
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage 
                    src={experience.img}
                    className="experience-img"
                    alt="fortnite page"
                    width={"100%"}
                    height={"200px"}
                    effect="blur"
                />

              </Link>
              <span> {experience.status} </span>
              <span> {experience.location} </span>
              <span> {experience.charge} </span>
              <span> {experience.tools} </span>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Experience;
