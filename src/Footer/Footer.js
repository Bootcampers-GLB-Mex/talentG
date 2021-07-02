import React from "react";
import logoGlobant from "../img/globant.png";
import "./footer-styles.css";

export default function Footer() {
  return (
    <footer>
      <img className="globant-img" src={logoGlobant} alt="logo" />
    </footer>
  );
}
