import React from "react";

import itemImage from "../../images/gallery_img-4.png";
import SmoothLoadedImage from "../SmoothLoadedImage";

import "./GalleryItem.scss";

export default function GalleryItem() {
    return (
        <li className="gallery__item">
            <a href="">
                <SmoothLoadedImage
                    src="https://imageskincare.ru/images/products/127.jpg"
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
        </li>
    );
}
