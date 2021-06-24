import React from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DailyClass from './DailyClass/DailyClass';
import HomeworkFeedBack from './HomeworkFeedback/HomeworkFeedback';
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";
import Button from "./button1/button";

import "./MainContainer.css";

import { currentSchedule, trainerById1 } from '../sampleData';

export default function MainContainer() {

    const [dailyScheduleData] = useState(currentSchedule);
    const [isTrainer] = useState(true);
    const [trainer] = useState(trainerById1);

    return (
        <>
            <Header />
            <DailyClass
                isTrainer={isTrainer}
                dailyScheduleData={dailyScheduleData} 
                trainer = {trainer}/>
            <HomeworkFeedBack />
            <div className= "ContainerButtons">
                <Button children="Editar Perfil"></Button>
                <Button children="Ver Agenda"></Button>
                <Button children="Ver Feedback"></Button>
            </div>
            <DailyClassSurvey />
            <Footer />
        </>
    );
}
