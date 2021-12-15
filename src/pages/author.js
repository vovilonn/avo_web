import React from "react";
import Gallery from "../components/gallery/Gallery";

import telegramImg from "../images/telegram.png";
import facebookImg from "../images/facebook.png";
import instagramImg from "../images/instagram.png";
import avoImg from "../images/avo.svg";
import tickImg from "../images/tick.svg";
import authorImg from "../images/people_big-img.png";
import BreadCrumbs from "../components/bread_crumbs/BreadCrumbs";

export default function author() {
    return (
        <>
            <article class="work container">
                <BreadCrumbs />
                <div class="work__wrap">
                    <div class="work__content">
                        <h1 class="work__title">
                            Жуков Аркадий <img src="images/tick.svg" alt="" />
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
                        </div>
                        <ul class="footer__socials">
                            <li class="footer__social">
                                <a href="">
                                    <img src={telegramImg} alt="" />
                                </a>
                            </li>
                            <li class="footer__social">
                                <a href="">
                                    <img src={facebookImg} alt="" />
                                </a>
                            </li>
                            <li class="footer__social">
                                <a href="">
                                    <img src={instagramImg} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="work__block">
                        <h1 class="work__title mobile">
                            Жуков Аркадий <img src={tickImg} alt="" />
                        </h1>
                        <div class="work__img-wrap">
                            <img src={authorImg} alt="" class="work__img" />
                        </div>
                    </div>
                </div>
            </article>
            <Gallery />
        </>
    );
}
