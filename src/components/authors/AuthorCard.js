import React, { useEffect, useState } from "react";

import itemImg from "../../images/gallery_img-2.png";
import authorImg from "../../images/people_1.png";
import "./Author.scss";
import { Link } from "gatsby";
import SmoothLoadedImage from "../SmoothLoadedImage";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AuthorCard = ({ author }) => {
    return (
        <li className="authors__item">
            <Link to={`/authors/author?id=${author.id}`}>
                <div className="authors__img__wrap">
                    <SmoothLoadedImage
                        src={"https://admin.avonft.io" + author.img}
                        alt={author.description}
                        height="200px"
                        width="100%"
                        className="authors__img"
                    />
                </div>

                <div className="authors__author-wrap" />

                <div className="authors__name">{author.name}</div>
                <div className="authors__desc">{author.description}</div>
            </Link>
        </li>
    );
};

export default AuthorCard;
