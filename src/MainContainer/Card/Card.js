import React, {useState} from 'react'
import './Card.css'

function Card(){

    const [name] = useState('Alejandra Gutiérrez');
    const [job] = useState('Student');
    const [boot] = useState('Bootcamp');
    const [area] = useState('Web UI');
    const [birth] = useState('Edad');
    const [age] = useState('24');


    return(
        <div className= 'Card'>
            <div className= 'upper-container'>
                <div className= 'image-container'>
                    <img scr=" " alt='' height="100px" width ="100px"/> 
                </div>
            </div>

            <div className="lower-container">
                <h2> { name } </h2>
                <h4> { job } </h4>
                <h3> { boot } { birth }</h3>
                <p> { area } { age } </p>
            </div>

        </div>
    )
}

export default Card