import React from "react";

import itemImg from "../../images/gallery_img-2.png";
import authorImg from "../../images/people_1.png";

import "./Author.scss";
const Author = () => {
    return (
        <li class="authors__item">
            <a href="">
                <div class="authors__img__wrap">
                    <img src={itemImg} alt="" class="authors__img" />
                </div>
                <div class="authors__author-wrap">
                    <img src={authorImg} alt="" class="authors__author" />
                </div>
                <div class="authors__name">Жуков Аркадий</div>
                <div class="authors__desc">Краткое описание автора</div>
            </a>
        </li>
    );
};

export default Author;
