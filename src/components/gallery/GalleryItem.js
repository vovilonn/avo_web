import { Link } from "gatsby";
import React from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import itemImage from "../../images/gallery_img-4.png";
import SmoothLoadedImage from "../SmoothLoadedImage";

import "./GalleryItem.scss";

export default function GalleryItem({ nft }) {
    const MAX_DESCRIPTION_LENGTH = 25;

    const slicedDescription = nft.description.slice(0, MAX_DESCRIPTION_LENGTH);

    return (
        <LazyLoadComponent>
            <li className="gallery__item">
                <Link to={`/gallery-nft/nft?id=${nft.id}`}>
                    <SmoothLoadedImage
                        src={nft.img}
                        width="100%"
                        height="auto"
                        className="gallery__img"
                    />

                    <div className="gallery__content">
                        <div className="gallery__title">
                            {nft.description.length > MAX_DESCRIPTION_LENGTH
                                ? slicedDescription + "..."
                                : nft.description}
                        </div>
                        <div className="gallery__block">
                            <div className="gallery__heading">Цена</div>
                            <div className="gallery__desc">{nft.price} avo</div>
                        </div>
                    </div>
                </Link>
            </li>
        </LazyLoadComponent>
    );
}
