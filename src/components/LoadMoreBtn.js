import React from "react";

import "./LoadMoreBtn.scss";

export default function LoadMoreBtn({ pagesLoaded, setPagesLoaded }) {
    return (
        <button
            className="works__load-more green-btn"
            onClick={() => setPagesLoaded(pagesLoaded + 1)}
        >
            Загрузить еще
        </button>
    );
}
