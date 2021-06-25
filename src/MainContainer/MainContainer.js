import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DailyClass from "./DailyClass/DailyClass";
import HomeworkFeedBack from "./HomeworkFeedback/HomeworkFeedback";
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";
import ClassFeelings from "./ClassFeelings/ClassFeelings";
import Button from "./button1/button";
import Card from "./Card/Card";

import "./MainContainer.css";

import { currentSchedule, trainerById1, votes } from "../sampleData";

export default function MainContainer() {
  const [dailyScheduleData] = useState(currentSchedule);
  const [isTrainer] = useState(true);
  const [trainer] = useState(trainerById1);
  const [classVotes] = useState(votes);

  return (
    <div className="MainContainer">
      <Card />
      <div className="DailyClass">
        <DailyClass
          isTrainer={isTrainer}
          dailyScheduleData={dailyScheduleData}
          trainer={trainer}
        />{" "}
      </div>
      <div className="HomeworkFeedBack">
        <HomeworkFeedBack />
      </div>
      <div className="ContainerButtons">
        <Button children="Editar Perfil"></Button>
        <Button children="Ver Agenda"></Button>
        <Button children="Ver Feedback"></Button>
      </div>
      <div className="DailyClassSurvey">
        <DailyClassSurvey dailyScheduleData={dailyScheduleData} />
      </div>
    </div>
  );
}
