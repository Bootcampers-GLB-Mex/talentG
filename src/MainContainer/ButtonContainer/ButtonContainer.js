import React from "react";
import "./ButtonContainer.css";
import PropTypes from 'prop-types';


export const ButtonContainer = ({ children, handleEvent }) => {
    return (
        <button className="ButtonContainer" onClick={handleEvent} >
            {children}
            <img className="ButtonContainer__vector"
                alt=""
                src={process.env.PUBLIC_URL + '/assets/img/vector.svg'} />
        </button>
    );
}
export default ButtonContainer;
ButtonContainer.propTypes = {
    children: PropTypes.string,
    handleEvent: PropTypes.func
}
