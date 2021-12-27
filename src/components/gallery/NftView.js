import React from "react";
import ReactPlayer from "react-player";
import categories from "../../utils/categories.json";
import SmoothLoadedImage from "../SmoothLoadedImage";
import DownloadBtn from "./DownloadBtn";
import MusicPlayer from "./MusicPlayer";

const NftView = ({ nft }) => {
    console.log("id", nft.category_id);
    const isVideo = nft.category_id === categories["Видео"];
    const isMusic = nft.category_id === categories["Музыка"];

    return isMusic ? (
        <MusicPlayer src={`https://admin.avonft.io/${nft.other_files}`} />
    ) : (
        <div className="work__img-wrap">
            <DownloadBtn />
            {isVideo ? (
                <ReactPlayer
                    url={`https://admin.avonft.io/${nft.other_files}`}
                    playing
                    muted
                    loop={true}
                    className="work__img"
                    height="auto"
                    width="100%"
                />
            ) : (
                <SmoothLoadedImage
                    src={nft.img}
                    width="100%"
                    height="auto"
                    className="work__img"
                />
            )}
        </div>
    );
};

export default NftView;
