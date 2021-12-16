import React from "react";
import logoImg from "../images/logo.svg";
import telegramImg from "../images/telegram.png";
import facebookImg from "../images/facebook.png";
import instagramImg from "../images/instagram.png";
import avoImg from "../images/avo.svg";

import "./Footer.scss";
import { Link } from "gatsby";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container" id="footer__content">
                <div className="footer__block">
                    <Link to="/" className="footer__logo">
                        <img src={logoImg} alt="" />
                    </Link>
                    <div className="footer__desc">
                        AVOCADO - первый NFT маркетплейс в Telegram!
                    </div>
                    <ul className="footer__socials">
                        <li className="footer__social">
                            <a href="https://t.me/AvoNFT_bot" target="_blank">
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
                <a
                    href="https://t.me/AvoNFT_bot"
                    target="_blank"
                    className="footer__btn green-btn"
                >
                    <img src={avoImg} alt="" /> Начать пользоваться
                </a>
            </div>
            <div className="footer__copyright">
                Avonft {new Date().getFullYear()} © Все права защищены
            </div>
        </footer>
    );
};

export default Footer;
