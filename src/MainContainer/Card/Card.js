import React, {useState} from 'react'
import './Card.css'

function Card(){

    const [name,setName] = useState('Alejandra Gutiérrez');
    const [job,setJob] = useState('Student');
    const [boot,setBoot] = useState('Bootcamp');
    const [area,setArea] = useState('Web UI');
    const [birth,setBirth] = useState('Edad');
    const [age,setAge] = useState('24');


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
                <table className='minitab'>
                    <thead>
                        <tr>
                            <th> <h3> { boot } </h3></th>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <th> <h3>  { birth }</h3> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <p> { area } </p></td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <td> <p> { age } </p></td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

        </div>
    )
}

export default Card