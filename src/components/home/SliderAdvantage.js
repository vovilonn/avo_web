import React, { Component } from "react";
import Slider from "react-slick";
import ButtonSliderNext from "./ButtonSliderNext";
import ButtonSliderPrev from "./ButtonSliderPrev";
import "./slideradvantage.scss";

import SlidePhoto_1 from "../../assets/image/adv_1.png";
import SlidePhoto_2 from "../../assets/image/adv_2.png";

import Crown from "../../assets/icons/crown.svg";
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
        };
        return (
            <section id="advantages">
                <div className="Advantage__Container">
                    <div className="Slide__Container">
                        <div className="title">
                            <div className="title__img">
                                <img src={Crown} alt="" />
                            </div>
                            <div className="title__name">
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
                                        <h4>AvoNFT</h4>
                                        <p>
                                            Проект реализованный в самых
                                            доступных интерфейсах Единственный
                                            проект маркетплейса НФТ в Телеграм
                                            боте самом распространенном
                                            мессенджере Единственный
                                            русскоязычный маркетплейс НФТ
                                            Единственный маркетплейс НФТ с
                                            полноценной защитой авторских прав в
                                            соответствии с российским
                                            законодательством
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
                                        <h4>Полная правовая защита</h4>
                                        <p>
                                            AvoNFT обеспечивает авторам полную
                                            правовую поддержку по защите их
                                            авторских прав, а также защиту
                                            правообладателей осуществляя
                                            модерацию и проверку юридической
                                            чистоты размещаемых работ. AvoNFT
                                            полностью соответствует нормам
                                            действующего российского
                                            законодательства.
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
                                        <h4>Удобство</h4>
                                        <p>
                                            Проект реализован в самых доступных
                                            интерфейсах в виде telegram бота
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
                                        <h4>Технологичность</h4>
                                        <p>
                                            AvoNFT - это уникальный проект на
                                            основе современной цифровой
                                            технологии в блокчейн сети Binance
                                            Smart Chain Самый перспективный
                                            формат цифровых невзаимозаменяемых
                                            токенов BEP-1155 Возможность обмена
                                            NFT на другие объекты цифровых
                                            активов Возможность оплаты цифровых
                                            объектов с банковской карты в
                                            национальной валюте
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
                                        <h4>Ателье NFT</h4>
                                        <p>
                                            Мы помогаем авторам создавать
                                            цифровые образы их творчества в NFT
                                            Занимайтесь искусством, а мы возьмём
                                            на себя все рутинные технические
                                            процессы!
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
                                        <h4>Сотрудничество</h4>
                                        <p>
                                            Проект AvoNFT открыт для новых
                                            коллабораций и сотрудничества. Мы
                                            создаём и совершенствуем
                                            маркетинговые партнерские программы
                                            для наших клиентов и авторов
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
