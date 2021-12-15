import React from "react";
import itemImg from "../../images/gallery_img-6.png";
import avoImg from "../../images/avo.svg";

import "./GalleryCard.scss";

export default function GalleryCard() {
    return (
        <li className="works__item">
            <a href="">
                <div className="works__img-wrap">
                    <img src={itemImg} alt="" className="works__img" />
                </div>
                <div className="works__title">Название работы</div>
                <div className="works__block">
                    <button className="works__btn">
                        <img src={avoImg} alt="" />
                    </button>
                    <div className="works__heading">
                        <div className="works__sub-title">Цена</div>
                        <div className="works__price">3.14 avo</div>
                    </div>
                </div>
            </a>
        </li>
    );
}
