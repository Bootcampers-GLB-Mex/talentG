import { useState } from "react";
import logoBlack from "../img/logoG-black.png";
import "./login.css";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

export default function Login({ login }) {
    const [isMail, setIsMail] = useState(false);
    const [mail, setMail] = useState('');
    const [isTrainer, setIsTrainer] = useState(false);

    function handleMail(mailInput, checked) {
        setMail(mailInput);
        setIsMail(!isMail);
        setIsTrainer(checked);
    }

    return (
        <>
            <div className="view__container">
                <div className="login__container">
                    <div role="heading" aria-level="2" className="login__title">
                        <p className="title__text">Talent</p>
                        <img className="title__logo" src={logoBlack} alt="logo" />
                    </div>
                    {!isMail ? <EmailInput handleMail={handleMail} />
                        : <PasswordInput login={(password) => login(mail, password, isTrainer)} />}
                </div>
            </div>
        </>
    );
}
