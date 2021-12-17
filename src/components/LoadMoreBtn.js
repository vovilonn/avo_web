import React from "react";
import BallBeatLoader from "./loaders/BallBeatLoader";

import "./LoadMoreBtn.scss";

export default function LoadMoreBtn({ pagesLoaded, setPagesLoaded, loading }) {
    return (
        <button
            className="works__load-more green-btn"
            onClick={() => setPagesLoaded(pagesLoaded + 1)}
        >
            {loading ? <BallBeatLoader scale="0.8" /> : " Загрузить еще"}
        </button>
    );
}
