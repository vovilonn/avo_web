import axios from "axios";
import React, { useState, useEffect } from "react";
import GalleryBigItem from "./GalleryBigItem";
import GalleryItem from "./GalleryItem";

import "./GalleryTranding.scss";
import GalleryTrandingLoader from "../loaders/GalleryTrandingLoader";

export default function GalleryTranding() {
    const [tranding, setTranding] = useState(null);

    useEffect(() => {
        getTrandingNftData();
    }, []);

    async function getTrandingNftData() {
        const { data } = await axios.get(
            "https://avonft.io/api/nft?limit=7&page=3"
        );
        setTranding(data);
    }

    return tranding ? (
        <div className="gallery__wrap">
            <GalleryBigItem nft={tranding[0]} />
            <ul className="gallery__list">
                {[...tranding].splice(1).map((nft) => (
                    <GalleryItem nft={nft} key={nft.id} />
                ))}
            </ul>
        </div>
    ) : (
        <GalleryTrandingLoader style={{ width: "100%" }} />
    );
}
