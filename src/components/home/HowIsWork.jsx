import React from "react";

import "./howisword.scss";

import Ligthbolt from "../../assets/icons/lightbolt.svg";
import Success from "../../assets/image/success.png";

import GetStartButton from "./GetStartButton";

const HowIsWork = () => {
    return (
        <section>
            <div className="how__work">
                <div className="how__work-content">
                    <div className="content__title">
                        <div className="title">
                            <div className="title__img">
                                <img src={Ligthbolt} alt="" />
                            </div>
                            <div className="title__name">
                                <h2>Как это работает</h2>
                                <p>Работа снами поэтапно</p>
                            </div>
                        </div>
                        <GetStartButton />
                    </div>
                    <div className="content__items">
                        <div className="item">
                            <div className="item__img">
                                <div className="item__number">1</div>
                                <img src={Success} alt="Success" />
                            </div>
                            <h5>Шаг 1</h5>
                            <p>
                                Технологии интернета стремительно развиваются и
                                2021 год стал стартовым для бурного развития
                                нового этапа совершенствования цифровой среды.{" "}
                            </p>
                        </div>
                        <div className="item">
                            <div className="item__img">
                                <div className="item__number">2</div>
                                <img src={Success} alt="Success" />
                            </div>
                            <h5>Шаг 2</h5>
                            <p>
                                Технологии интернета стремительно развиваются и
                                2021 год стал стартовым для бурного развития
                                нового этапа совершенствования цифровой среды.{" "}
                            </p>
                        </div>
                        <div className="item">
                            <div className="item__img">
                                <div className="item__number">3</div>
                                <img src={Success} alt="Success" />
                            </div>
                            <h5>Шаг 3</h5>
                            <p>
                                Технологии интернета стремительно развиваются и
                                2021 год стал стартовым для бурного развития
                                нового этапа совершенствования цифровой среды.{" "}
                            </p>
                        </div>
                        <div className="item">
                            <div className="item__img">
                                <div className="item__number">4</div>
                                <img src={Success} alt="Success" />
                            </div>
                            <h5>Шаг 4</h5>
                            <p>
                                Технологии интернета стремительно развиваются и
                                2021 год стал стартовым для бурного развития
                                нового этапа совершенствования цифровой среды.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowIsWork;