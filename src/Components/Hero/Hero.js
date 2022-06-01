import React from "react";
import Avatar from "@mui/material/Avatar";
import SocialIcon from "../SocialIcon/SocialIcon";
import { Link } from "react-router-dom";



import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
} from "./HeroElements";
function Hero() {
  return (
    <>
    <div className="heroMain">
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, </h1>
            <h1>I'm <span style={{color:"orange"}}>Tabrez Alam</span></h1>
            <h5>Full Stack Web Developer</h5>
            <p style={{ fontWeight: "500" }}>I am from Siddharth Nagar, Utter Pradesh.</p>
            <p style={{ fontWeight: "500" }}>Phone - 9554445594</p>
            <p style={{ fontWeight: "500" }}>Email - tabrezalamyci1@gmail.com</p>
            <div className="download"    >
              <Link
              
                to="/files/Tabrez resume.pdf"
                className="btn btn--outline"
                target="_blank"
                download
              >
                Resume
              </Link>
            </div>
            {/* <div className="download">
              <a href={`mailto:shaikshakeerss123@gmail.com`}>
                <span type='button' className='btn btn--outline'>
                  Email me
                </span>
              </a>
            </div> */}

            <SocialIcon />
          </HeroLeft>
          <HeroRight>
            <Avatar
              alt="Remy Sharp"
              src="/images/tabrez.jpeg"
              sx={{ width: 300, height: 300 }}
            />
          </HeroRight>
        </HeroWrapper>
     
      </HeroContainer>
      
    </div>

    </>
  );
}

export default Hero;
