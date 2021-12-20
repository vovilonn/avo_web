import React from "react";
import "./footer.scss";
import SocialButtons from "./SocialButtons";
import GetStartButton from "./GetStartButton";

import ButtonBeforeImg from "../assets/image/btn_img.png";
import Arrow from "../assets/image/arrow.svg";
import Logo from "../assets/image/logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content container">
                <div className="footer__block">
                    <a href="" className="footer__logo">
                        <img src={Logo} alt="" />
                    </a>
                    <div className="footer__desc">
                        AVOCADO - первый NFT маркетплейс в Telegram!
                    </div>
                    <ul className="footer__socials">
                        <SocialButtons />
                    </ul>
                </div>
                <nav className="footer__nav">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                О компании
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                Как это работает
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                Преимущества
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                Команда
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                Новости
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                Юр. информация
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="" className="footer__link">
                                Документы
                            </a>
                        </li>
                    </ul>
                </nav>
                <GetStartButton />
            </div>
            <div className="footer__copyright">
                Avonft 2021 © Все права защищены
            </div>
        </footer>
    );
};

export default Footer;
