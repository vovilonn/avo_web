import React from "react";

import "../gallery-nft.scss";

import Gallery from "../../components/gallery/Gallery";
import BreadCrumbs from "../../components/bread_crumbs/BreadCrumbs";
import GalleryTranding from "../../components/gallery/GalleryTranding";

export default function GalleryNFT() {
    return (
        <>
            <article className="gallery container">
                <BreadCrumbs />
                <GalleryTranding />
            </article>{" "}
            <Gallery type="nft" />
        </>
    );
}
