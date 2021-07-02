import React from "react";
import PropTypes from "prop-types";
import "./survey-styles.css";

import DailyClassSurvey from "../DailyClassSurvey/DailyClassSurvey";
import ClassFeelings from "../ClassFeelings/ClassFeelings";

export default function Survey(props) {
  const { isTrainer, dailyScheduleData, classVotes } = props;

  return (
    <section className="surveyContainer">
      {isTrainer && (
        <>
          <ClassFeelings classVotes={classVotes} />
        </>
      )}
      {!isTrainer && (
        <>
          <DailyClassSurvey dailyScheduleData={dailyScheduleData} />
        </>
      )}
    </section>
  );
}

Survey.propTypes = {
  isTrainer: PropTypes.bool,
  dailyScheduleData: PropTypes.shape({
    day: PropTypes.number,
    id: PropTypes.number,
    topic: PropTypes.string,
  }),
  classVotes: PropTypes.shape({
    totalVotes: PropTypes.number,
    like: PropTypes.number,
    dislike: PropTypes.number,
  }),
};
