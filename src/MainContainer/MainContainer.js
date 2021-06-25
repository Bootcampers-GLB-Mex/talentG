import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DailyClass from "./DailyClass/DailyClass";
import HomeworkFeedBack from "./HomeworkFeedback/HomeworkFeedback";
import Survey from "./Survey/Survey";
import Button from "./button1/button";

import "./MainContainer.css";

import { currentSchedule, trainerById1, votes } from "../sampleData";

export default function MainContainer() {
  const [dailyScheduleData] = useState(currentSchedule);
  const [isTrainer] = useState(false);
  const [trainer] = useState(trainerById1);
  const [classVotes] = useState(votes);

  return (
    <>
      <Header />
      {/* <DailyClass
        isTrainer={isTrainer}
        dailyScheduleData={dailyScheduleData}
        trainer={trainer}
      /> */}
      {/* <HomeworkFeedBack /> */}
      <div className="ContainerButtons">
        <Button children="Editar Perfil"></Button>
        <Button children="Ver Agenda"></Button>
        <Button children="Ver Feedback"></Button>
      </div>
      {/* <HomeworkFeedBack /> */}
      <Survey
        isTrainer={isTrainer}
        dailyScheduleData={dailyScheduleData}
        classVotes={classVotes}
      />
      {/* <ClassFeelings classVotes={classVotes} /> */}
      <Footer />
    </>
  );
}
