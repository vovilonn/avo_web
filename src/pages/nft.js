import React from "react";
import Buybtn from "../components/BuyBtn";

import galleryImg from "../images/gallery_img-1.png";
import amountImg from "../images/nft.svg";
import avoImg from "../images/avo.svg";
import authorImg from "../images/people.png";

import "./nft.scss";
import BreadCrumbs from "../components/bread_crumbs/BreadCrumbs";

const NftPage = () => {
    return (
        <>
            <article class="work container">
                <BreadCrumbs />
                <div class="work__wrap">
                    <div class="work__content">
                        <h1 class="work__title">
                            Название работы в две строки
                            <span class="work__id">
                                <span>ID</span> 543782
                            </span>
                        </h1>
                        <div class="work__descriptions">
                            <div class="work__caption line">
                                Краткое описание
                            </div>
                            <p class="work__desc">
                                AVONFT - Это платформа для токенизации объектов
                                искусства посредством генерации NFT (Уникальных
                                невзаимозаменяемых токенов). Мы стремимся
                                создать технологичный и справедливый рынок прав
                                интеллектуальной собственности.
                            </p>
                            <p class="work__desc">
                                Таким образом наши пользователи смогут
                                приобщиться к миру цифрового искусства, а авторы
                                - токенизировать своё творчество и дополнительно
                                заработать на этом...
                            </p>
                            <a href="" class="work__more">
                                Развернуть
                            </a>
                            <div class="work__token">
                                <a href="" class="work__token-content">
                                    Smart-contract: 0x1234567890987654321
                                </a>
                                <div class="work__qr">
                                    <img src="images/qr.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="work__author-caption work__caption">
                            Автор
                        </div>
                        <div class="work__author">
                            <img
                                src={authorImg}
                                alt=""
                                class="work__author-img"
                            />
                            <div class="work__author-content">
                                <div class="work__author-name">
                                    Артемий Лебедев
                                </div>
                                <a href="" class="work__all-works">
                                    Посмотреть все работы
                                </a>
                            </div>
                        </div>
                        <div class="work__check">
                            <img src={amountImg} alt="" /> Доступно к покупке:
                            <span>1/1</span>
                        </div>
                        <div class="work__by">
                            <div>
                                <div class="work__caption">Цена</div>
                                <div class="work__price">
                                    <img src={avoImg} alt="" /> 3.14 avo
                                </div>
                            </div>
                            <Buybtn />
                        </div>
                    </div>
                    <div class="work__block">
                        <h1 class="work__title mobile">
                            Название работы в две строки
                            <span class="work__id">
                                <span>ID</span> 543782
                            </span>
                        </h1>
                        <div class="work__img-wrap">
                            <a href="" class="work__download">
                                <img src="images/download.svg" alt="" />
                            </a>
                            <img src={galleryImg} alt="" class="work__img" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default NftPage;
