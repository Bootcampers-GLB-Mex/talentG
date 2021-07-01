import React from "react";

import "./Feedback.css";

function Feedback({
  isTrainer,
  homeworkList,
  students,
  isEdit,
  toggleEditFeed,
}) {
  const studentsArr = Object.keys(students).map((key) => {
    return students[key];
  });
  return (
    <section className="feedback-container">
      {isTrainer && <h1>{"Enviar Feedback"}</h1>}
      {!isTrainer && <h1>{"Feedback"}</h1>}
      <div className="days-container">
        {!isTrainer &&
          homeworkList.map((elem) => {
            return (
              <div className="tab" key={elem.id}>
                <input id={`tab-${elem.id}`} type="checkbox" />
                <div className="tab__img">
                  <label htmlFor={`tab-${elem.id}`}>
                    Dia {elem.id_schedule} - {elem.homeworkName}
                  </label>
                </div>
                <p className="tab-content">{elem.feedback}</p>
              </div>
            );
          })}
        {!isEdit && (
          <>
            {isTrainer && <h3 className="alumnosTitle">{"Alumnos"}</h3>}
            {isTrainer &&
              studentsArr.map((student) => {
                return (
                  <div className="student">
                    <p
                      onClick={() => {
                        toggleEditFeed();
                      }}
                    >
                      {student.firstName} {student.lastName}
                    </p>
                  </div>
                );
              })}
          </>
        )}
        {isEdit &&
          homeworkList.map((elem) => {
            return (
              <>
                <div className="tab" key={elem.id}>
                  <input id={`tab-${elem.id}`} type="checkbox" />
                  <div className="tab__img">
                    <label htmlFor={`tab-${elem.id}`}>
                      Dia {elem.id_schedule} - {elem.homeworkName}
                    </label>
                  </div>
                  <div className="tab-content">
                    <textarea></textarea>
                    <button>{"Enviar"}</button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </section>
  );
}

export default Feedback;
