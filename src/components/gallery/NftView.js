import React from "react";
import ReactPlayer from "react-player";
import categories from "../../utils/categories.json";
import SmoothLoadedImage from "../SmoothLoadedImage";
import DownloadFileBtn from "./DownloadFileBtn";
import DownloadImageBtn from "./DownloadImageBtn";
import MusicPlayer from "./MusicPlayer";

const NftView = ({ nft }) => {
    console.log("id", nft.category_id);
    const isVideo = nft.category_id === categories["Видео"];
    const isMusic = nft.category_id === categories["Музыка"];

    return isMusic ? (
        <>
            <DownloadFileBtn src={nft.other_files} />
            <MusicPlayer src={`https://admin.avonft.io/${nft.other_files}`} />
        </>
    ) : (
        <div className="work__img-wrap">
            {isVideo ? (
                <>
                    <DownloadFileBtn src={nft.other_files} />
                    <ReactPlayer
                        url={`https://admin.avonft.io/${nft.other_files}`}
                        playing
                        muted
                        loop={true}
                        className="work__img"
                        height="auto"
                        width="100%"
                    />
                </>
            ) : (
                <>
                    <DownloadImageBtn src={nft.img} />
                    <SmoothLoadedImage
                        src={nft.img}
                        width="100%"
                        height="auto"
                        className="work__img"
                    />
                </>
            )}
        </div>
    );
};

export default NftView;
