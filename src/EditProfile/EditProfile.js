/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./EditProfile.css";

export default function EditProfile({profileData, handleNewData}) {
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
        <div className="EditProfile">
        <h3 className="EditProfile__title">Perfil</h3>
        <p className="EditProfile__editPhoto">Foto</p>
        <div className= 'EditProfile__imageContainer'>
                <img scr={foto} alt='' /> 
            </div>
        <div className="EditProfile__form">
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
EditProfile.propTypes = {
  handleNewData: PropTypes.func,
  profileData: PropTypes.object
 }