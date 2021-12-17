import React from "react";

import itemImg from "../../images/gallery_img-2.png";
import authorImg from "../../images/people_1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./Author.scss";
import { Link } from "gatsby";
import SmoothLoadedImage from "../SmoothLoadedImage";
const AuthorCard = ({ author }) => {
    return (
        <li className="authors__item">
            <Link to={`/authors/author?id=${author.id}`}>
                <div className="authors__img__wrap">
                    <SmoothLoadedImage
                        effect="opacity"
                        src={itemImg}
                        alt={author.description}
                        height="200px"
                        width="100%"
                        className="authors__img"
                    />
                </div>
                <div className="authors__author-wrap">
                    <SmoothLoadedImage
                        src={authorImg}
                        alt=""
                        className="authors__author"
                    />
                </div>
                <div className="authors__name">{author.name}</div>
                <div className="authors__desc">
                    {author.description.slice(0, 55) + "..."}
                </div>
            </Link>
        </li>
    );
};

export default AuthorCard;
