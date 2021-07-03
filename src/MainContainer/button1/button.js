import React from "react";
import "./button.css";


export const Button = ({children, handleEvent}) =>{
    return (
        <button className="button1" onClick= {handleEvent} > 
            <span>
            {children}
            </span>
            <img className="vector__span" alt="vector" src={process.env.PUBLIC_URL + '/assets/img/vector.svg'}/> 
        </button>
    )
}
export default Button;