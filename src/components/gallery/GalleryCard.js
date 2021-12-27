import React from "react";
import avoImg from "../../images/avo.svg";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "./GalleryCard.scss";
import { Link } from "gatsby";
import SmoothLoadedImage from "../SmoothLoadedImage";
import { makeNftImageSrc } from "../../utils/nft.utils";
import ReactPlayer from "react-player";

export default function GalleryCard({ nft }) {
    const cardImageSrc = makeNftImageSrc(nft);

    return (
        <li className="works__item">
            <Link to={`/gallery-nft/nft?id=${nft.id}`}>
                <div className="works__img-wrap">
                    <SmoothLoadedImage
                        src={cardImageSrc}
                        className="works__img"
                        height="200px"
                        width="100%"
                    />
                </div>
                <div className="works__title">
                    {nft.title.length > 18
                        ? nft.title.slice(0, 18) + "..."
                        : nft.title}
                </div>
                <div className="works__block">
                    <button className="works__btn">
                        <LazyLoadImage src={avoImg} />
                    </button>
                    <div className="works__heading">
                        <div className="works__sub-title">Цена</div>
                        <div className="works__price">{nft.price} avo</div>
                    </div>
                </div>
            </Link>
        </li>
    );
}
