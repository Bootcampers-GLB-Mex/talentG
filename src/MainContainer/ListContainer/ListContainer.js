import React from "react";
import PropTypes from 'prop-types';

import "./listContainer.css";

import ListContent from "../ListContent/ListContent";

export default function ListContainer({ isTrainer, homeworks, students}) {
  
  const namehomeworks = homeworks.map(function(hw){
    return hw.homeworkName;
  });

  const nameStudents = students.map(function(student){
    return student.firstName +" "+ student.lastName;
  });


  return (
    <section className="listContainer">
      {isTrainer && (
        <>
          <ListContent list={nameStudents} title = "Mis Alumnos" />
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
  homeworks: PropTypes.shape({
      id: PropTypes.number,
      homeworkName: PropTypes.string,
      feedback: PropTypes.string,
      homeworkLink: PropTypes.string,
      id_schedule: PropTypes.number,
      id_student: PropTypes.number
  }),
  students: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      location: PropTypes.string,
      summary: PropTypes.string,
      training: PropTypes.number,
      status: PropTypes.bool
  })
}