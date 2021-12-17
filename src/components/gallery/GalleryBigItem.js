import React from "react";
import bigItemImg from "../../images/gallery_img-1.png";
import SmoothLoadedImage from "../SmoothLoadedImage";

import "./GalleryBigItem.scss";

export default function GalleryBigItem() {
    return (
        <div className="gallery__item big">
            <a href="">
                <SmoothLoadedImage
                    src={bigItemImg}
                    width="100%"
                    height="auto"
                    className="gallery__img"
                />

                <div className="gallery__content">
                    <div className="gallery__title">Описание работы</div>
                    <div className="gallery__block">
                        <div className="gallery__heading">Цена</div>
                        <div className="gallery__desc">3.14 avo</div>
                    </div>
                </div>
            </a>
        </div>
    );
}
