import { useState } from "react";
import PropTypes from 'prop-types';

import './editModal.css';

export default function EditModalBody({ day, topicTitle, summary, trainers }) {

    // const [textValue, setTextValue] = useState(summary ? summary.join(" ") : "");
    const [textValue, setTextValue] = useState(summary ? summary : "");

    function handleInput(e) {
        setTextValue(e.target.value);
    }

    return (
        <>
            <h3 className="editModal__title">Agenda</h3>
            <p className="editModal__subtitle">Día {day} - {topicTitle}</p>
            <form>
                <textarea
                    className="editModal__textArea"
                    name="edit"
                    rows="10"
                    cols="20"
                    value={textValue}
                    aria-label="Input text"
                    placeholder="Summary..."
                    onChange={handleInput}>
                </textarea>
                <select className="editModal__selectTrainer" name="trainers" id="trainers">
                    {trainers.map((trainer) => {
                        return (
                            <option key={trainer} value={trainer}>{trainer}</option>
                        );
                    })}
                </select>
            </form>
        </>
    );
}

EditModalBody.propTypes = {
    day: PropTypes.number,
    topicTitle: PropTypes.string,
    summary: PropTypes.array,
    trainers: PropTypes.array
}

EditModalBody.defaultProps = {
    day: 1,
    topicTitle: "Prueba - CSS",
    summary: ["1. Example", "2. Example", "3.Example"],
    trainers: ["Mike", "Juan", "Rubén"]
}