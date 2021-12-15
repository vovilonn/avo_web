import React from "react";

import "./gallery-nft.scss";
import "./categories.scss";

import GalleryItem from "../components/gallery/GalleryItem";
import GalleryBigItem from "../components/gallery/GalleryBigItem";
import Gallery from "../components/gallery/Gallery";
import BreadCrumbs from "../components/bread_crumbs/BreadCrumbs";

export default function GalleryNFT() {
    return (
        <>
            <article className="gallery container">
                <BreadCrumbs />
                <div className="gallery__wrap">
                    <GalleryBigItem />
                    <ul className="gallery__list">
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                    </ul>
                </div>
            </article>
            <Gallery />
        </>
    );
}
