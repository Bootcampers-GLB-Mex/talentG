import React, { useState } from "react";
import "./survey-styles.css";

import DailyClassSurvey from "../DailyClassSurvey/DailyClassSurvey";
import ClassFeelings from "../ClassFeelings/ClassFeelings";

// import TopicList from './TopicList';
// import ResourcesList from './ResourcesList';

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
          <DailyClassSurvey
            isTrainer={isTrainer}
            dailyScheduleData={dailyScheduleData}
          />
        </>
      )}
    </section>
  );
}
