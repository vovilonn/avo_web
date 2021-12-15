import React from "react";
import btnImg from "../images/btn_img.png";
import arrowImg from "../images/arrow.svg";

import "./GalleryBtn.scss";

const GalleryBtn = () => {
    return (
        <button className="header__green-btn green-btn">
            <img src={btnImg} />
            Галерея NFT
            <img src={arrowImg} />
        </button>
    );
};

export default GalleryBtn;
