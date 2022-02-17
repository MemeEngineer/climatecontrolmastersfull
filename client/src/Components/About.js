import React from "react";
import aboutimg from "./aboutimg.jpg"

function About() {

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
<h1 style={{color: "black"}}>Reliable HVAC Professionals</h1>
<p style={{display: "flex", flexWrap: "wrap", width:"800px"}}>Whether you need a maintenance check or an emergency repair on a heating or cooling unit, we are available to handle  all of your all of your heating, cooling, and ventilation needs.  We strive to exceed your expectations by ensuring that each of our clients receives individualized service. </p>
<h2>Individualized HVAC Options</h2>
<p style={{display: "flex", flexWrap: "wrap", width:"800px"}}>We will work with you to find HVAC solutions that fit your heating and cooling needs. We will provide you with a full consultation to explain all of your available options so that you can choose the system that’s right for your home or business.</p>
<h2>Customer Satisfaction Guaranteed</h2>
<p style={{display: "flex", flexWrap: "wrap", width:"800px"}}>We serve both residential and commercial clients and offer a variety of money-saving solutions. We combine our use of the highest quality parts and equipment, and our dedication to delivering  exceptional service to provide you with top quality service. With a 1 year craftsmanship warranty included with all services.</p>
<img src={aboutimg} alt="aboutus" style={{display:"flex", height: "300px", width:"500px"}}/>
    </div>

    
    </div>
  );
}

export default About;