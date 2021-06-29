import React, { useState } from "react";
import "./Card.css";

function Card() {
  const [name, setName] = useState("Alejandra Gutiérrez");
  const [job, setJob] = useState("Student");
  const [boot, setBoot] = useState("Bootcamp");
  const [area, setArea] = useState("Web UI");
  const [birth, setBirth] = useState("Edad");
  const [age, setAge] = useState("24");

  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img scr=" " alt="" height="100px" width="100px" />
        </div>
      </div>

      <div className="lower-container">
        <h2> {name} </h2>
        <h4> {job} </h4>
        <h3>
          <span>{boot}</span> <span>{birth}</span>
        </h3>
        <p>
          <span> {area} </span> <span>{age}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
