import React from "react";

import avoImg from "../../images/avo.svg";

import "./BreadCrumbs.scss";

export default function BreadCrumbs() {
    return (
        <div class="bread-crumbs container">
            <img src={avoImg} alt="" />
            <ul class="bread-crumbs__list">
                <li class="bread-crumbs__item">
                    <a href="" class="bread-crumbs__link">
                        Главнная
                    </a>
                </li>
                <li class="bread-crumbs__item">
                    <a href="" class="bread-crumbs__link">
                        Галерея работ
                    </a>
                </li>
                <li class="bread-crumbs__item">
                    <a href="" class="bread-crumbs__link">
                        Категория
                    </a>
                </li>
                <li class="bread-crumbs__item">
                    <a href="" class="bread-crumbs__link active">
                        Название работы
                    </a>
                </li>
            </ul>
        </div>
    );
}
