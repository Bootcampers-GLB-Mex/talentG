import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import DailyClass from "./DailyClass/DailyClass";
import ListContainer from "./ListContainer/ListContainer";
import ListStudents from "./ListContainer/ListStudents";
import ListHomeworks from "./ListContainer/ListHomeworks";
import Survey from "./Survey/Survey";
import ButtonContainer from "./ButtonContainer/ButtonContainer";
import Card from "./Card/Card";
import ModalContainer from "../ModalContainer/ModalContainer";
import EditProfile from "../EditProfile/EditProfile";
import AgendaModal from "../AgendaModal/AgendaModal";
import Feedback from "./Feedback/Feedback";

import "./MainContainer.css";
import { api } from '../api/apiMock';
import { config } from '../api/endpoint';

export default function MainContainer({ initialData }) {

  const [loading, setLoading] = useState(true);

  const [dailyScheduleData, setDailyScheduleData] = useState(api.getCurrentSchedule());
  const trainingId = dailyScheduleData.trainingId || 1;
  const scheduleId = dailyScheduleData.id || 1;
  const [scheduleByTraining, setScheduleByTraining] =
    useState(api.getScheduleByBootCamp(1));
  const [homeworks] = useState(api.getListHomework());
  const [students, setStudents] = useState(api.getStudentsByTraing(1));
  const [classVotes, setClassVotes] = useState(api.getVotes());

  const [showEditProfile, setshowEditProfile] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false);
  const [showEditAgenda, setShowEditAgenda] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isEditFeedback, setIsEditFeedback] = useState(false);

  const isTrainer = initialData.trainer || true;
  const profileData = {
    firstName: initialData.firstName,
    lastName: initialData.lastName,
    location: initialData.location,
    bootcamp: initialData.training.trainingName,
    summary: initialData.summary,
  };
  const trainer = initialData.trainer || api.getTrainer(1);
  const trainers = initialData.trainers || api.getTrainers();

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
    axios(config.get("get", "/schedule/training/", trainingId))
      .then((response) => {
        handleSchedule(response.data.content);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getStudentsByTraining(trainingId) {
    axios(config.get("get", "/student/filter_by/training/", trainingId))
      .then((response) => {
        const students = response.data.content;
        setStudents(() => ({
          ...students,
        }))
      }).catch(function (error) {
        console.log(error);
      });
  }

  function getClassFeelings(scheduleId) {
    axios(config.get("get", "/schedule/votes/", scheduleId))
      .then((response) => {
        const data = response.data.content;
        setClassVotes(() => ({
          ...data,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
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
  }

  function handleShowFeedback() {
    setShowFeedback(!showFeedback);
  }

  function sendAgenda(data) {
    console.log(data);
  }

  function handleListItem(id) {
    setShowFeedback(true);
  }

  function handleHwFeedback(id) {
    setShowAgenda(true);
  }
  return !loading ? (
    <div className="MainContainer">
      <div className="MainContainer__left">
        <div className="CardContainer">
          <Card profileData={profileData} />
        </div>
        <div className="ContainerButtons">
          <ButtonContainer
            children="Editar Perfil"
            handleEvent={handleEditProfile}
          ></ButtonContainer>
          <ButtonContainer children="Ver Agenda" handleEvent={handleShowAgenda}></ButtonContainer>
          <ButtonContainer children="Ver Feedback" handleEvent={handleShowFeedback}></ButtonContainer>
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
            {isTrainer ?
              <ListContainer
                title="Mis alumnos"
                children={<ListStudents list={students} handleListItem={(id) => handleListItem(id)} />} />
              : <ListContainer
                title="Feedback"
                children={<ListHomeworks list={homeworks} handleHwFeedback={(id) => handleHwFeedback(id)} />}
              />
            }
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
        children={<EditProfile profileData={profileData} handleNewData=
          {(name, lastName, textValue) => (() =>
            console.log(name, lastName, textValue))
          } />}
        show={showEditProfile}
        handlePrimary={(newProfile) => console.log(newProfile)}
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
            schedule={scheduleByTraining}
            homeworkList={homeworks}
            students={students}
            isEdit={isEditFeedback}
            toggleEditFeed={toggleEditFeedback}
          />
        }
        show={showFeedback}
        handleClose={() => {
          handleShowFeedback();
          setIsEditFeedback(false);
        }}
        primaryBtnName={""}
        secondaryBtnName={"Cerrar"}
      />
    </div>
  ) : (
      <h2>Loading...</h2>
    );
}
