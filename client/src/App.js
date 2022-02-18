import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";
import About from  "./pages/About";
import ScheduleService from "./pages/ScheduleService";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jobpage from "./Components/Jobpage";
import Login from "./pages/Login";
import './App.css';

function App() {

 const [jobs, setJobs] = useState([]);
 const [newJobs, setNewJobs] = useState([]);



 //Fetch Data from backend
 const getjobs = () => {
  fetch("/jobs")
    .then((response) => response.json())
    .then((data) => setJobs(data));
};
console.log(jobs)
useEffect(() => {
  getjobs();
},[]);


//Adding new job from Form
const uploadJob= (formData) => {
   console.log(formData);
  // // formData.servicejob = formData.servicejob.split(",");
  // console.log(formData.servicejob);
  fetch("/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((newJobs) => setNewJobs([...jobs, newJobs]));
};
const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      
    <Header />
    <NavBar user={user} setUser={setUser} />
    <main>
      <Switch>

      <Route exact path= "/">
      <LoginForm/>
        </Route>
        
        <Route exact path="/home">
          <Home />
        </Route>

         <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/schedule-service">
          <ScheduleService uploadJob={uploadJob} user={user}/>
        </Route> 

        <Route exact path="/jobpage">
          <Jobpage newJobs={newJobs} />
        </Route>
      
      </Switch>

      <Footer/>
      </main>
      </>
  );
}

export default App;
