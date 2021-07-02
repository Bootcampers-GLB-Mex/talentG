import PropTypes from 'prop-types';
import React from "react";

import './listContainer.css';

export default function ListStudents({ students, handleListItem }) {

    const studentsArr = Object.keys(students).map((key) => {
        return students[key];
    });

    const nameStudents = studentsArr.map(function (student) {
        return ` ${student.firstName} ${student.lastName}`;
    });

    return (

        <ol className="list__content" data-testid="contentlist">
            {Array.isArray(nameStudents) && nameStudents.map((student) =>
                <li key={Math.floor(Math.random() * 100) * Date.now()}><p onClick={()=>handleListItem(student.id)}>{student}</p></li>
            )}
        </ol>

    );
}

ListStudents.propTypes = {
    title: PropTypes.string,
    students: PropTypes.arrayOf(PropTypes.string)
}

ListStudents.defaultProps = {
    title: "Mis alumnos",
    students: ["Victor Cruz", "Atziri Pérez"]
}
