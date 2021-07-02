import React, { useState } from "react";
import PropTypes from "prop-types";
import "./dailyclasssurvey-styles.css";

export default function DailyClassSurvey(props) {
  const { dailyScheduleData } = props;
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="dailyClassSurvey__contentTop">
        <h1>
          Día {dailyScheduleData.day} - {dailyScheduleData.topic} Survey
        </h1>
      </div>
      <div className="dailyClassSurvey__contentBottom">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/thumb-up.svg"}
          alt="thumbs-up"
          onClick={() => setCount(count + 1)}
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/img/thumb-down.svg"}
          alt="thumbs-down"
          onClick={() => setCount(count - 1)}
        />
      </div>
      {count !== 0 && (
        <>
          <div className="voteDone">
            <p>Gracias por votar!</p>
          </div>
        </>
      )}
    </>
  );
}

DailyClassSurvey.propTypes = {
  dailyScheduleData: PropTypes.shape({
    day: PropTypes.number,
    id: PropTypes.number,
    topic: PropTypes.string,
  }),
};
