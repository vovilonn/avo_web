import React from "react";
import "./buttonslidernext.scss";

function ButtonSliderNext(props) {
    const { onClick } = props;
    return <div className="button_next-slider" onClick={onClick} />;
}

export default ButtonSliderNext;
