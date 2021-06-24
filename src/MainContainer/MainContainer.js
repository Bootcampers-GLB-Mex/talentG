import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DailyClass from "./DailyClass/DailyClass";
import HomeworkFeedBack from "./HomeworkFeedback/HomeworkFeedback";
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";
import ClassFeelings from "./ClassFeelings/ClassFeelings";
export default function MainContainer() {
  const [isTrainer] = useState(true);

  return (
    <div>
      <Header />
      <DailyClass isTrainer={isTrainer} />
      {/* <HomeworkFeedBack /> */}
      {/* <DailyClassSurvey /> */}
      <ClassFeelings />
      <Footer />
    </div>
  );
}
