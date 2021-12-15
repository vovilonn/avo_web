import React from "react";
import itemImg from "../../images/gallery_img-6.png";
import avoImg from "../../images/avo.svg";

import "./GalleryCard.scss";

export default function GalleryCard() {
    return (
        <li class="works__item">
            <a href="">
                <div class="works__img-wrap">
                    <img src={itemImg} alt="" class="works__img" />
                </div>
                <div class="works__title">Название работы</div>
                <div class="works__block">
                    <button class="works__btn">
                        <img src={avoImg} alt="" />
                    </button>
                    <div class="works__heading">
                        <div class="works__sub-title">Цена</div>
                        <div class="works__price">3.14 avo</div>
                    </div>
                </div>
            </a>
        </li>
    );
}
