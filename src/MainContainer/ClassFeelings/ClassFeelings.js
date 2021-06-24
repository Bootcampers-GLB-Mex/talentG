import React, { useState } from "react";
import "./classFeelings-styles.css";

export default function classFeelings() {
  // State temporal
  //   const [count, setCount] = useState(0);
  return (
    <>
      <section className="classFeelings-container">
        <div className="feelings-info">
          <span>Sentimientos de la clase</span>
          <span>22 votos</span>
        </div>
        <div className="feelings-percentage">
          <div className="feelings-percentage__chart">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/happy_face.svg"}
              alt="happy-face"
            />
            <h1>90%</h1>
          </div>
          <div className="feelings-percentage__chart">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/sad_face.svg"}
              alt="sad-face"
            />
            <h1>10%</h1>
          </div>
        </div>
      </section>
    </>
  );
}
