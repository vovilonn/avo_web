import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../Categories.js";
import GalleryCard from "./GalleryCard.js";
import LoadMoreBtn from "../LoadMoreBtn";
import ImageGrid from "../loaders/GalleryGrid.js";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import AuthorCard from "../authors/AuthorCard.js";

export default function Gallery({ type = "all", authorId }) {
    const LIMIT_PER_PAGE = 24;

    const [pagesLoaded, setPagesLoaded] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [pagesLoaded]);

    async function getData() {
        try {
            let res;
            switch (type) {
                case "all":
                    res = await axios.get(
                        `https://avonft.io/api/nft?limit=${LIMIT_PER_PAGE}&page=${pagesLoaded}`
                    );
                    break;
                case "by-author":
                    res = await axios.get(
                        `https://avonft.io/api/nft/by-author/${authorId}?limit=${LIMIT_PER_PAGE}&page=${pagesLoaded}`
                    );
                    break;
                case "authors":
                    res = await axios.get(
                        `https://avonft.io/api/author?limit=${LIMIT_PER_PAGE}&page=${pagesLoaded}`
                    );
                    console.log(
                        "🚀 ~ file: Gallery.js ~ line 38 ~ getData ~ res",
                        res
                    );
                    break;

                default:
                    break;
            }
            const updatenData = [...data, ...res.data];

            setData(updatenData);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <Categories />
            <article className="gallery__works container">
                <ul className="gallery__works__list">
                    {data.map((e) => (
                        <LazyLoadComponent key={e.id}>
                            {type === "authors" ? (
                                <AuthorCard author={e} />
                            ) : (
                                <GalleryCard nft={e} />
                            )}
                        </LazyLoadComponent>
                    ))}
                    {/* <ImageGrid /> should be visible on loading*/}{" "}
                </ul>
                <LoadMoreBtn
                    pagesLoaded={pagesLoaded}
                    setPagesLoaded={setPagesLoaded}
                />
            </article>
        </>
    );
}
