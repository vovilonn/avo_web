import React, { useState, useEffect } from "react";
import GalleryCategoriesBtn from "./CategoriesBtn";
import axios from "axios";
import categoryImg from "../images/categories_img-10.svg";
import { connect } from "react-redux";
import { setCategoryAction } from "../redux/actions/gallery.action";
import { Menu } from "antd";

import "./categories.scss";

function Categories({
    type = "nft",
    setCategory,
    setPagesLoaded,
    currentCatogory,
}) {
    const [categories, setCategories] = useState([]);
    const [currentCategoryName, setCurrentCategoryName] = useState("Все NFT");
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

            <Menu
                defaultSelectedKeys={["null"]}
                mode="inline"
                className="categories__btn__mobile"
                onSelect={(category) => {
                    if (category.key !== "null") {
                        const categoryName = categories.find(
                            ({ id }) => +id === +category.key
                        ).name;
                        console.log(categoryName);
                        setCurrentCategoryName(categoryName);
                    } else setCurrentCategoryName("Все NFT");
                    setCategory(category.key === "null" ? null : category.key);
                }}
            >
                <Menu.SubMenu
                    key="sub1"
                    icon={<img src={categoryImg} />}
                    title={`Категория: ${
                        currentCategoryName ? currentCategoryName : "Все NFT"
                    }`}
                >
                    {categories.map((category) => (
                        <Menu.Item key={category.id}>{category.name}</Menu.Item>
                    ))}
                    <Menu.Item key="null">Все NFT</Menu.Item>
                </Menu.SubMenu>
            </Menu>

            <ul className="categories__list">
                {categories.map((category) => (
                    <GalleryCategoriesBtn
                        text={category.name}
                        id={category.id}
                        key={category.id}
                        setPagesLoaded={setPagesLoaded}
                    />
                ))}
                <GalleryCategoriesBtn
                    text="Все NFT"
                    id={null}
                    img={categoryImg}
                    setPagesLoaded={setPagesLoaded}
                />
            </ul>
        </article>
    );
}

const mstp = ({ gallery }) => ({
    currentCatogory: gallery.category.current,
});

const mdtp = (dispatch) => ({
    setCategory: (categoryId) => dispatch(setCategoryAction(categoryId)),
});

export default connect(mstp, mdtp)(Categories);
