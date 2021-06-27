<<<<<<< HEAD
import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DailyClass from "./DailyClass/DailyClass";
import HomeworkFeedBack from "./HomeworkFeedback/HomeworkFeedback";
=======
import React from 'react';
import { useState } from 'react';
import DailyClass from './DailyClass/DailyClass';
import ListContainer from './ListContainer/ListContainer';
>>>>>>> b1075c565750c4d59931f00b9245fdb55c3f92e8
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";
import ClassFeelings from "./ClassFeelings/ClassFeelings";
import Button from "./button1/button";
import Card from "./Card/Card";
import ModalContainer from "../ModalContainer/ModalContainer";
import EditarPerfil from "./button1/EditarPerfil";


import "./MainContainer.css";

<<<<<<< HEAD
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
=======
import { currentSchedule, trainerById1, listHomework, studentsByTraining } from '../sampleData';


export default function MainContainer() {
    const [dailyScheduleData] = useState(currentSchedule);
    const [isTrainer] = useState(false);
    const [trainer] = useState(trainerById1);
    const [homeworks] = useState(listHomework);
    const [students] = useState(studentsByTraining);
    const [showEditProfile, setshowEditProfile] = useState(false);
    function handleEditProfile() {
        setshowEditProfile(!showEditProfile);
    }


    return (
        <div className="MainContainer">
            <Card />
            <div className="DailyClass">
                <DailyClass
                    isTrainer={isTrainer}
                    dailyScheduleData={dailyScheduleData}
                    trainer={trainer} /> </div>
            <div className="ListContainer">
                <ListContainer
                    isTrainer={isTrainer}
                    homeworks={homeworks}
                    students={students} /></div>
            <div className="ContainerButtons">
                <Button children="Editar Perfil" onClick={handleEditProfile}></Button>
                <Button children="Ver Agenda"></Button>
                <Button children="Ver Feedback"></Button>
            </div>
            <ModalContainer
                children={<EditarPerfil />}
                show={showEditProfile}
                handlePrimary={() => alert("clicked editar perfil")}
                handleClose={handleEditProfile}
                primaryBtnName={"Guardar"}
                secondaryBtnName={"Cerrar"}
            />
            <div className="DailyClassSurvey"><DailyClassSurvey /></div>
        </div>
    );
>>>>>>> b1075c565750c4d59931f00b9245fdb55c3f92e8
}


