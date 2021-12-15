import React, { useState, useEffect } from "react";
import Author from "../../components/authors/Author";
import Categories from "../../components/Categories";
import GalleryLoadMoreBtn from "../../components/LoadMoreBtn";
import BreadCrumbs from "../../components/bread_crumbs/BreadCrumbs";
import axios from "axios";

import "../authors.scss";

export default function Authors() {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        (async function getData() {
            const res = await axios.get("https://avonft.io/api/author");
            setAuthors(res.data);
        })();
    }, []);
    return (
        <>
            <BreadCrumbs />
            <Categories />
            <article className="authors container">
                <ul className="authors__list">
                    {authors.map((author) => (
                        <Author author={author} key={author.id} />
                    ))}
                </ul>
                <GalleryLoadMoreBtn />
            </article>
        </>
    );
}
