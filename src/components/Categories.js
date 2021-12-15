import React from "react";
import GalleryCategoriesBtn from "./CategoriesBtn";
import categoryImg from "../images/categories_img-1.svg";
export default function Categories() {
    return (
        <article className="categories container">
            <h2 className="categories__title">Категории</h2>
            <button className="categories__btn mobile">
                <img
                    src="images/categories_img-1.svg"
                    alt=""
                    className="categories__img"
                />
                DigitalArt
            </button>
            <ul className="categories__list">
                <GalleryCategoriesBtn text="DigitalArt" img={categoryImg} />
                <GalleryCategoriesBtn text="Видео" img={categoryImg} />
                <GalleryCategoriesBtn
                    text="Детское творчество"
                    img={categoryImg}
                />
                <GalleryCategoriesBtn text="Другое" img={categoryImg} />
                <GalleryCategoriesBtn text="Живопись" img={categoryImg} />
                <GalleryCategoriesBtn text="Литература" img={categoryImg} />
                <GalleryCategoriesBtn text="Музыка" img={categoryImg} />
                <GalleryCategoriesBtn text="Все NFT" img={categoryImg} />
            </ul>
        </article>
    );
}
