import PropTypes from "prop-types";
import React from "react";
import "./listContainer.css";

import ListContent from "./ListContent";

export default function ListContainer({ isTrainer, homeworks, students }) {

  const studentsArr = Object.keys(students).map((key) => {
    return students[key];
  });

  const nameStudents = studentsArr.map(function (student) {
    return student.firstName + " " + student.lastName;
  });

  // const homeworksArr = Object.keys(homeworks).map((key) => {
  //   return students[key];
  // });

  const namehomeworks = homeworks.map(function (hw) {
    return hw.homeworkName;
  });

  return (
    <section className="listContainer" data-testid="listContainer">
      {isTrainer && (
        <>
          <ListContent list={nameStudents} title="Mis Alumnos" />
        </>
      )}
      {!isTrainer && (
        <>
          <ListContent list={namehomeworks} title="Feedback" />
        </>
      )}
    </section>
  );
}

ListContainer.propTypes = {
  isTrainer: PropTypes.bool,
  homeworks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      homeworkName: PropTypes.string,
      feedback: PropTypes.string,
      homeworkLink: PropTypes.string,
      id_schedule: PropTypes.number,
      id_student: PropTypes.number,
    })
  ),
  // students: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number,
  //     firstName: PropTypes.string,
  //     lastName: PropTypes.string,
  //   })
  // ),
};

ListContainer.defaultProps = {
  isTrainer: false,
  homeworks: [
    {
      id: 1,
      homeworkName: "Ejercicios CSS",
      feedback: "Buen trabajo, completaste todos los ejercicios a tiempo.",
      homeworkLink: "https://flukeout.github.io/",
      id_schedule: 1,
      id_student: 0,
    },
    {
      id: 2,
      homeworkName: "Magazine Layout",
      feedback:
        "Buen Trabajo en la revista, se puede mejorar ciertos aspectos en cuanto a la limpieza e identación del código. Puntos buenos: 1. Semántica bien aplicada 2. Estilos funcionan correctamente 3. Diseño responsivo Puntos a mejorar: 1. Limpieza en el código 2. Nombres de clases en estilos",
      homeworkLink:
        "https://codesandbox.io/s/strange-microservice-3bhbf?file=/styles.css",
      id_schedule: 2,
      id_student: 0,
    },
  ],
  students: [
    {
      id: 1,
      firstName: "Alejandra",
      lastName: "Gutierrez",
    },
    {
      id: 2,
      email: "student@students.com",
      firstName: "Atziri",
      lastName: "Perez",
      location: "CDMX",
      summary: "Es muy cool",
      training: 1,
      status: true,
    },
  ],
};
