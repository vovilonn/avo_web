import React from "react";

import "./header.scss";

export default function Header() {
    return (
        <header class="header container">
            <a href="" class="header__logo">
                <img src="images/logo.svg" alt="" />
            </a>
            <div class="header__block">
                <nav class="nav">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="" class="nav__link">
                                О компании
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="" class="nav__link">
                                Как это работает
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="" class="nav__link">
                                Преимущества
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="" class="nav__link">
                                Команда
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="" class="nav__link">
                                Новости
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="header__buttons">
                    <button class="header__green-btn green-btn">
                        <img src="images/btn_img.png" alt="" />
                        Галерея NFT
                        <img src="images/arrow.svg" alt="" />
                    </button>
                    <button class="header__br-btn border-btn">Авторы</button>
                    <button class="burger border-btn">
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
