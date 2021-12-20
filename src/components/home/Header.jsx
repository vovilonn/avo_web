import React, { useEffect } from "react";
import "./header.scss";
import ButtonBeforeImg from "../assets/image/btn_img.png";
import Arrow from "../assets/image/arrow.svg";
import Logo from "../assets/image/logo.svg";
import { burger } from "../utils/main";
import { letterify } from "../utils/textRadius";

export default function Header() {
    useEffect(() => burger(), []);
    return (
        <div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            О компании
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Как это работает
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Преимущества
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Команда
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Новости
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">
                            Авторы
                        </a>
                    </li>
                </ul>
            </nav>

            <header className="header container">
                <a href="#" className="header__logo">
                    <img src={Logo} alt="" />
                </a>
                <div className="header__block">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="" className="nav__link">
                                    О компании
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">
                                    Как это работает
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">
                                    Преимущества
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">
                                    Команда
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="" className="nav__link">
                                    Новости
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__buttons">
                        <button className="header__green-btn green-btn">
                            <img src={ButtonBeforeImg} alt="" />
                            Галерея NFT
                            <img src={Arrow} alt="" />
                        </button>
                        <button className="header__br-btn border-btn">
                            Авторы
                        </button>
                        <button className="burger border-btn">
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}
