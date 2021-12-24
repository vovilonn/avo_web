import React from "react";
import GalleryBtn from "./GalleryBtn";
import BorderedBtn from "./BorderedBtn";
import logoImg from "../images/logo.svg";

import "./Header.scss";
import { Link } from "gatsby";
import BurgerMenuBtn from "./BurgerMenuBtn";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Header() {
    return (
        <header className="header container">
            <Link to="/">
                <img src={logoImg} alt="logo" className="header__logo" />
            </Link>
            <div className="header__block">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <AnchorLink to="/#about" className="nav__link">
                                О компании
                            </AnchorLink>
                        </li>
                        <li className="nav__item">
                            <AnchorLink to="/#howItWorks" className="nav__link">
                                Как это работает
                            </AnchorLink>
                        </li>
                        <li className="nav__item">
                            <AnchorLink to="/#advantages" className="nav__link">
                                Преимущества
                            </AnchorLink>
                        </li>
                        <li className="nav__item">
                            <AnchorLink to="/#team" className="nav__link">
                                Команда
                            </AnchorLink>
                        </li>
                        {/* <li className="nav__item">
                            <AnchorLink to="/#news" className="nav__link">
                                Новости
                            </AnchorLink>
                        </li> */}
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
