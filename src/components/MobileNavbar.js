import React from "react";
import { connect } from "react-redux";

import "./MobileNavbar.scss";

function MobileNavbar() {
    return (
        <nav class="menu">
            <ul class="menu__list">
                <li class="menu__item">
                    <a href="" class="menu__link">
                        О компании
                    </a>
                </li>
                <li class="menu__item">
                    <a href="" class="menu__link">
                        Как это работает
                    </a>
                </li>
                <li class="menu__item">
                    <a href="" class="menu__link">
                        Преимущества
                    </a>
                </li>
                <li class="menu__item">
                    <a href="" class="menu__link">
                        Команда
                    </a>
                </li>
                <li class="menu__item">
                    <a href="" class="menu__link">
                        Новости
                    </a>
                </li>
                <li class="menu__item">
                    <a href="" class="menu__link">
                        Авторы
                    </a>
                </li>
            </ul>
        </nav>
    );
}

const mstp = (state) => ({});

export default connect(mstp)(MobileNavbar);
