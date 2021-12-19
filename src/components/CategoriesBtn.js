import { Spin } from "antd";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCategoryAction } from "../redux/actions/gallery.action";
import "./CategoriesBtn.scss";

const CategoriesBtn = ({
    text,
    id,
    img,
    setCategory,
    category,
    setPagesLoaded,
}) => {
    const [categoryImg, setCategoryImg] = useState({ default: img || null });

    useEffect(() => {
        (async function importImage() {
            setCategoryImg(await import(`../images/categories_img-${id}.svg`));
        })();
    }, []);

    return (
        <li
            className="categories__item"
            onClick={() => {
                setPagesLoaded({ current: 1, prev: 1 });
                setCategory(id);
            }}
        >
            <span
                className={`categories__btn ${
                    category === id ? "active" : ""
                } `}
            >
                {categoryImg.default ? (
                    <img
                        src={categoryImg.default}
                        className="categories__img"
                    />
                ) : (
                    <Spin className="categories__img loader" />
                )}
                {text}
            </span>
        </li>
    );
};

const mstp = ({ gallery }) => ({
    category: gallery.category.current,
});
const mdtp = (dispatch) => ({
    setCategory: (categoryId) => dispatch(setCategoryAction(categoryId)),
});

export default connect(mstp, mdtp)(CategoriesBtn);
