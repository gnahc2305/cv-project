// import React, { Component } from "react";
import React from "react";

const Info = (props) => {
  const { name } = props;

  return (
    <div>
      <h1>{name}</h1>
      <ul>
        <p>Title</p>
        <p>Address</p>
        <p>Number</p>
        <p>Email</p>
        <p>Description</p>
      </ul>
    </div>
  );
};

export default Info
