import React, { useState } from "react";
import "./dailyclasssurvey-styles.css";

export default function DailyClassSurvey() {
  // State temporal
  const [count, setCount] = useState(0);
  return (
    <section className="dailyClassSurvey">
      <div className="dailyClassSurvey__contentTop">
        {/* La info de H1 se va a capturar */}
        <h1>Día 1 - CSS Survey {count}</h1>
      </div>
      <div className="dailyClassSurvey__contentBottom">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/thumb-up.svg"}
          alt="thumbs-up"
          onClick={() => setCount(count + 1)}
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/img/thumb-down.svg"}
          alt="thumbs-up"
          onClick={() => setCount(count - 1)}
        />
      </div>
    </section>
  );
}
