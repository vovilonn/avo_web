import React, { useEffect, useState } from "react";

import itemImg from "../../images/gallery_img-2.png";
import authorImg from "../../images/people_1.png";
import "./Author.scss";
import { Link } from "gatsby";
import SmoothLoadedImage from "../SmoothLoadedImage";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AuthorCard = ({ author }) => {
    const [nftImage, setNftImage] = useState(null);

    useEffect(() => {
        (async function getData() {
            try {
                const res = await axios.get(
                    `https://avonft.io/api/nft/by-author/${author.id}?limit=1`
                );

                if (res.data.error) {
                    setNftImage(itemImg);
                }
                const nft = res.data[0];

                setNftImage(nft.img);
            } catch (err) {
                console.error(err);
            }
        })();
    });

    return (
        <li className="authors__item">
            <Link to={`/authors/author?id=${author.id}`}>
                <div className="authors__img__wrap">
                    <SmoothLoadedImage
                        src={nftImage}
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
