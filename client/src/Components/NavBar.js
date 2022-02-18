import React from "react";
import { NavLink, useHistory  } from "react-router-dom";

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

function NavBar({user, setUser}) {

  let history = useHistory();

function handleClick(){
    history.push("/home");
}

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);

      }
    });
  }
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

      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "orange",
        }}
        onClick={()=>handleClick()}
      >
       Profile
      </NavLink>
    </div>
  );
}

export default NavBar;