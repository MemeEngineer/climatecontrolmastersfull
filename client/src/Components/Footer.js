import React from "react";
import { Slide } from "react-slideshow-image";

function Footer() {
  const slideImages = [
    "TRANE.jpg",
    "rheem.png",
    "Carrier.png",
    "Goodman.jpg"

  ];
  return (
    <div>
      
<div>
  <h1 style={{display:'flex', justifyContent: 'center', color: 'white'}}> Brands We Trust</h1>
        <Slide easing="ease">
          <div className="each-slide" style={{display: "flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`, height: "300px", width: "300px"}}>
            </div>
            <span>Trane</span>
          </div>
          <div className="each-slide" style={{display: "flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height: "300px", width: "300px", display: "flex", alignItems: "center"}}>
            </div>
            <span>Rheem</span>
          </div>
          <div className="each-slide" style={{display: "flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height: "300px", width: "800px", display: "flex", alignItems: "center"}}>
            </div>
            <span>Carrier</span>
          </div>
          <div className="each-slide" style={{display: "flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{'backgroundImage': `url(${slideImages[3]})`,height: "300px", width: "800px", display: "flex", alignItems: "center"}}>
            </div>
            <span>Goodman</span>
          </div>
        </Slide>
      </div>
      <div id="wrapper" style={{backgroundColor: "white"}}>
<div id="foot">
  <h3>Address:</h3>
  <p>Climate Control Masters</p>
  <p>120 Promenade Rd</p>
  <p>Batesburg SC 29006</p>
  <br></br>
<p>Phone: (803) 317-5809 </p>
<br></br>
<p>Opening Times: </p>
<p>Mon - Sun: 8 am - 7 pm </p>
<p>Emergency Service Available</p>
</div>

<div id="foot">
<h3>Service Area </h3> 
<li>Batesburg</li>
<li>Lexington</li>
<li>Gilbert</li>
<li>Saluda</li>
<li>Edgefield</li>
<li>Aiken</li>
</div>

<div id="foot">
  <h3>HVAC Services</h3>
  <li>HVAC Installation</li>
  <li>HVAC Replacement</li>
  <li>AC Repair</li>
  <li>AC Service</li>
  <li>Heater Repair</li>
  <li>Heater Service</li>
  <li>Air Duct Cleaning</li>
</div>

</div>
    </div>
  );
}

export default Footer;