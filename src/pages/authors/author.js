import React, { useState, useEffect } from "react";
import Gallery from "../../components/gallery/Gallery";
import axios from "axios";
import queryString from "query-string";
import telegramImg from "../../images/telegram.png";
import facebookImg from "../../images/facebook.png";
import instagramImg from "../../images/instagram.png";
import tickImg from "../../images/tick.svg";
import authorImg from "../../images/people_big-img.png";
import BreadCrumbs from "../../components/bread_crumbs/BreadCrumbs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SmoothLoadedImage from "../../components/SmoothLoadedImage";
import WokrDescription from "../../components/WokrDescription";

export default function Author() {
    const [author, setAuthor] = useState({});

    useEffect(() => {
        (async function getData() {
            const query = queryString.parse(window.location.search);
            const res = await axios.get(
                `https://avonft.io/api/author/${query.id}`
            );
            console.log(res.data);
            setAuthor(res.data);
        })();
    }, []);
    return (
        <>
            <article className="work container">
                <BreadCrumbs />
                <div className="work__wrap">
                    <div className="work__content">
                        <h1 className="work__title">
                            {author.name} <img src={tickImg} alt="" />
                        </h1>
                        <div className="work__descriptions">
                            {author.description ? (
                                <WokrDescription text={author.description} />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="work__block">
                        <h1 className="work__title mobile">
                            {author.name} <img src={tickImg} alt="" />
                        </h1>
                        <div className="work__img-wrap">
                            <ul
                                className="footer__socials__container"
                                style={{
                                    listStyle: "none",
                                    justifyContent: "space-between",
                                    borderRadius: "8px 16px",
                                    position: "absolute",
                                    zIndex: "9999",
                                    background: " #c6c6e3cc",
                                    padding: "5px 8px",
                                    bottom: "7%",
                                    left: "8%",
                                }}
                            >
                                <li className="footer__social">
                                    <a href="">
                                        <img src={telegramImg} alt="" />
                                    </a>
                                </li>
                                <li className="footer__social">
                                    <a href="">
                                        <img src={facebookImg} alt="" />
                                    </a>
                                </li>
                                <li className="footer__social">
                                    <a href="">
                                        <img src={instagramImg} alt="" />
                                    </a>
                                </li>
                            </ul>
                            {authorImg ? (
                                <SmoothLoadedImage
                                    src={authorImg}
                                    width="100%"
                                    height="auto"
                                    className="work__img"
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </article>

            {author.id ? (
                <Gallery type="by-author" authorId={author.id} />
            ) : (
                "Loading..."
            )}
        </>
    );
}
