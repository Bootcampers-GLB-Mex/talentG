import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import DailyClass from "./DailyClass/DailyClass";
import ListContainer from "./ListContainer/ListContainer";
import Survey from "./Survey/Survey";
import Button from "./button1/button";
import Card from "./Card/Card";
import ModalContainer from "../ModalContainer/ModalContainer";
import EditarPerfil from "../EditProfile/EditarPerfil";
import AgendaModal from "../AgendaModal/AgendaModal";

import "./MainContainer.css";

import {
  currentSchedule,
  trainerById1,
  listHomework,
  studentsByTraining,
  votes,
  scheduleByBootcamp,
} from "../sampleData";

const ENDPOINT = "http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com/";

export default function MainContainer({ initialData, isTrainer }) {

  const [profileData] = useState({
    name: `${initialData.firstName} ${initialData.lastName}`,
    location: initialData.location,
    bootcamp: initialData.training.trainingName,
    trainer: isTrainer
  });
  const [dailyScheduleData, setDailyScheduleData] = useState(currentSchedule);
  const [trainer] = useState(trainerById1);
  const [homeworks] = useState(listHomework);
  const [students] = useState(studentsByTraining);
  const [showEditProfile, setshowEditProfile] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false);
  const [showEditAgenda, setShowEditAgenda] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const trainers = ["Miguel Romero", "Juan Crisóstomo", "Angel Pantoja"];

  function handleSchedule(res) {
    setDailyScheduleData((prev) => ({
      ...prev,
      ...res
    }));
  }


  useEffect(() => {
    const trainingId = 1;
    let config = {
      method: 'get',
      url: `${ENDPOINT}/schedule/training/${trainingId}`,
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      }
    };

    axios(config)
      .then(((response) => {
        console.log(response.data.content[0]);
        handleSchedule(response.data.content[0])
      }))
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  console.log(dailyScheduleData);
  function toggleEdit(id, day, topic, summary) {
    setIsEditable(!isEditable);
    editShowAgenda();
    // console.log("Props: ", id, day, topic, summary);
    // editShowAgenda(id,day,topic,summary);
  }

  function handleEditProfile() {
    setshowEditProfile(!showEditProfile);
  }
  // function handleAgenda() {
  //   setShowAgenda(!showAgenda);

  // }

  function handleShowAgenda() {
    setShowAgenda(!showAgenda);
    if (showEditAgenda) {
      setIsEditable(false);
      setShowEditAgenda(false);
    }
  }

  function editShowAgenda() {
    setShowEditAgenda(!showEditAgenda);
  }

  return (
    <div className="MainContainer">
      <div className="MainContainer__left">
        <div className="CardContainer">
          <Card profileData={profileData} />
        </div>
        <div className="ContainerButtons">
          <Button
            children="Editar Perfil"
            handleEvent={handleEditProfile}
          ></Button>
          <Button children="Ver Agenda" handleEvent={handleShowAgenda}></Button>
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
      <ModalContainer
        children={<EditarPerfil />}
        show={showEditProfile}
        handlePrimary={() => alert("clicked editar perfil")}
        handleClose={handleEditProfile}
        primaryBtnName={"Guardar"}
        secondaryBtnName={"Cerrar"}
      />
      <ModalContainer
        children={
          <AgendaModal
            isTrainer={isTrainer}
            schedule={scheduleByBootcamp}
            isEditable={isEditable}
            toggleEdit={toggleEdit}
            trainers={trainers}
          />
        }
        show={showAgenda}
        handleClose={handleShowAgenda}
        primaryBtnName={showEditAgenda ? "Guardar" : ""}
        secondaryBtnName={"Cerrar"}
      />
    </div>
  );
}

/* <ModalContainer
      children={<EditarPerfil />}
      show={showEditProfile}
      handlePrimary={() => alert("clicked editar perfil")}
      handleClose={handleEditProfile}
      primaryBtnName={"Guardar"}
      secondaryBtnName={"Cerrar"}
    />
    <ModalContainer
      children={
        <AgendaModal
          isTrainer={isTrainer}
          schedule={scheduleByBootcamp}
          isEditable={isEditable}
          toggleEdit={toggleEdit}
          trainers={trainers}
        />}
      show={showAgenda}
      handleClose={handleShowAgenda}
      primaryBtnName={showEditAgenda ? "Guardar" : ""}
      secondaryBtnName={"Cerrar"}
    /> */
