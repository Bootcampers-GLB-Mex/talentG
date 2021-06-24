import React from "react";
import "./button.css";


export const Button = ({children, onClick}) =>{
    return (
        <button className="button1" onClick= {onClick} >
            <span>
            {children}
            </span>
           
        </button>
    )
}
export default Button;