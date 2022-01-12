import React, { useEffect, useState } from "react";
import BuyBtn from "../../components/BuyBtn";
import queryString from "query-string";
import axios from "axios";
import amountImg from "../../images/nft.svg";
import avoImg from "../../images/avo.svg";
import authorImg from "../../images/people.png";
import qrImg from "../../images/qr.png";

import "../nft.scss";
import BreadCrumbs from "../../components/bread_crumbs/BreadCrumbs";
import { Link } from "gatsby";
import WokrDescription from "../../components/WokrDescription";
import NftView from "../../components/gallery/NftView";

const NftPage = () => {
    const [nft, setNft] = useState({});

    useEffect(() => {
        (async function getData() {
            const query = queryString.parse(window.location.search);
            const res = await axios.get(`https://avonft.io/api/nft/${query.id}`);
            console.log(res.data);
            setNft(res.data);
        })();
    }, []);

    return (
        <>
            <article className="work container" style={{ minHeight: "55vw" }}>
                <BreadCrumbs />
                <div className="work__wrap">
                    <div className="work__content">
                        <h1 className="work__title">
                            {nft.title}
                            <span className="work__id">
                                <span>ID</span> {nft.id}
                            </span>
                        </h1>
                        <div className="work__descriptions">
                            {nft.description ? <WokrDescription text={nft.description} /> : ""}
                            <div className="work__token">
                                <a
                                    href="https://bscscan.com/address/0x721B6EF510fA0C6EecD4BaB055724B0CA6478503"
                                    className="work__token-content"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Smart-contract: 0x721B6EF510fA0C6EecD4BaB055724B0CA6478503
                                </a>
                                {nft.qr_code_url && (
                                    <div className="work__qr">
                                        <a href={nft.qr_code_url} target="_blank" rel="noreferrer">
                                            <img src={qrImg} alt="" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="work__author-caption work__caption">Автор</div>
                        <div className="work__author">
                            <div
                                style={{ backgroundImage: `url("${nft.author && nft.author.img}")` }}
                                className="work__author-img"
                            />
                            <div className="work__author-content">
                                <div className="work__author-name">{nft.author && nft.author.name}</div>
                                <Link to={`/authors/author?id=${nft.author_id}`} className="work__all-works">
                                    Посмотреть все работы
                                </Link>
                            </div>
                        </div>
                        <div className="work__check">
                            <img src={amountImg} alt="" /> Доступно к покупке:&nbsp;
                            <span>
                                {nft.available}/{nft.emission}
                            </span>
                        </div>
                        <div className="work__by">
                            <div>
                                <div className="work__caption">Цена</div>
                                <div className="work__price">
                                    <img src={avoImg} alt="" /> {nft.price} avo
                                </div>
                            </div>
                            <BuyBtn href={`https://t.me/AvoNFT_bot?start=nft_${nft.id}`} />
                        </div>
                    </div>
                    <div className="work__block">
                        <h1 className="work__title mobile">
                            {nft.title}
                            <span className="work__id">
                                <span>ID</span> {nft.id}
                            </span>
                        </h1>
                        {nft.id ? <NftView nft={nft} /> : ""}
                    </div>
                </div>
            </article>
        </>
    );
};

export default NftPage;
