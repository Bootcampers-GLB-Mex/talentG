import PropTypes from 'prop-types';
import React from "react";

import './listContainer.css';
import { listHomework } from '../../sampleData';

export default function ListHomeworks({ list, homeworks, handleHwFeedback }) {


    const homeworksArr = Object.keys(homeworks).map((key) => {
        return homeworks[key];
    });

    const nameHomeworks= homeworksArr.map(function (hw) {
        return homeworks.homeworkName;
    });

    return (

        <ol className="list__content" data-testid="contentlist">
            {Array.isArray(list) && nameHomeworks.map((hw) =>
                <li key={Math.floor(Math.random() * 100) * Date.now()}><p onClick={()=>handleHwFeedback(homeworks.id)}>{hw}</p></li>
            )}
        </ol>

    );
}

ListHomeworks.propTypes = {
    title: PropTypes.string,
    homeworks: PropTypes.arrayOf(PropTypes.string)
}

ListHomeworks.defaultProps = {
    title: "Feedback",
    homeworks: ["Magazine Layout", "Codewars Katas"]
}
