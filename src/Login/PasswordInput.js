import { useState } from "react";

export default function PasswordInput({ login }) {
    const [password, setPassword] = useState('');

    function handleInputChange(e) {
        setPassword(e.target.value);
    }

    return (
        <>
            <form className="login__form">
                <div className="login__input">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={handleInputChange}></input>
                </div>
                <button className="login__button" onClick={() => {
                    login(password);
                    setPassword('');
                }}>Login</button>
            </form>
        </>
    )
}