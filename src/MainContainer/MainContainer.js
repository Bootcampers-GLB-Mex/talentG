import React from 'react';
import { useState } from 'react';
import DailyClass from './DailyClass/DailyClass';
import HomeworkFeedBack from './HomeworkFeedback/HomeworkFeedback';
import DailyClassSurvey from "./DailyClassSurvey/DailyClassSurvey";
import Button from "./button1/button";
import Card from "./Card/Card";
import ModalContainer from "../ModalContainer/ModalContainer";
import EditarPerfil from "./button1/EditarPerfil";
import AgendaModal from '../AgendaModal/AgendaModal';


import "./MainContainer.css";

import { currentSchedule, trainerById1, scheduleByBootcamp } from '../sampleData';

export default function MainContainer() {

    const [dailyScheduleData] = useState(currentSchedule);
    const [isTrainer] = useState(true);
    const [trainer] = useState(trainerById1);
    const [showEditProfile, setshowEditProfile]= useState (false);
    const [showAgenda, setShowAgenda] = useState(false);
    const [showEditAgenda, setShowEditAgenda] = useState(false);

    const [isEditable, setIsEditable] = useState(false);

    function toggleEdit(id, day, topic, summary) {
        setIsEditable(!isEditable);
        editShowAgenda();
        console.log("Props: ", id, day, topic, summary);
        // editShowAgenda(id,day,topic,summary);
    }

    function handleEditProfile () {
        setshowEditProfile (!showEditProfile);
    }

    function handleShowAgenda() {
        setShowAgenda(!showAgenda);
        if(showEditAgenda) {
            setIsEditable(false);
            setShowEditAgenda(false);
        }
    }

    function editShowAgenda(){
        setShowEditAgenda(!showEditAgenda);
    }

    return (
        <div className="MainContainer">
            <Card/>
        <div className="DailyClass">
            <DailyClass
                isTrainer={isTrainer}
                dailyScheduleData={dailyScheduleData}
                trainer={trainer} /> </div>
            <div className="HomeworkFeedBack"><HomeworkFeedBack/></div>
            <div className="ContainerButtons">
                <Button children="Editar Perfil" onClick={handleEditProfile}></Button>
                <Button children="Ver Agenda" onClick={handleShowAgenda}></Button>
                <Button children="Ver Feedback"></Button>
            </div>
            <ModalContainer
                children={<EditarPerfil/>}
                show={showEditProfile}
                handlePrimary={() => alert("clicked editar perfil")}
                handleClose= {handleEditProfile}
                primaryBtnName={"Guardar"}
                secondaryBtnName={"Cerrar"}
            />
            <ModalContainer
                children={
                    <AgendaModal 
                        isTrainer = {isTrainer}
                        schedule = {scheduleByBootcamp}
                        isEditable = {isEditable}
                        toggleEdit = {toggleEdit}
                    />}
                show={showAgenda}
                handleClose={handleShowAgenda}
                primaryBtnName={showEditAgenda ? "Guardar" : ""}
                secondaryBtnName={"Cerrar"}
            />
            <div className="DailyClassSurvey"><DailyClassSurvey/></div>
        </div>
    );
}


