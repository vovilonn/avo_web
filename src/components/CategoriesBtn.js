import React from "react";

import "./CategoriesBtn.scss";

const CategoriesBtn = ({ text, img }) => {
    return (
        <li className="categories__item">
            <a href="" className="categories__btn">
                <img src={img} alt="" className="categories__img" />
                {text}
            </a>
        </li>
    );
};

export default CategoriesBtn;
