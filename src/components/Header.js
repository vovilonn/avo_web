import React from "react";
import GalleryBtn from "./GalleryBtn";
import BorderedBtn from "./BorderedBtn";
import logoImg from "../images/logo.svg";

import "./Header.scss";
import { Link } from "gatsby";
import BurgerMenuBtn from "./BurgerMenuBtn";

export default function Header() {
    return (
        <header className="header container">
            <Link to="/" className="header__logo">
                <img src={logoImg} alt="logo" />
            </Link>
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
                    <GalleryBtn to="/gallery-nft" />
                    <BorderedBtn text="Авторы" to="/authors" />
                    <BurgerMenuBtn />
                </div>
            </div>
        </header>
    );
}
