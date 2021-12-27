import React from "react";
import btnImg from "../images/btn_img.png";

import "./GalleryBtn.scss";
import { Link } from "gatsby";

const GalleryBtn = (props) => {
    return (
        <Link
            to={props.to}
            className="header__green-btn"
            style={{ margin: 0, padding: 0 }}
        >
            <button className="header__green-btn green-btn" style={props.style}>
                <img src={btnImg} />
                Галерея NFT
            </button>
        </Link>
    );
};

export default GalleryBtn;
