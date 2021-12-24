import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ButtonSliderNext from "./ButtonSliderNext";
import ButtonSliderPrev from "./ButtonSliderPrev";
import "./popularjob.scss";

import Avo from "../../assets/icons/avocado-min.svg";

import Rocket from "../../assets/icons/rocket.svg";
import ButtonBeforeImg from "../../assets/image/gallery_before-img.png";
import axios from "axios";
import { Link } from "gatsby";

export default function PopularJob() {
    const settings = {
        dots: true,
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

    const [popularNft, setPopularNft] = useState(null);
    useEffect(() => {
        (async function getPopularNFT() {
            const res = await axios.get(
                `https://avonft.io/api/nft?limit=9&page=3`
            );
            setPopularNft(res.data);
        })();
    }, []);

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
                        {popularNft
                            ? popularNft.map((nft) => (
                                  <div
                                      className="Slide__Container-slideItem"
                                      key={nft.id}
                                  >
                                      <div className="slideContent">
                                          <Link
                                              to={`/gallery-nft/nft?id=${nft.id}`}
                                          >
                                              <div className="photo">
                                                  <img src={nft.img} alt="" />
                                              </div>
                                          </Link>
                                          <div className="content">
                                              <p>{nft.title}</p>
                                              <div className="price">
                                                  <div className="price-icon">
                                                      <img src={Avo} alt="" />
                                                  </div>
                                                  <div className="price-value">
                                                      <p>Цена</p>
                                                      <span>
                                                          {nft.price} avo
                                                      </span>
                                                  </div>
                                              </div>
                                              <Link
                                                  to={`/gallery-nft/nft?id=${nft.id}`}
                                              >
                                                  <button className="button-buy">
                                                      Купить
                                                  </button>
                                              </Link>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : ""}
                    </Slider>
                    <div className="gallery__button">
                        <img src={ButtonBeforeImg} alt="" /> Галерея NFT
                    </div>
                </div>
            </div>
        </section>
    );
}
