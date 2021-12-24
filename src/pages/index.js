import React from "react";
import "./home.scss";
import TopBlock from "../components/home/TopBlock";
import SliderNews from "../components/home/SliderNews";
import SliderTeam from "../components/home/SliderTeam";
import SliderAdvantage from "../components/home/SliderAdvantage";
import HowIsWork from "../components/home/HowIsWork";
import PopularJob from "../components/home/PopularJob";
import About from "../components/home/About";

import "../components/home/background.scss";

const Home = () => {
    return (
        <div className="container">
            <TopBlock />
            <PopularJob />
            <About />
            <HowIsWork />
            <SliderAdvantage />
            <SliderTeam />
            <div className="footer-fix"></div>
            {/* <SliderNews /> */}
        </div>
    );
};

export default Home;
