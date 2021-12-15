import React from "react";

import telegramImg from "../images/telegram_1.svg";
import arrowImg from "../images/arrow_white.svg";

const Buybtn = () => {
    return (
        <a href="" class="work__btn">
            <img src={telegramImg} alt="" />
            Купить
            <img src={arrowImg} alt="" />
        </a>
    );
};

export default Buybtn;
