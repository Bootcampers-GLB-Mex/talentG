/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

import "./editarperfil.css";

export default function EditarPerfil({profileData, handleNewData}) {
  const [name, setName] = useState(profileData.firstName);
  const foto = "";
  const [lastName, setlastName] = useState(profileData.lastName);
  const [textValue, settextValue] = useState(profileData.summary);
  function handleName(e) {
    setName(e.target.value);
  }
  function handlelastName(e) {
    setlastName(e.target.value);
  }
  function handleInput(e) {
    settextValue(e.target.value);
  }

  useEffect(()=>{
    handleNewData(name, lastName, textValue);
  },[handleName, handlelastName, handleInput]);
  
  return (
    <>
        <div className="editarperfil1">
        <h3 className="editperfil">Perfil</h3>
        <p className="editfoto">Foto</p>
        <div className= 'image-container'>
                <img  scr={foto} alt='' /> 
            </div>
        <div className="form1">
        <form>
            <label>
                Nombre:
            </label>
            <input type="text" value={name} 
                onChange ={handleName}/>
            <label>
                Apellido:
            </label>
            <input type="text" value={lastName} 
                onChange ={handlelastName}/>
            <textarea
                className="Summary"
                name="edit"
                value={textValue}
                aria-label="Input text"
                placeholder="Summary..."
                onChange={handleInput}>
            </textarea>
        </form>
        </div>
        </div>
    </>
);
}