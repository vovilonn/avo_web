import React from "react";
import bigItemImg from "../../images/gallery_img-1.png";
import SmoothLoadedImage from "../SmoothLoadedImage";

import "./GalleryBigItem.scss";

export default function GalleryBigItem({ nft }) {
    return (
        <div className="gallery__item big">
            <a href="">
                <SmoothLoadedImage
                    src={nft.img}
                    width="100%"
                    height="auto"
                    className="gallery__img"
                />

                <div className="gallery__content">
                    <div className="gallery__title">
                        {nft.description.slice(0, 20)}
                    </div>
                    <div className="gallery__block">
                        <div className="gallery__heading">Цена</div>
                        <div className="gallery__desc">{nft.price} avo</div>
                    </div>
                </div>
            </a>
        </div>
    );
}
