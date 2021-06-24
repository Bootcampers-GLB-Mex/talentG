import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DailyClass from "./DailyClass/DailyClass";
import HomeworkFeedBack from "./HomeworkFeedback/HomeworkFeedback";
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";
import ClassFeelings from "./ClassFeelings/ClassFeelings";

import { currentSchedule, trainerById1, votes } from "../sampleData";

export default function MainContainer() {
  const [dailyScheduleData] = useState(currentSchedule);
  const [isTrainer] = useState(true);
  const [trainer] = useState(trainerById1);
  const [classVotes] = useState(votes);

  return (
    <>
      <Header />
      <DailyClass
        isTrainer={isTrainer}
        dailyScheduleData={dailyScheduleData}
        trainer={trainer}
      />
      {/* <HomeworkFeedBack /> */}
      {/* <DailyClassSurvey dailyScheduleData={dailyScheduleData} /> */}
      <ClassFeelings classVotes={classVotes} />
      <Footer />
    </>
  );
}
