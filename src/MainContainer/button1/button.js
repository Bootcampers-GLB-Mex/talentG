import React from "react";
import "./button.css";


export const Button = ({children, handleEvent}) =>{
    return (
        <button className="button1" onClick= {handleEvent} >
            <span>
            {children}
            </span>
           
        </button>
    )
}
export default Button;