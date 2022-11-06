import React, { Component } from "react";


class Info extends Component {
    constructor(prop) {
        super(prop)
    }


    render() {
        return (
            <div>
                <h1>Fulll Name</h1>
                <ul>
                    <p>Title</p>
                    <p>Address</p>
                    <p>Number</p>
                    <p>Email</p>
                    <p>Description</p>
                </ul>
            </div>
        )
    }
}

export default Info