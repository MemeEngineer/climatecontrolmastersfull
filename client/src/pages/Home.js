import React from "react";
//import ccmlogo from "./ccmlogo.jpeg";
import "react-slideshow-image/dist/styles.css";
// import trane from "./trane.jpg";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "ccmlogo.jpeg",
  "airrepair.jpg",
  "airservice.jpg",
  "airinstallation.jpg",
];
function Home() {
  return (
    //     <div>
    //       <img src={ccmlogo} alt= "ccmlogo" style={{height: "100%", width: "100%"}}/>
    // </div>
    <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
            <span>ClimateControlMasters</span>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
            <span>Air Repair</span>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
            <span>Air Service </span>
          </div>
        </Slide>
      </div>
  );
}

export default Home;
