import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../Categories.js";
import GalleryCard from "./GalleryCard.js";
import LoadMoreBtn from "../LoadMoreBtn";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Gallery({ type = "all", authorId }) {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            let res;
            switch (type) {
                case "all":
                    res = await axios.get("https://avonft.io/api/nft");
                    break;
                case "by-author":
                    console.log(
                        "🚀 ~ file: Gallery.js ~ line 20 ~ getData ~ authorId",
                        authorId
                    );
                    res = await axios.get(
                        `https://avonft.io/api/nft/by-author/${authorId}`
                    );
                    break;

                default:
                    break;
            }
            setNfts(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <Categories />
            <article className="gallery__works container">
                <ul className="gallery__works__list">
                    {nfts.map((nft) => (
                        <GalleryCard nft={nft} key={nft.id} />
                    ))}
                </ul>
                <LoadMoreBtn />
            </article>
        </>
    );
}
