import React, { Component } from "react";
import Info from "./components/info";
import Experience from "./components/experience";
import Education from "./components/education";
import "./style.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="info">
          <form>
            <h2>Personal Information</h2>
            <input type='text' placeholder="Full Name"></input>
            <input type='text' placeholder="Title"></input>
            <input type='text' placeholder="Address"></input>
            <input type='text' placeholder="Phone Number"></input>
            <input type='text' placeholder="Email"></input>
            <textarea placeholder="Description" rows='5' cols="30"></textarea>
            <button>Submit</button>
          </form>
        </div>


        <div>
          <form>
            <h2>Experience</h2>
            <input type='text' placeholder="Position"></input>
            <input type='text' placeholder="Company"></input>
            <input type='text' placeholder="From"></input>
            <input type='text' placeholder="To"></input>
            <button>Submit</button>
          </form>
        </div>


        <div>
          <form>
            <h2>Education</h2>
            <input type='text' placeholder="University"></input>
            <input type='text' placeholder="City"></input>
            <input type='text' placeholder="Degree"></input>
            <button>Submit</button>
          </form>
        </div>


        <div className="cv">


          <Info></Info>
          <Experience></Experience>
          <Education></Education>

        </div>


      </div>
    );
  }
}

export default App;
