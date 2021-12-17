import React, { useState, useEffect } from "react";
import GalleryCategoriesBtn from "./CategoriesBtn";
import axios from "axios";
import categoryImg from "../images/categories_img-10.svg";
import { connect } from "react-redux";
import { setCategoryAction } from "../redux/actions/gallery.action";

function Categories({ type = "nft", setCategory }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
        return () => setCategory(null);
    }, []);

    async function getCategories() {
        let res;
        switch (type) {
            case "nft":
                res = await axios.get("https://avonft.io/api/category/nft");
                break;

            case "by-author":
                res = await axios.get("https://avonft.io/api/category/nft");
                break;

            case "authors":
                res = await axios.get("https://avonft.io/api/category/author");
                break;

            default:
                break;
        }
        setCategories(res.data);
    }

    return (
        <article className="categories container">
            <h2 className="categories__title">Категории</h2>
            <button className="categories__btn mobile">
                <img src={categoryImg} alt="" className="categories__img" />
                DigitalArt
            </button>
            <ul className="categories__list">
                {categories.map((category) => (
                    <GalleryCategoriesBtn
                        text={category.name}
                        id={category.id}
                        key={category.id}
                    />
                ))}

                <GalleryCategoriesBtn
                    text="Все NFT"
                    id={null}
                    img={categoryImg}
                />
            </ul>
        </article>
    );
}

const mstp = () => ({});
const mdtp = (dispatch) => ({
    setCategory: (categoryId) => dispatch(setCategoryAction(categoryId)),
});

export default connect(mstp, mdtp)(Categories);
