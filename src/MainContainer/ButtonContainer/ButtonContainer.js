import React from "react";
import "./ButtonContainer.css";


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