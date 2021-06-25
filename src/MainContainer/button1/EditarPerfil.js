/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

import './editarperfil.css';

export default function EditarPerfil() {
    const [name,setName]= useState("");
    const foto= "";
    const [lastName, setlastName]= useState("");
    const [textValue, settextValue] = useState ("");
    function handleName (e){
        setName (e.target.value);
    }
    function handlelastName (e){
        setlastName(e.target.value);
    }
    function handleInput (e){
        settextValue (e.target.value);
    }

    return (
        <>
            <h3 className="editperfil">Perfil</h3>
            <p className="editfoto">Foto</p>
            <div className= 'image-container'>
                    <img scr={foto} alt='' height="100px" width ="100px"/> 
                </div>
            <form>
                <label>
                    Nombre:
                    <input type="text" value={name} 
                    onChange ={handleName}/>
                </label>
                <label>
                    Apellido:
                    <input type="text" value={lastName} 
                    onChange ={handlelastName}/>
                </label>
                <textarea
                    className="Summary"
                    name="edit"
                    rows="10"
                    cols="20"
                    value={textValue}
                    aria-label="Input text"
                    placeholder="Summary..."
                    onChange={handleInput}>
                </textarea>
            </form>
        </>
    );
}