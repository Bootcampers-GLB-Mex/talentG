import { useState } from "react";

export default function EmailInput({ handleMail }) {
    const [mailInput, setMailInput] = useState('');

    function handleInputChange(e) {
        setMailInput(e.target.value);
    }

    return (
        <>
            <form className="login__form">
                <div className="login__input">
                    <label htmlFor="email">Dirección de email</label>
                    <input id="email" type="email" onChange={handleInputChange} value={mailInput}></input>
                </div>
                <button className="login__button" onClick={() => {
                    handleMail(mailInput);
                    setMailInput('');
                }}>Siguiente</button>
            </form>
        </>
    );
}