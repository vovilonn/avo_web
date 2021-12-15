import React, { useState, useEffect } from "react";

import avoImg from "../../images/avo.svg";

import "./BreadCrumbs.scss";
import BreadCrumbsItem from "./BreadCrumbsItem";

export default function BreadCrumbs() {
    const [url, setUrl] = useState(document.URL);
    // useEffect(() => {
    //     setUrl(document.URL);
    // }, []);

    const objectOfMatches = {
        "gallery-nft": "Галерея NFT",
        nft: "NFT",
        authors: "Авторы",
        author: "Автор",
    };

    const getPagesFromUrl = (url) => {
        const urlWithoutQueryParams = url.split("?")[0];
        return urlWithoutQueryParams.split("/").splice(3);
    };

    const makeUrl = (currentPage) => {
        const pages = getPagesFromUrl(url);
        const limitedPagesArr = pages.splice(0, pages.indexOf(currentPage) + 1);
        return `/${limitedPagesArr.join("/")}`;
    };

    return (
        <div className="bread-crumbs container">
            <img src={avoImg} alt="" />
            <ul className="bread-crumbs__list">
                <BreadCrumbsItem text="Главная" to="/" />

                {getPagesFromUrl(url).map((currentPage, i) =>
                    currentPage ? (
                        <BreadCrumbsItem
                            text={objectOfMatches[currentPage]}
                            to={makeUrl(currentPage)}
                            key={i}
                        />
                    ) : (
                        ""
                    )
                )}
            </ul>
        </div>
    );
}
