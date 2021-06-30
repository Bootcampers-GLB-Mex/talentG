import React, { useState } from "react";
import "./Card.css";

function Card({profileData}) {
  const [name] = useState(profileData.name);
  const [job] = useState(profileData.trainer? "Trainer" : "Student");
  const [boot] = useState("Bootcamp");
  const [area] = useState(profileData.bootcamp);
  const [location] = useState("Localidad");
  const [loc] = useState(profileData.location);

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
          <span>{boot}</span> <span>{location}</span>
        </h3>
        <p>
          <span> {area} </span> <span>{loc}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
