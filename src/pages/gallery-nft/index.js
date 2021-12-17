import React from "react";

import "../gallery-nft.scss";
import "../categories.scss";

import GalleryItem from "../../components/gallery/GalleryItem";
import GalleryBigItem from "../../components/gallery/GalleryBigItem";
import Gallery from "../../components/gallery/Gallery";
import BreadCrumbs from "../../components/bread_crumbs/BreadCrumbs";
import GalleryTranding from "../../components/gallery/GalleryTranding";

export default function GalleryNFT() {
    return (
        <>
            <article className="gallery container">
                <BreadCrumbs />
                <GalleryTranding />
            </article>
            <Gallery type="all" />
        </>
    );
}
