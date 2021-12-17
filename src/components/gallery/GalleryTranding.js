import axios from "axios";
import React, { useState, useEffect } from "react";
import GalleryBigItem from "./GalleryBigItem";
import GalleryItem from "./GalleryItem";

import "./GalleryTranding.scss";

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

    return (
        <div className="gallery__wrap">
            {tranding ? <GalleryBigItem nft={tranding[0]} /> : ""}
            <ul className="gallery__list">
                {tranding
                    ? tranding.splice(1).map((nft) => <GalleryItem nft={nft} />)
                    : ""}
            </ul>
        </div>
    );
}
