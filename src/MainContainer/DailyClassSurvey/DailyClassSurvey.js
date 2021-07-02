import React, { useState } from "react";
import PropTypes from "prop-types";
import thumbUp from "../../img/thumb-up.svg";
import thumbDown from "../../img/thumb-down.svg";
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
          src={thumbUp}
          alt="thumbs-up"
          onClick={() => setCount(count + 1)}
        />
        <img
          src={thumbDown}
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
