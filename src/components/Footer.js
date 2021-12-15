import React from "react";

import "./footer.scss";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer__content container">
                <div class="footer__block">
                    <a href="" class="footer__logo">
                        <img src="images/logo.svg" alt="" />
                    </a>
                    <div class="footer__desc">
                        AVOCADO - первый NFT маркетплейс в Telegram!
                    </div>
                    <ul class="footer__socials">
                        <li class="footer__social">
                            <a href="">
                                <img src="images/telegram.png" alt="" />
                            </a>
                        </li>
                        <li class="footer__social">
                            <a href="">
                                <img src="images/facebook.png" alt="" />
                            </a>
                        </li>
                        <li class="footer__social">
                            <a href="">
                                <img src="images/instagram.png" alt="" />
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
                    <img src="images/avo.svg" alt="" /> Начать пользоваться
                </a>
            </div>
            <div class="footer__copyright">
                Avonft 2021 © Все права защищены
            </div>
        </footer>
    );
};

export default Footer;
