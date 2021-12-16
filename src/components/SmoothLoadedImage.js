import React, { useEffect, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function SmoothLoadedImage({ src, alt, placeholder, className, width, height }) {
    const [image, setImage] = useState(null);
    // const SmoothLoadImage = new Image();

    useEffect(() => {
       setTimeout(() => {
        const SmoothLoadImage = React.createElement(
        "img",
        {
           
            src: src,
            alt: alt,
            className: className,
        },
        null
    ); setImage(SmoothLoadImage);
       }, 2000);
       
        // SmoothLoadImage.onLoad = () => setImage(SmoothLoadImage);
    }, []);

    

    return (
        <LazyLoadComponent>
            <span style={{height, width, display: "inline-block"}}>{image || placeholder || ""}</span>
        </LazyLoadComponent>
    );
}
