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
                            <div className="work__caption line">
                                Краткое описание
                            </div>
                            <p className="work__desc">{author.description}</p>
                            <a href="" className="work__more">
                                Развернуть
                            </a>
                        </div>
                        <ul className="footer__socials">
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
                    </div>
                    <div className="work__block">
                        <h1 className="work__title mobile">
                            Жуков Аркадий <img src={tickImg} alt="" />
                        </h1>
                        <div className="work__img-wrap">
                            <LazyLoadImage
                                width="100%"
                                height="100%"
                                effect="blur"
                                src={authorImg}
                                alt=""
                                className="work__img"
                            />
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
