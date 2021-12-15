import React from "react";
import "./BorderedBtn.scss";

export default function BorderedBtn({ text }) {
    return (
        <button className="header__br-btn border-btn">{text || "empty"}</button>
    );
}
