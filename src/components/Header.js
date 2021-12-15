import React from "react";
import GalleryBtn from "./GalleryBtn";
import BorderedBtn from "./borderedBtn";
import logoImg from "../images/logo.svg";

import "./Header.scss";

export default function Header() {
    return (
        <header className="header container">
            <a href="" className="header__logo">
                <img src={logoImg} alt="logo" />
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
                    <GalleryBtn />
                    <BorderedBtn text="Авторы" />
                    <button className="burger border-btn">
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
