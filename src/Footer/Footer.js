import React from "react";
import "./footer-styles.css";

export default function Footer() {
  return (
    <footer>
      <img
        className="globant-img"
        src={process.env.PUBLIC_URL + "/assets/img/globant.png"}
        alt="logo"
      />
    </footer>
  );
}
