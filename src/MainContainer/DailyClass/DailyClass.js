import PropTypes from 'prop-types';
import { useState } from 'react';

import TopicList from './TopicList';
import ResourcesList from './ResourcesList';
import ModalContainer from '../../ModalContainer/ModalContainer';
import EditModalBody from '../../EditAgendaByDay/EditModalBody';
import OptionsModalBody from '../../OptionModal/OptionsModalBody';

import './dailyClass.css';

export default function DailyClass({ isTrainer, dailyScheduleData, dailyImage, trainers }) {

    const [resources] = useState(dailyScheduleData.resourceDTOList);
    const [trainer] = useState(`${dailyScheduleData.trainerDTO.firstName} ${dailyScheduleData.trainerDTO.lastName}`)
    const [showEdit, setShowEdit] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [showTrainer, setShowTrainer] = useState(false);
    const topicsTitle = "Aprenderemos los conceptos core sobre CSS:";

    function toggleEdit() {
        setShowEdit(() => !showEdit);
    }

    function toggleOptions() {
        setShowOptions(() => !showOptions);
    }

    function toggleTrainer() {
        setShowTrainer(() => !showTrainer);
    }

    return (
        <>
            <section className="dailyClass">
                <div className="dailyClass__contentLeft">
                    <h1 className="dailyClass__title">Día {dailyScheduleData.day} - {dailyScheduleData.topic}</h1>
                    <div className="dailyClass__topics">
                        <TopicList summary={dailyScheduleData.summary} topicsTitle={topicsTitle}></TopicList>
                    </div>
                    <div className="dailyClass__resources">
                        <ResourcesList resources={resources}></ResourcesList>
                    </div>
                </div>
                <div className="dailyClass__contentRigth">
                    <figure className="dailyClass__figure">
                        <img className="dailyClass__image" src={process.env.PUBLIC_URL + dailyImage.src} alt={dailyImage.alt}></img>
                        <figcaption hidden>{dailyImage.caption}</figcaption>
                    </figure>
                    <p className="dailyClass__trainer" onClick={toggleTrainer}>Trainer: {trainer}</p>
                </div>
                {isTrainer &&
                    <>
                        <button className="dailyClass__options" onClick={toggleOptions}>
                            <img src={process.env.PUBLIC_URL + "/assets/img/options.png"} alt="" />
                        </button>
                        <button className="dailyClass__edit" onClick={toggleEdit}>Editar</button>
                    </>
                }
            </section>
            {isTrainer &&
                <>
                    <ModalContainer
                        children={
                            <EditModalBody
                                day={dailyScheduleData.day}
                                topicTitle={dailyScheduleData.topic}
                                summary={dailyScheduleData.summary}
                                trainers={trainers}
                            />}
                        show={showEdit}
                        handleClose={toggleEdit}
                        handlePrimary={() => alert("clicked send Daily class edit")}
                        primaryBtnName={"Guardar"}
                        secondaryBtnName={"Cerrar"}
                    />
                    <ModalContainer
                        children={<OptionsModalBody />}
                        show={showOptions}
                        handleClose={toggleOptions}
                        handlePrimary={() => alert("Clicked save options")}
                        primaryBtnName={""}
                        secondaryBtnName={"Cerrar"}
                    />
                </>
            }
            <ModalContainer
                show={showTrainer}
                handleClose={toggleTrainer} />
        </>
    );
}

DailyClass.propTypes = {
    isTrainer: PropTypes.bool,
    // dailyScheduleData: PropTypes.shape({
    //     date: PropTypes.string,
    //     day: PropTypes.number,
    //     id: PropTypes.number,
    //     id_Trainer: PropTypes.number,
    //     id_training: PropTypes.number,
    //     summary: PropTypes.array,
    //     topic: PropTypes.string
    // }),
    trainer: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string
    }),
    dailyImage: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        caption: PropTypes.string
    }),
    trainers: PropTypes.array
}

DailyClass.defaultProps = {
    isTrainer: false,
    dailyScheduleData: {
        date: "28-06-21",
        day: 1,
        id: 1,
        id_Trainer: 1,
        id_training: 1,
        summary: "Some summary",
        topic: "CSS",
        trainerDTO: {
            firstName: "Miguel",
            lastName: "Romero"
        },
    },
    dailyImage: {
        src: "/assets/img/daily-class-1.png",
        alt: "Day 1 Bootcamp:CSS",
        caption: "UI Engineering Studio. Day 1. Bootcamp:CSS"
    },
    trainers: ["Miguel Romero", "Juan Crisóstomo", "Angel Pantoja"]
}