import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from  "./Components/About";
import ScheduleService from "./Components/ScheduleService";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jobpage from "./Components/Jobpage";
import './App.css';

function App() {

 const [jobs, setJobs] = useState([]);
 const [newJobs, setNewJobs] = useState([]);



 //Fetch Data from backend
 const getjobs = () => {
  fetch(`/jobs`)
    .then((response) => response.json())
    .then((data) => setJobs(data));
};

useEffect(() => {
  getjobs();
}, []);


//Adding new job from Form
const uploadJob= (formData) => {
  // console.log(formData);
  // // formData.servicejob = formData.servicejob.split(",");
  // console.log(formData.servicejob);
  fetch(`/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((newJobs) => setNewJobs([...jobs, newJobs]));
};

  return (
    <div>
    <Login />
    <Header />
    <NavBar />
    
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>

         <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/schedule-service">
          <ScheduleService uploadJob={uploadJob}/>
        </Route> 

        <Route exact path="/jobpage">
          <Jobpage newJobs={newJobs} />
        </Route>
      </Switch>

      <Footer/>
      </div>
  );
}

export default App;
