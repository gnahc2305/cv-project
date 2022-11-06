import React, { Component } from "react";


class Experience extends Component {
    constructor(prop) {
        super(prop)
    }


    render() {
        return (
            <div>
            <h3>Experience:</h3>
            <ul>
              <p>Position</p>
              <p>Company</p>
              <p>From:</p>
              <p>To:</p>
            </ul>
          </div>
        )
    }
}

export default Experience