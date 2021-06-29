import React from "react";
import { useState } from "react";
import DailyClass from "./DailyClass/DailyClass";
import ListContainer from "./ListContainer/ListContainer";
import Survey from "./Survey/Survey";
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";
import ClassFeelings from "./ClassFeelings/ClassFeelings";
import Button from "./button1/button";
import Card from "./Card/Card";
import ModalContainer from "../ModalContainer/ModalContainer";
import EditarPerfil from "./button1/EditarPerfil";
import AgendaModal from "../AgendaModal/AgendaModal";

import "./MainContainer.css";

import {
  currentSchedule,
  trainerById1,
  listHomework,
  studentsByTraining,
  votes,
} from "../sampleData";

export default function MainContainer() {
  const [dailyScheduleData] = useState(currentSchedule);
  const [isTrainer] = useState(true);
  const [trainer] = useState(trainerById1);
  const [homeworks] = useState(listHomework);
  const [students] = useState(studentsByTraining);
  const [showEditProfile, setshowEditProfile] = useState(false);
  const [showAgenda, setshowAgenda] = useState(false);
  function handleEditProfile() {
    setshowEditProfile(!showEditProfile);
  }
  function handleAgenda() {
    setshowAgenda(!showAgenda);
  }

  return (
    <div className="MainContainer">
      <div className="MainContainer__left">
        <div className="CardContainer">
          <Card />
        </div>
        <div className="ContainerButtons">
          <Button children="Editar Perfil" onClick={handleEditProfile}></Button>
          <Button children="Ver Agenda"></Button>
          <Button children="Ver Feedback"></Button>
        </div>
      </div>
      <div className="MainContainer__right">
        <div className="DailyClass">
          <DailyClass
            isTrainer={isTrainer}
            dailyScheduleData={dailyScheduleData}
            trainer={trainer}
          />
        </div>
        <div className="BottomContainer">
          <div className="ListContainer">
            <ListContainer
              isTrainer={isTrainer}
              homeworks={homeworks}
              students={students}
            />
          </div>
          <div className="DailyClassSurvey">
            <Survey
              classVotes={votes}
              isTrainer={isTrainer}
              dailyScheduleData={dailyScheduleData}
            />
          </div>
        </div>
      </div>
      {/* <Card />
      <div className="DailyClass">
        <DailyClass
          isTrainer={isTrainer}
          dailyScheduleData={dailyScheduleData}
          trainer={trainer}
        />
      </div>
      <div className="ListContainer">
        <ListContainer
          isTrainer={isTrainer}
          homeworks={homeworks}
          students={students}
        />
      </div>
      <div className="ContainerButtons">
        <Button children="Editar Perfil" onClick={handleEditProfile}></Button>
        <Button children="Ver Agenda" onClick={handleAgenda}></Button>
        <Button children="Ver Feedback"></Button>
      </div>
      <ModalContainer
        children={<AgendaModal />}
        show={showAgenda}
        handlePrimary={() => alert("clicked editar perfil")}
        handleClose={handleAgenda}
        primaryBtnName={"Guardar"}
        secondaryBtnName={"Cerrar"}
      />
      <ModalContainer
        children={<EditarPerfil />}
        show={showEditProfile}
        handlePrimary={() => alert("clicked editar perfil")}
        handleClose={handleEditProfile}
        primaryBtnName={"Guardar"}
        secondaryBtnName={"Cerrar"}
      />
      <div className="DailyClassSurvey">
        <Survey
          classVotes={votes}
          isTrainer={isTrainer}
          dailyScheduleData={dailyScheduleData}
        />
      </div> */}
    </div>
  );
}
