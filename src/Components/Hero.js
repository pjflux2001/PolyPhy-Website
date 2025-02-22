import React from "react";
import { Grid, Link } from "@mui/material";
import video from "../Assets/hero-video.webm";


const Hero = ({data}) => {
  
  return (
    <>
      <div className="hero">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="content">
              <h1>PolyPhy</h1>
              <div className="heading-underline"></div>
              {data?.length > 0 ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: data[0]?.Home.replaceAll("\n", "<br />"),
                  }}
                ></p>
              ) : (
                <p>
                  Structural Analysis of Cosmological Datasets via Interactive
                  Physarum Polycephalum Visualisation.
                  <br />
                  <br />
                  PolyPhy is an interactive tool to analyze intergalactic gas
                  and dark matter filaments (together known as 'Cosmic web')
                  using the Monte Carlo Physarum Machine (MCPM) algorithm
                  inspired by the foraging behavior of Physarum polycephalum
                  'slime mold'
                </p>
              )}

              <a href={process.env.PUBLIC_URL + "#about"}>Get Started {">"}</a>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div style={{ maxWidth: "600px" }}>
              <video
                className="video"
                src={video}
                width="100%"
                height="auto"
                autoPlay
                loop
                muted
              >
                <p>
                  Your browser doesn't support HTML5 video. Here is a{" "}
                  <a href={video}>link to the video</a> instead.
                </p>
              </video>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="cta-arrow-wrapper">
        <Link href={process.env.PUBLIC_URL + "#about"} underline="none">
          <div className="cta-arrow"></div>
        </Link>
      </div>
    </>
  );
};

export default Hero;
