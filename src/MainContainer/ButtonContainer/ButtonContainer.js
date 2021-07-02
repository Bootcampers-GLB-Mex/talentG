import React from "react";
import "./ButtonContainer.css";
import PropTypes from 'prop-types';

export const ButtonContainer  = ({children, handleEvent}) =>{
    return (
        <button className="button1" onClick= {handleEvent} >
            <span>
            {children}
            </span>
           
        </button>
    )
}
export default ButtonContainer;
ButtonContainer.propTypes = { 
    children:PropTypes.string,
    handleEvent:PropTypes.func
}
