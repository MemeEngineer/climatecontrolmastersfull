import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  textAlign: "center",
  inlineSize: "150px",
  justifyContent: "center",
  marginTop: "10px",
};

function NavBar() {
  return (
    <div style={{display: "flex",justifyContent: "center"}}>
      <NavLink
        to="/home"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange", 
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/schedule-service"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange",
        }}
      >
        Schedule Service
      </NavLink>
    </div>
  );
}

export default NavBar;