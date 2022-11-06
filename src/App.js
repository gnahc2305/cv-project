import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <h2>Personal Information</h2>
            <input type='text' placeholder="Full Name"></input>
            <input type='text' placeholder="Title"></input>
            <input type='text' placeholder="Address"></input>
            <input type='text' placeholder="Phone Number"></input>
            <input type='text' placeholder="Email"></input>
            <textarea placeholder="Description" rows='5' cols="30"></textarea>
          </form>
        </div>


        <div>
          <form>
            <h2>Experience</h2>
            <input type='text' placeholder="Position"></input>
            <input type='text' placeholder="Company"></input>
            <input type='text' placeholder="From"></input>
            <input type='text' placeholder="To"></input>
          </form>
        </div>


        <div>
          <form>
            <h2>Education</h2>
            <input type='text' placeholder="University"></input>
            <input type='text' placeholder="City"></input>
            <input type='text' placeholder="Degree"></input>
          </form>
        </div>


        <div className="cv">
        </div>


      </div>
    );
  }
}

export default App;
