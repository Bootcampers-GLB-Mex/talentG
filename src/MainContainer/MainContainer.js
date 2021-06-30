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
import Feedback from "./Feedback/Feedback";

import "./MainContainer.css";

import {
  currentSchedule,
  trainerById1,
  listHomework,
  studentsByTraining,
  votes,
  scheduleByBootcamp,
} from "../sampleData";

const ENDPOINT =
  "http://proyectofinalbootcamp-env.eba-nmb4rsib.us-east-2.elasticbeanstalk.com/";

export default function MainContainer({ initialData, isTrainer }) {
  const [loading, setLoading] = useState(true);

  const [profileData] = useState({
    firstName: initialData.firstName,
    lastName: initialData.lastName,
    location: initialData.location,
    bootcamp: initialData.training.trainingName,
    trainer: isTrainer,
    summary: initialData.summary,
  });

  const [scheduleByTraining, setScheduleByTraining] = useState(
    scheduleByBootcamp
  );
  const [dailyScheduleData, setDailyScheduleData] = useState(currentSchedule);
  const [trainer] = useState(trainerById1);
  const [homeworks] = useState(listHomework);
  const [students, setStudents] = useState(studentsByTraining);
  const [showEditProfile, setshowEditProfile] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false);
  const [showEditAgenda, setShowEditAgenda] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [classVotes, setClassVotes] = useState(votes);
  const [updatedProfile, setUpdatedProfile] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isEditFeedback, setIsEditFeedback] = useState(false);

  const trainers = ["Miguel Romero", "Juan Crisóstomo", "Angel Pantoja"];

  function handleSchedule(res) {
    const daily = res[0];
    setDailyScheduleData((prev) => ({
      ...prev,
      ...daily,
    }));
    setScheduleByTraining((prev) => ({
      ...prev,
      ...res,
    }));
  }

  function getTraining(trainingId) {
    let config = configAxios("get", "/schedule/training/", trainingId);

    axios(config)
      .then((response) => {
        handleSchedule(response.data.content);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getStudentsByTraining(trainingId) {
    let config = configAxios("get", "/student/filter_by/training/", trainingId);

    axios(config)
      .then((response) => {
        const students = response.data.content;
        setStudents((prev) => ({
          ...students,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getClassFeelings(scheduleId) {
    let config = configAxios("get", "/schedule/votes/", scheduleId);
    axios(config)
      .then((response) => {
        const data = response.data.content;
        setClassVotes((prev) => ({
          ...data,
        }));
      })
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
  }, []);

  function toggleEdit() {
    setIsEditable(!isEditable);
    editShowAgenda();
  }

  function handleEditProfile() {
    setshowEditProfile(!showEditProfile);
  }
  

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

  function toggleEditFeedback() {
    setIsEditFeedback(!isEditFeedback);
    // setShowFeedback(!showFeedback);
  }

  function handleShowFeedback() {
    // Cierra panel de edicion de feedback
    setShowFeedback(!showFeedback);
    // setIsEditFeedback(!isEditFeedback);
    //Despliega lista estudiantes
    // if (showEditAgenda) {
    //   setIsEditFeedback(false);
    //   setShowEditAgenda(false);
    // }
  }

  function sendAgenda(data) {
    console.log(data);
  }

  function configAxios(methodVerb, endpoint, param) {
    return {
      method: methodVerb,
      url: `${ENDPOINT}${endpoint}${param}`,
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
    };
  }

  function updateProfile(name, lastName, textValue ) {
    const payload = {
      id: initialData.id,
      firstName: name, 
      lastName: lastName, 
      email: initialData.email,
      location: initialData.location,
      summary: textValue,
      urlImage: initialData.urlImage,
      training: {
        id: initialData.training.id,
        trainingName: initialData.training.trainingName,
        status: initialData.training.status,
        initialDate: initialData.training.initialDate,
        finalDate: initialData.training.finalDate,
      },
      status: initialData.status,
    };
    console.log(payload);
  }

  function handleDataNewProfile (name, lastName, textValue ){
    setUpdatedProfile(name, lastName, textValue);
    console.log(updatedProfile);
  }

  return !loading ? (
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
          <Button children="Ver Feedback" handleEvent={handleShowFeedback}></Button>
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
        children={<EditarPerfil profileData={profileData} handleNewData =
          {(name, lastName, textValue)=>(()=>handleDataNewProfile(name, lastName, textValue))} />}
        show={showEditProfile}
        handlePrimary={(newProfile) => updateProfile(newProfile)}
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
            handlePrimary={(data) => sendAgenda(data)}
          />
        }
        show={showAgenda}
        handleClose={handleShowAgenda}
        primaryBtnName={showEditAgenda ? "Guardar" : ""}
        secondaryBtnName={"Cerrar"}
      />
      <ModalContainer
        children={
          <Feedback
            isTrainer={isTrainer}
            schedule={scheduleByBootcamp}
            homeworkList={homeworks}
            students={students}
            isEdit={isEditFeedback}
            toggleEditFeed={toggleEditFeedback}
          />
        }
        show={showFeedback}
        handleClose={handleShowFeedback}
        primaryBtnName={""}
        secondaryBtnName={"Cerrar"}
      />
    </div>
  ) : (
    <h2>Loading...</h2>
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
