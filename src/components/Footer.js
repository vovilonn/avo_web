import React from "react";
import logoImg from "../images/logo.svg";
import telegramImg from "../images/telegram.png";
import facebookImg from "../images/facebook.png";
import instagramImg from "../images/instagram.png";
import avoImg from "../images/avo.svg";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container" id="footer__content">
                <div class="footer__block">
                    <a href="" class="footer__logo">
                        <img src={logoImg} alt="" />
                    </a>
                    <div class="footer__desc">
                        AVOCADO - первый NFT маркетплейс в Telegram!
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
                <nav class="footer__nav">
                    <ul class="footer__list">
                        <li class="footer__item">
                            <a href="" class="footer__link">
                                О компании
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="" class="footer__link">
                                Как это работает
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="" class="footer__link">
                                Преимущества
                            </a>
                        </li>
                    </ul>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <a href="" class="footer__link">
                                Команда
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="" class="footer__link">
                                Новости
                            </a>
                        </li>
                    </ul>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <a href="" class="footer__link">
                                Юр. информация
                            </a>
                        </li>
                        <li class="footer__item">
                            <a href="" class="footer__link">
                                Документы
                            </a>
                        </li>
                    </ul>
                </nav>
                <a href="" class="footer__btn green-btn">
                    <img src={avoImg} alt="" /> Начать пользоваться
                </a>
            </div>
            <div class="footer__copyright">
                Avonft {new Date().getFullYear()} © Все права защищены
            </div>
        </footer>
    );
};

export default Footer;
