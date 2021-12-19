import React, { useState, useEffect } from "react";
import GalleryCategoriesBtn from "./CategoriesBtn";
import axios from "axios";
import categoryImg from "../images/categories_img-10.svg";
import { connect } from "react-redux";
import { setCategoryAction } from "../redux/actions/gallery.action";
import { Menu } from "antd";

import "./categories.scss";
import "antd/dist/antd.css";

function Categories({ type = "nft", setCategory, setPagesLoaded }) {
    const [categories, setCategories] = useState([]);
    const { SubMenu } = Menu;

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
            <h2 className="categories__title"> Категории </h2>
            {/* <div className="categories__btn mobile"> */}
            <Menu
                onClick={() => console.log("click")}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                className="categories__btn__mobile"
            >
                <SubMenu
                    key="sub1"
                    icon={<img src={categoryImg} />}
                    title="Navigation One"
                >
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
            </Menu>
            {/* </div> */}

            {/* <div>
                <button className="categories__btn mobile">
                    <img src={categoryImg} alt="" className="categories__img" />
                    DigitalArt
                </button>
            </div> */}
            <ul className="categories__list">
                {categories.map((category) => (
                    <GalleryCategoriesBtn
                        text={category.name}
                        id={category.id}
                        key={category.id}
                        setPagesLoaded={setPagesLoaded}
                        mobile={true}
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

const mstp = () => ({});
const mdtp = (dispatch) => ({
    setCategory: (categoryId) => dispatch(setCategoryAction(categoryId)),
});

export default connect(mstp, mdtp)(Categories);
