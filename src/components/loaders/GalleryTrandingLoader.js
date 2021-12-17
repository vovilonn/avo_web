import React from "react";
import ContentLoader from "react-content-loader";

import "./GalleryTrandingLoader.scss";

const GalleryTrandingLoader = (props) => (
    <ContentLoader
        speed={2}
        viewBox="0 0 1440 600"
        backgroundColor="#ebebeb"
        foregroundColor="#f2f2f2"
        className="gallery__tranding-loader"
        {...props}
    >
        <path d="M 541.12 589.59 H 24.81 C 11.11 589.59 0 578.48 0 564.78 V 36.62 c 0 -13.7 11.11 -24.81 24.81 -24.81 h 516.31 c 13.7 0 24.81 11.11 24.81 24.81 v 528.16 c 0 13.7 -11.11 24.81 -24.81 24.81 z M 604.56 294.79 h 230.92 c 13.96 0 25.28 -11.32 25.28 -25.28 V 38.59 c 0 -13.96 -11.32 -25.28 -25.28 -25.28 H 604.56 c -13.96 0 -25.28 11.32 -25.28 25.28 v 230.92 c 0 13.96 11.32 25.28 25.28 25.28 z M 897.89 294.79 h 230.92 c 13.96 0 25.28 -11.32 25.28 -25.28 V 38.59 c 0 -13.96 -11.32 -25.28 -25.28 -25.28 H 897.89 c -13.96 0 -25.28 11.32 -25.28 25.28 v 230.92 c 0 13.96 11.32 25.28 25.28 25.28 z M 1185.3 294.79 h 230.92 c 13.96 0 25.28 -11.32 25.28 -25.28 V 38.59 c 0 -13.96 -11.32 -25.28 -25.28 -25.28 H 1185.3 c -13.96 0 -25.28 11.32 -25.28 25.28 v 230.92 c 0 13.96 11.32 25.28 25.28 25.28 z M 1182.3 591.09 h 230.92 c 13.96 0 25.28 -11.32 25.28 -25.28 V 334.89 c 0 -13.96 -11.32 -25.28 -25.28 -25.28 H 1182.3 c -13.96 0 -25.28 11.32 -25.28 25.28 v 230.92 c 0 13.96 11.32 25.28 25.28 25.28 z M 601.56 591.09 h 230.92 c 13.96 0 25.28 -11.32 25.28 -25.28 V 334.89 c 0 -13.96 -11.32 -25.28 -25.28 -25.28 H 601.56 c -13.96 0 -25.28 11.32 -25.28 25.28 v 230.92 c 0 13.96 11.32 25.28 25.28 25.28 z M 891.93 591.09 h 230.92 c 13.96 0 25.28 -11.32 25.28 -25.28 V 334.89 c 0 -13.96 -11.32 -25.28 -25.28 -25.28 H 891.93 c -13.96 0 -25.28 11.32 -25.28 25.28 v 230.92 c 0 13.96 11.32 25.28 25.28 25.28 z" />
    </ContentLoader>
);

export default GalleryTrandingLoader;