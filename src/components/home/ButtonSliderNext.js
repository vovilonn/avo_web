import React from "react";
import "./buttonslidernext.scss";

function ButtonSliderNext(props) {
    const { className, style, onClick } = props;
    return <div className="button_next-slider" onClick={onClick} />;
}

export default ButtonSliderNext;
