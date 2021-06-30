import React from 'react';
import { Link } from 'react-router-dom';
import './header-styles.css';

export default function Header({logout}) {
    return (
        <header>
            <p className="header__title">Talent</p>
            <img className="logoG" src={process.env.PUBLIC_URL + '/assets/img/logoG.png'} alt="logo"/>
            <Link to="/" className="my__bootcamp">Mi bootcamp</Link>
            <Link to="/myProfile" className="my__profile">Mi perfil</Link>
            <p role="button"className="my__bootcamp__logout" onClick={logout}>Logout</p>
        </header>
    )
}
