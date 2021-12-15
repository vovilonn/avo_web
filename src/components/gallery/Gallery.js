import React from "react";
import Categories from "../Categories.js";
import GalleryCard from "./GalleryCard.js";
import LoadMoreBtn from "../LoadMoreBtn";

export default function Gallery() {
    return (
        <>
            <Categories />
            <article className="gallery__works container">
                <ul className="gallery__works__list">
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                    <GalleryCard />
                </ul>
                <LoadMoreBtn />
            </article>
        </>
    );
}
