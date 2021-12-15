import React from "react";
import Buybtn from "../../components/BuyBtn";

import galleryImg from "../../images/gallery_img-1.png";
import amountImg from "../../images/nft.svg";
import avoImg from "../../images/avo.svg";
import authorImg from "../../images/people.png";
import qrImg from "../../images/qr.png";
import downloadImg from "../../images/download.svg";

import "../nft.scss";
import BreadCrumbs from "../../components/bread_crumbs/BreadCrumbs";

const NftPage = () => {
    return (
        <>
            <article className="work container">
                <BreadCrumbs />
                <div className="work__wrap">
                    <div className="work__content">
                        <h1 className="work__title">
                            Название работы в две строки
                            <span className="work__id">
                                <span>ID</span> 543782
                            </span>
                        </h1>
                        <div className="work__descriptions">
                            <div className="work__caption line">
                                Краткое описание
                            </div>
                            <p className="work__desc">
                                AVONFT - Это платформа для токенизации объектов
                                искусства посредством генерации NFT (Уникальных
                                невзаимозаменяемых токенов). Мы стремимся
                                создать технологичный и справедливый рынок прав
                                интеллектуальной собственности.
                            </p>
                            <p className="work__desc">
                                Таким образом наши пользователи смогут
                                приобщиться к миру цифрового искусства, а авторы
                                - токенизировать своё творчество и дополнительно
                                заработать на этом...
                            </p>
                            <a href="" className="work__more">
                                Развернуть
                            </a>
                            <div className="work__token">
                                <a href="" className="work__token-content">
                                    Smart-contract: 0x1234567890987654321
                                </a>
                                <div className="work__qr">
                                    <img src={qrImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="work__author-caption work__caption">
                            Автор
                        </div>
                        <div className="work__author">
                            <img
                                src={authorImg}
                                alt=""
                                className="work__author-img"
                            />
                            <div className="work__author-content">
                                <div className="work__author-name">
                                    Артемий Лебедев
                                </div>
                                <a href="" className="work__all-works">
                                    Посмотреть все работы
                                </a>
                            </div>
                        </div>
                        <div className="work__check">
                            <img src={amountImg} alt="" /> Доступно к покупке:
                            <span>1/1</span>
                        </div>
                        <div className="work__by">
                            <div>
                                <div className="work__caption">Цена</div>
                                <div className="work__price">
                                    <img src={avoImg} alt="" /> 3.14 avo
                                </div>
                            </div>
                            <Buybtn />
                        </div>
                    </div>
                    <div className="work__block">
                        <h1 className="work__title mobile">
                            Название работы в две строки
                            <span className="work__id">
                                <span>ID</span> 543782
                            </span>
                        </h1>
                        <div className="work__img-wrap">
                            <a href="" className="work__download">
                                <img src={downloadImg} alt="" />
                            </a>
                            <img
                                src={galleryImg}
                                alt=""
                                className="work__img"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default NftPage;
