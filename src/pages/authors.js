import React from "react";
import Author from "../components/authors/Author";
import Categories from "../components/Categories";
import GalleryLoadMoreBtn from "../components/LoadMoreBtn";
import BreadCrumbs from "../components/bread_crumbs/BreadCrumbs";

import "./authors.scss";

export default function Authors() {
    return (
        <>
            <BreadCrumbs />
            <Categories />
            <article className="authors container">
                <ul className="authors__list">
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                    <Author />
                </ul>
                <GalleryLoadMoreBtn />
            </article>
        </>
    );
}
