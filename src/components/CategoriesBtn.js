import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCategoryAction } from "../redux/actions/gallery.action";
import "./CategoriesBtn.scss";
import BallScaleLoader from "./loaders/BallScaleLoader";

const CategoriesBtn = ({ text, id, img, setCategory, category }) => {
    const [categoryImg, setCategoryImg] = useState({ default: img || null });

    useEffect(() => {
        (async function importImage() {
            setCategoryImg(await import(`../images/categories_img-${id}.svg`));
        })();
    }, []);

    return (
        <li className="categories__item" onClick={() => setCategory(id)}>
            <span
                className={`categories__btn ${category === id ? "active" : ""}`}
            >
                {categoryImg.default ? (
                    <img
                        src={categoryImg.default}
                        className="categories__img"
                    />
                ) : (
                    <BallScaleLoader scale="0.3" className="categories__img" />
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
