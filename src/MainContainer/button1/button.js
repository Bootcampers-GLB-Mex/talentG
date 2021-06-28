import React from "react";
import "./button.css";


export const Button = ({children, handleEven}) =>{
    return (
        <button className="button1" onClick= {handleEven} >
            <span>
            {children}
            </span>
           
        </button>
    )
}
export default Button;