import React from "react";
import btnImg from "../images/btn_img.png";
import arrowImg from "../images/arrow.svg";

import "./GalleryBtn.scss";
import { Link } from "gatsby";

const GalleryBtn = ({ to }) => {
    return (
        <Link
            to={to}
            className="header__green-btn"
            style={{ margin: 0, padding: 0 }}
        >
            <button className="header__green-btn green-btn">
                <img src={btnImg} />
                Галерея NFT
                <img src={arrowImg} />
            </button>
        </Link>
    );
};

export default GalleryBtn;
