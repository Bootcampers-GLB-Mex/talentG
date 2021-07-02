import React, { useState } from "react";
import "./Card.css";

function Card({profileData}) {
  const [firstName] = useState(profileData.firstName);
  const [lastName] = useState(profileData.lastName);
  const [job] = useState(profileData.trainer? "Trainer" : "Student");
  const [boot] = useState("Bootcamp");
  const [area] = useState(profileData.bootcamp);
  const [location] = useState("Localidad");
  const [loc] = useState(profileData.location);

  return (
    <div className="card__container">
      <div className="card__upperContainer">
        <div className="img__cardContainer">
          <img className="img__card"scr=" " alt="" height="100px" width="100px" />
        </div>
      </div>

      <div className="card__lowerContainer">
        <h2 className="name__lowerContainer"> {firstName} {lastName}</h2>
        <h4 className="job__lowerContainer"> {job} </h4>
        <h3 className="subtitle__lowerContainer" >
          <span>{boot}</span> <span>{location}</span>
        </h3>
        <p className="location__lowerContainer">
          <span> {area} </span> <span>{loc}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
