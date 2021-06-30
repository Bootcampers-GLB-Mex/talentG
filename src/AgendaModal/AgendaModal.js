import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditModalBody from '../EditAgendaByDay/EditModalBody';

import './agendaModal.css';

function AgendaModal({ isTrainer, schedule, isEditable, toggleEdit, trainers }) {
    /* EditModalBody recibe day, topicTitle, summary, trainers  */
    const [isSummary, setIsSummary] = useState('');
    const [isDay, setIsDay] = useState('');
    const [isTopic, setIsTopic] = useState('');
    // const [isTrainer, setIsTrainer] = useState('');
    // const getSummary = isSummary();

    const scheduleArr = Object.keys(schedule).map((key) => {
        return schedule[key];
    });

    return (
        <section className="agenda__modal">
            {!isEditable && <h2 className="agenda__modal--title">Agenda</h2>}
            {!isEditable && scheduleArr.map((elem) => {
                
                return (

                    <div className="tab" key={elem.id}>
                        <input id={`tab-${elem.day}`} type="checkbox" />
                        <div className="tab__img">
                            <label htmlFor={`tab-${elem.day}`}>Dia {elem.day} - {elem.topic}</label>
                            {isTrainer &&
                                <img className="img__pencil" src={process.env.PUBLIC_URL + '/assets/img/pencil.png'}
                                    alt="pencil"
                                    onClick={() => {
                                        toggleEdit();
                                        setIsSummary(elem.summary);
                                        setIsDay(elem.day);
                                        setIsTopic(elem.topic);
                                        // setIsTrainer(elem.trainers);
                                    }} />}
                        </div>
                        <p className="tab-content">{elem.summary}</p>
                    </div>

                );
            })}
            {/* EditModalBody recibe day, topicTitle, summary, trainers  */}
            {isEditable && <EditModalBody day={isDay} topicTitle={isTopic} summary={isSummary} trainers={trainers} />}
        </section>
    )
}

AgendaModal.propTypes = {
    isTrainer: PropTypes.bool
}

export default AgendaModal
