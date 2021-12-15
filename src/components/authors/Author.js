import React from "react";

import itemImg from "../../images/gallery_img-2.png";
import authorImg from "../../images/people_1.png";

import "./Author.scss";
const Author = () => {
    return (
        <li className="authors__item">
            <a href="">
                <div className="authors__img__wrap">
                    <img src={itemImg} alt="" className="authors__img" />
                </div>
                <div className="authors__author-wrap">
                    <img src={authorImg} alt="" className="authors__author" />
                </div>
                <div className="authors__name">Жуков Аркадий</div>
                <div className="authors__desc">Краткое описание автора</div>
            </a>
        </li>
    );
};

export default Author;
