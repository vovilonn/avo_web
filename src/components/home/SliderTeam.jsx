import React, { useEffect } from "react";
import Slider from "react-slick";
import ButtonSliderNext from "./ButtonSliderNext";
import ButtonSliderPrev from "./ButtonSliderPrev";
import "./sliderteam.scss";

import SlidePhoto_2 from "../../assets/image/human-2.png";
import SlidePhoto_3 from "../../assets/image/human-3.png";
import SlidePhoto_4 from "../../assets/image/human-4.png";
import SlidePhoto_1 from "../../assets/image/human-1.png";
import SlidePhoto_5 from "../../assets/image/human-5.png";
import SlidePhoto_6 from "../../assets/image/human-6.png";
import TeamIcon from "../../assets/icons/team-icon.svg";
import { letterify } from "../../utils/textRadius";

export default function SliderTeam() {
    useEffect(() => letterify(), []);

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <ButtonSliderNext />,
        prevArrow: <ButtonSliderPrev />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },
        ],
    };
    return (
        <section>
            <div className="Team__Container">
                <div className="Slide__Container">
                    <div className="title">
                        <div className="title__img">
                            {" "}
                            <img src={TeamIcon} alt="" />
                        </div>
                        <h2>Команда проекта</h2>
                        <p>Мы всегда ищем новые таланты</p>
                    </div>
                    <Slider {...settings}>
                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_1} alt="" />
                                </div>
                                <div className="content">
                                    <h4>Жуков Аркадий</h4>
                                    <span>#NFT Артист</span>
                                    <p>
                                        Небольшое описание члена команды в вде
                                        строки
                                    </p>
                                    <div className="marker__list-job">
                                        <div className="rotate__text">
                                            <span
                                                data-letterify
                                                className="rounded rounded_1"
                                            >
                                                • Посмотреть работы
                                            </span>
                                            <div className="arrow__link"></div>
                                            <span
                                                data-letterify
                                                className="rounded rounded_2"
                                            >
                                                • Посмотреть работы
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_2} alt="" />
                                </div>
                                <div className="content">
                                    <h4>Артемий Лебедев</h4>
                                    <span>#Разработчик платформы</span>
                                    <p>
                                        Небольшое описание члена команды в вде
                                        строки
                                    </p>
                                    <div className="marker__list-job">
                                        <div className="rotate__text">
                                            <span
                                                data-letterify
                                                className="rounded rounded_1"
                                            >
                                                • Посмотреть работы
                                            </span>
                                            <div className="arrow__link"></div>
                                            <span
                                                data-letterify
                                                className="rounded rounded_2"
                                            >
                                                • Посмотреть работы
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_3} alt="" />
                                </div>
                                <div className="content">
                                    <h4>Вера Иванова</h4>
                                    <span>#Дизайнер</span>
                                    <p>
                                        Небольшое описание члена команды в вде
                                        строки
                                    </p>
                                    <div className="marker__list-job">
                                        <div className="rotate__text">
                                            <span
                                                data-letterify
                                                className="rounded rounded_1"
                                            >
                                                • Посмотреть работы
                                            </span>
                                            <div className="arrow__link"></div>
                                            <span
                                                data-letterify
                                                className="rounded rounded_2"
                                            >
                                                • Посмотреть работы
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_4} alt="" />
                                </div>
                                <div className="content">
                                    <h4>Лысый из Бразерс</h4>
                                    <span>#NFT Продюсер</span>
                                    <p>
                                        Небольшое описание члена команды в вде
                                        строки
                                    </p>
                                    <div className="marker__list-job">
                                        <div className="rotate__text">
                                            <span
                                                data-letterify
                                                className="rounded rounded_1"
                                            >
                                                • Посмотреть работы
                                            </span>
                                            <div className="arrow__link"></div>
                                            <span
                                                data-letterify
                                                className="rounded rounded_2"
                                            >
                                                • Посмотреть работы
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_5} alt="" />
                                </div>
                                <div className="content">
                                    <h4>Рикардо Милос</h4>
                                    <span>#Подтанцовка</span>
                                    <p>
                                        Небольшое описание члена команды в вде
                                        строки
                                    </p>
                                    <div className="marker__list-job">
                                        <div className="rotate__text">
                                            <span
                                                data-letterify
                                                className="rounded rounded_1"
                                            >
                                                • Посмотреть работы
                                            </span>
                                            <div className="arrow__link"></div>
                                            <span
                                                data-letterify
                                                className="rounded rounded_2"
                                            >
                                                • Посмотреть работы
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Slide__Container-slideItem">
                            <div className="slideContent">
                                <div className="photo">
                                    <img src={SlidePhoto_6} alt="" />
                                </div>
                                <div className="content">
                                    <h4>Саша Грэй</h4>
                                    <span>#Актриса</span>
                                    <p>
                                        Небольшое описание члена команды в вде
                                        строки
                                    </p>
                                    <div className="marker__list-job">
                                        <div className="rotate__text">
                                            <span
                                                data-letterify
                                                className="rounded rounded_1"
                                            >
                                                • Посмотреть работы
                                            </span>
                                            <div className="arrow__link"></div>
                                            <span
                                                data-letterify
                                                className="rounded rounded_2"
                                            >
                                                • Посмотреть работы
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}
