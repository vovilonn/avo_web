import React from "react";
import arrowImg from "../images/arrow.svg";

import "./LoadMoreBtn.scss";

export default function LoadMoreBtn() {
    return (
        <button className="works__load-more green-btn">
            Загрузить еще <img src={arrowImg} alt="" />
        </button>
    );
}
