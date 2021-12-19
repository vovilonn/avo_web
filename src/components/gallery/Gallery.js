import React, { useEffect, useState } from "react";
import axios from "axios";
import Categories from "../Categories.js";
import GalleryCard from "./GalleryCard.js";
import LoadMoreBtn from "../LoadMoreBtn";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import AuthorCard from "../authors/AuthorCard.js";
import GalleryGridLoader from "../loaders/GalleryGridLoader.js";
import { connect } from "react-redux";
import ErrorMessage from "./ErrorMessage.js";

function Gallery({ type = "nft", authorId, category }) {
    const LIMIT_PER_PAGE = 24;
    const [pagesLoaded, setPagesLoaded] = useState({
        current: 1,
        prev: 1,
    });
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [pagesLoaded, category]);

    async function getData() {
        try {
            setLoading(true);
            let res;
            switch (type) {
                case "nft":
                    res = await axios.get(
                        `https://avonft.io/api/nft?limit=${LIMIT_PER_PAGE}&page=${
                            pagesLoaded.current
                        }${category ? "&category=" + category : ""}`
                    );
                    break;
                case "by-author":
                    res = await axios.get(
                        `https://avonft.io/api/nft/by-author/${authorId}?limit=${LIMIT_PER_PAGE}&page=${
                            pagesLoaded.current
                        }${category ? "&category=" + category : ""}`
                    );
                    break;
                case "authors":
                    res = await axios.get(
                        `https://avonft.io/api/author?limit=${LIMIT_PER_PAGE}&page=${
                            pagesLoaded.current
                        }${category ? "&category=" + category : ""}`
                    );
                    break;

                default:
                    break;
            }

            console.log(
                "🚀 ~ file: Gallery.js ~ line 59 ~ getData ~ pagesLoaded",
                pagesLoaded
            );
            setTimeout(() => {
                setLoading(false);
            }, 350);
            if (res.data.error) {
                setData(res.data);
            } else {
                const updatedData =
                    pagesLoaded.current === pagesLoaded.prev
                        ? res.data
                        : [...data, ...res.data];

                setData(updatedData);
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <Categories type={type} setPagesLoaded={setPagesLoaded} />
            <article className="gallery__works container">
                {data.length > 0 ? (
                    <>
                        <ul className="gallery__works__list">
                            {data.map((e) => (
                                <LazyLoadComponent key={e.id}>
                                    {type === "authors" ? (
                                        <AuthorCard author={e} />
                                    ) : (
                                        <GalleryCard nft={e} />
                                    )}
                                </LazyLoadComponent>
                            ))}
                        </ul>
                        <LoadMoreBtn
                            pagesLoaded={pagesLoaded}
                            setPagesLoaded={setPagesLoaded}
                            loading={loading}
                        />
                    </>
                ) : data.error ? (
                    <>
                        <ErrorMessage text="Не найдено :(" />
                        <ul className="gallery__works__list"></ul>
                    </>
                ) : (
                    <>
                        <ul className="gallery__works__list">
                            <GalleryGridLoader />
                        </ul>

                        <LoadMoreBtn
                            pagesLoaded={pagesLoaded}
                            setPagesLoaded={setPagesLoaded}
                            loading={loading}
                        />
                    </>
                )}
            </article>
        </>
    );
}

const mstp = ({ gallery }) => ({
    category: gallery.category.current,
});

export default connect(mstp)(Gallery);
