import { useState } from "react";

export default function EmailInput({ handleMail }) {
    const [mailInput, setMailInput] = useState('');
    const [ischecked, setIsChecked] = useState(false)

    function handleInputChange(e) {
        setMailInput(e.target.value);
    }

    function handleCheckChange(e) {
        setIsChecked(e.target.checked);
    }

    return (
        <>
            <form className="login__form">
                <div className="login__input">
                    <label htmlFor="email">Dirección de email</label>
                    <input id="email" type="email" onChange={handleInputChange} value={mailInput}></input>
                    <div className="login__trainer">
                        <input type="checkbox" onChange={handleCheckChange}></input>
                        <label htmlFor="trainer">Trainer?</label>
                    </div>
                </div>
                <button className="login__button" onClick={() => {
                    handleMail(mailInput, ischecked);
                    setMailInput('');
                }}>Siguiente</button>
            </form>
        </>
    );
}