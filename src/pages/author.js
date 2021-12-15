import React from "react";
import Gallery from "../components/gallery/Gallery";

import telegramImg from "../images/telegram.png";
import facebookImg from "../images/facebook.png";
import instagramImg from "../images/instagram.png";
import tickImg from "../images/tick.svg";
import authorImg from "../images/people_big-img.png";
import BreadCrumbs from "../components/bread_crumbs/BreadCrumbs";

export default function author() {
    return (
        <>
            <article className="work container">
                <BreadCrumbs />
                <div className="work__wrap">
                    <div className="work__content">
                        <h1 className="work__title">
                            Жуков Аркадий <img src={tickImg} alt="" />
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
                            <img src={authorImg} alt="" className="work__img" />
                        </div>
                    </div>
                </div>
            </article>
            <Gallery />
        </>
    );
}
