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
import classFeelings from "./ClassFeelings/ClassFeelings";

const ENDPOINT = "http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com/";

export default function MainContainer({ initialData, isTrainer }) {

  const [loading, setLoading]= useState(true);

  const [profileData] = useState({
    name: `${initialData.firstName} ${initialData.lastName}`,
    location: initialData.location,
    bootcamp: initialData.training.trainingName,
    trainer: isTrainer,
    summary: initialData.summary
  });

  const [scheduleByTraining, setScheduleByTraining] = useState(scheduleByBootcamp);
  const [dailyScheduleData, setDailyScheduleData] = useState(currentSchedule);
  const [trainer] = useState(trainerById1);
  const [homeworks, setHomeworks] = useState(listHomework);
  const [students, setStudents] = useState(studentsByTraining);
  const [showEditProfile, setshowEditProfile] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false);
  const [showEditAgenda, setShowEditAgenda] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [classVotes, setClassVotes] = useState(votes)

  const trainers = ["Miguel Romero", "Juan Crisóstomo", "Angel Pantoja"];

  function handleSchedule(res) {
    const daily = res[0];
    setDailyScheduleData((prev) => ({
      ...prev,
      ...daily
    }));
    setScheduleByTraining((prev)=>({
      ...prev,
      ...res
    }));
  }

  function handleStudent(res) {
    setStudents((prev) => ({
      ...res
    }))
  }

  function getTraining(trainingId) {
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
        handleSchedule(response.data.content);
        setLoading(false);
      }))
      .catch(function (error) {
        console.log(error);
      });
  }

  function getStudentsByTraining(trainingId){
    let config = {
      method: 'get',
      url: `${ENDPOINT}/student/filter_by/training/${trainingId}`,
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      }
    };

    axios(config)
      .then(((response) => {
        handleStudent(response.data.content);
      }))
      .catch(function (error) {
        console.log(error);
      });
  }

  function getClassFeelings(scheduleId) {
    let config = {
      method: 'get',
      url: `${ENDPOINT}/schedule/votes/${scheduleId}`,
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      }
    };

    axios(config)
      .then(((response) => {
        const data = response.data.content;
        setClassVotes((prev) => ({
          ...data
        }));
      }))
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    const trainingId = 1;
    const scheduleId = dailyScheduleData.id;
    getTraining(trainingId);
    getStudentsByTraining(trainingId);
    getClassFeelings(scheduleId);
  }, [])
  
  function toggleEdit() {
    setIsEditable(!isEditable);
    editShowAgenda();
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

  function sendAgenda(data) {
    console.log(data);
  }

  console.log(classVotes);
  return (
    !loading ?
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
              classVotes={classVotes}
              isTrainer={isTrainer}
              dailyScheduleData={dailyScheduleData}
            />
          </div>
        </div>
      </div>
      <ModalContainer
        children={<EditarPerfil 
          profileData = {profileData} 
        />}
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
            schedule={scheduleByTraining}
            isEditable={isEditable}
            toggleEdit={toggleEdit}
            trainers={trainers}
            handlePrimary={(data)=>sendAgenda(data)}
          />
        }
        show={showAgenda}
        handleClose={handleShowAgenda}
        primaryBtnName={showEditAgenda ? "Guardar" : ""}
        secondaryBtnName={"Cerrar"}
      />
    </div>
    : <h2>Loading...</h2>
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
