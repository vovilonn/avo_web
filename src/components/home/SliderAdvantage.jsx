import React, { Component } from "react";
import Slider from "react-slick";
import ButtonSliderNext from "./ButtonSliderNext";
import ButtonSliderPrev from "./ButtonSliderPrev";
import "./slideradvantage.scss";

import SlidePhoto_1 from "../../assets/image/adv_1.png";
import SlidePhoto_2 from "../../assets/image/adv_2.png";

import Crown from "../../assets/icons/crown.svg";
import { letterify } from "../../utils/textRadius";
import Rocket from "../../assets/icons/avocado-min.svg";

export default class SliderAdvantage extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: false,

            slidesToShow: 3,
            slidesToScroll: 3,
            nextArrow: <ButtonSliderNext />,
            prevArrow: <ButtonSliderPrev />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    },
                },
            ],
        };
        return (
            <section>
                <div className="Advantage__Container">
                    <div className="Slide__Container">
                        <div className="title">
                            <div className="title__img">
                                {" "}
                                <img src={Crown} alt="" />
                            </div>
                            <div className="title__name">
                                {" "}
                                <h2>Преимущества avonft</h2>
                            </div>
                        </div>
                        <Slider {...settings}>
                            <div className="Slide__Container-slideItem">
                                <div className="slideContent">
                                    <div className="photo">
                                        <img src={SlidePhoto_1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Полная правовая защита</h4>
                                        <p>
                                            Врамках проекта на нашем
                                            маркетплейсе в форме НФТ размещены
                                            объекты творчества во всех своих
                                            проявлениях. Живопись и музыка, фото
                                            и видео и даже детское творчество.
                                            Формат объектов предусматривает
                                            возможность передачи не только
                                            цифровых образов, но и их физических
                                            носителей. Продвижение авторов и их
                                            работ осуществляется на всех
                                            популярных платформах и социальных
                                            сетях.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="Slide__Container-slideItem">
                                <div className="slideContent">
                                    <div className="photo">
                                        <img src={SlidePhoto_1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Мультиформат Авокадо НФТ</h4>
                                        <p>
                                            Врамках проекта на нашем
                                            маркетплейсе в форме НФТ размещены
                                            объекты творчества во всех своих
                                            проявлениях. Живопись и музыка, фото
                                            и видео и даже детское творчество.
                                            Формат объектов предусматривает
                                            возможность передачи не только
                                            цифровых образов, но и их физических
                                            носителей. Продвижение авторов и их
                                            работ осуществляется на всех
                                            популярных платформах и социальных
                                            сетях.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="Slide__Container-slideItem">
                                <div className="slideContent">
                                    <div className="photo">
                                        <img src={SlidePhoto_2} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Сотрудничество</h4>
                                        <p>
                                            Врамках проекта на нашем
                                            маркетплейсе в форме НФТ размещены
                                            объекты творчества во всех своих
                                            проявлениях. Живопись и музыка, фото
                                            и видео и даже детское творчество.
                                            Формат объектов предусматривает
                                            возможность передачи не только
                                            цифровых образов, но и их физических
                                            носителей. Продвижение авторов и их
                                            работ осуществляется на всех
                                            популярных платформах и социальных
                                            сетях.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="Slide__Container-slideItem">
                                <div className="slideContent">
                                    <div className="photo">
                                        <img src={SlidePhoto_1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Мультиформат Авокадо НФТ</h4>
                                        <p>
                                            Врамках проекта на нашем
                                            маркетплейсе в форме НФТ размещены
                                            объекты творчества во всех своих
                                            проявлениях. Живопись и музыка, фото
                                            и видео и даже детское творчество.
                                            Формат объектов предусматривает
                                            возможность передачи не только
                                            цифровых образов, но и их физических
                                            носителей. Продвижение авторов и их
                                            работ осуществляется на всех
                                            популярных платформах и социальных
                                            сетях.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="Slide__Container-slideItem">
                                <div className="slideContent">
                                    <div className="photo">
                                        <img src={SlidePhoto_1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Мультиформат Авокадо НФТ</h4>
                                        <p>
                                            Врамках проекта на нашем
                                            маркетплейсе в форме НФТ размещены
                                            объекты творчества во всех своих
                                            проявлениях. Живопись и музыка, фото
                                            и видео и даже детское творчество.
                                            Формат объектов предусматривает
                                            возможность передачи не только
                                            цифровых образов, но и их физических
                                            носителей. Продвижение авторов и их
                                            работ осуществляется на всех
                                            популярных платформах и социальных
                                            сетях.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="Slide__Container-slideItem">
                                <div className="slideContent">
                                    <div className="photo">
                                        <img src={SlidePhoto_1} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>Мультиформат Авокадо НФТ</h4>
                                        <p>
                                            Врамках проекта на нашем
                                            маркетплейсе в форме НФТ размещены
                                            объекты творчества во всех своих
                                            проявлениях. Живопись и музыка, фото
                                            и видео и даже детское творчество.
                                            Формат объектов предусматривает
                                            возможность передачи не только
                                            цифровых образов, но и их физических
                                            носителей. Продвижение авторов и их
                                            работ осуществляется на всех
                                            популярных платформах и социальных
                                            сетях.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}
