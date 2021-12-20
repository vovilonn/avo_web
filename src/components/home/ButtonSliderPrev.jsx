import React from "react";
import "./buttonsliderprev.scss";

function ButtonSliderPrev(props) {
    const { className, style, onClick } = props;
    return <div className="button_prev-slider" onClick={onClick} />;
}
export default ButtonSliderPrev;
