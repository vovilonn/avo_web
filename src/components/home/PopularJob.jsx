import React from "react";
import Slider from "react-slick";
import ButtonSliderNext from "./ButtonSliderNext";
import ButtonSliderPrev from "./ButtonSliderPrev";
import "./popularjob.scss";

import SlidePhoto_1 from "../../assets/image/photo_popular-1.png";
import SlidePhoto_2 from "../../assets/image/photo_popular-2.png";
import SlidePhoto_3 from "../../assets/image/photo_popular-3.png";

import Avo from "../../assets/icons/avocado-min.svg";

import Rocket from "../../assets/icons/rocket.svg";
import ButtonBeforeImg from "../../assets/image/gallery_before-img.png";

export default function PopularJob() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => <div className="slick__dots--custom"></div>,
        nextArrow: <ButtonSliderNext />,
        prevArrow: <ButtonSliderPrev />,
        responsive: [
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <section>
            <div className="Popular__Container">
                <div className="Slide__Container">
                    <div className="title">
                        <div className="title__img">
                            <img src={Rocket} alt="" />
                        </div>
                        <div className="title__name">
                            <h2>Популярные работы</h2>
                            <p>Наши лучшие работы на сегодняшний день</p>
                        </div>
                    </div>
                    <Slider {...settings}>
                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_1} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_2} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_3} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_1} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_2} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_3} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_1} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_2} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_3} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_1} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_2} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_3} alt="" />
                                </div>
                                <div className="content">
                                    <p>Описание работы</p>
                                    <div className="price">
                                        <div className="price-icon">
                                            <img src={Avo} alt="" />
                                        </div>
                                        <div className="price-value">
                                            <p>Цена</p>
                                            <span>3.14 avo</span>
                                        </div>
                                    </div>
                                    <button className="button-buy">
                                        Купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <div className="gallery__button">
                        <img src={ButtonBeforeImg} alt="" /> Галерея NFT
                    </div>
                </div>
            </div>
        </section>
    );
}
