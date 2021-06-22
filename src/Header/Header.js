import React from 'react';
import './header-styles.css';

export default function Header() {
    return (
        <header>
            <p className="header__title">Talent</p>
            <img className="logoG" src={process.env.PUBLIC_URL + '/assets/img/logoG.png'} alt="logo"/>
            <p className="my__bootcamp">Mi bootcamp</p>
            <p className="my__profile">Mi perfil</p>
        </header>
    )
}
