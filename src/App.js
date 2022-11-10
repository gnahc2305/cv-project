import React, { useState, useRef } from "react";
import Info from "./components/info";
import Experience from "./components/experience";
import Education from "./components/education";
import "./style.css";

const App = () => {
  const [info, setInfo] = useState({});
  const nameRef = useRef();

  function submitInfo(e) {
    e.preventDefault();
    const info = nameRef.current.value;

    // setInfo({

    // })
  }

  return (
    <div>
      <div className="info">
        <form>
          <h2>Personal Information</h2>
          <input
            type="text"
            placeholder="Full Name"
            ref={nameRef}
          ></input>
          <input type="text" placeholder="Title"></input>
          <input type="text" placeholder="Address"></input>
          <input type="text" placeholder="Phone Number"></input>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Description" rows="5" cols="30"></textarea>
          <button onClick={submitInfo}>Submit</button>
        </form>
      </div>

      <div>
        <form>
          <h2>Experience</h2>
          <input type="text" placeholder="Position"></input>
          <input type="text" placeholder="Company"></input>
          <input type="text" placeholder="From"></input>
          <input type="text" placeholder="To"></input>
          <button>Submit</button>
        </form>
      </div>

      <div>
        <form>
          <h2>Education</h2>
          <input type="text" placeholder="University"></input>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="Degree"></input>
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
};

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.information = {
//       name: "",
//       title: "",
//       address: "",
//       phone: "",
//       email: "",
//       description: "",
//     };

//     this.experience = {
//       position: "",
//       company: "",
//       from: "",
//       to: "",
//     };

//     this.education = {
//       university: "",
//       city: "",
//       degree: "",
//     };

//   }

//   handleChange = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   setInformation = (e) => {
//     e.preventDefault();
//     console.log(this.state.name);
//   };

//   render() {
//     return (
//       <div>
//         <div className="info">
//           <form>
//             <h2>Personal Information</h2>
//             <input
//               type="text"
//               placeholder="Full Name"
//               onChange={this.handleChange}
//               value={this.name}
//             ></input>
//             <input type="text" placeholder="Title"></input>
//             <input type="text" placeholder="Address"></input>
//             <input type="text" placeholder="Phone Number"></input>
//             <input type="text" placeholder="Email"></input>
//             <textarea placeholder="Description" rows="5" cols="30"></textarea>
//             <button onClick={this.setInformation}>Submit</button>
//           </form>
//         </div>

//         <div>
//           <form>
//             <h2>Experience</h2>
//             <input type="text" placeholder="Position"></input>
//             <input type="text" placeholder="Company"></input>
//             <input type="text" placeholder="From"></input>
//             <input type="text" placeholder="To"></input>
//             <button>Submit</button>
//           </form>
//         </div>

//         <div>
//           <form>
//             <h2>Education</h2>
//             <input type="text" placeholder="University"></input>
//             <input type="text" placeholder="City"></input>
//             <input type="text" placeholder="Degree"></input>
//             <button>Submit</button>
//           </form>
//         </div>

//         <div className="cv">
//           <Info name={this.information.name}></Info>
//           <Experience></Experience>
//           <Education></Education>
//         </div>
//       </div>
//     );
//   }
// }
