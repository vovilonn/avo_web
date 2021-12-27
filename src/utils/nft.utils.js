import musicSkeletonImg from "../images/music.jpg";
import vedeoSkeletonImg from "../images/video.jpg";
import categories from "./categories.json";

export function makeNftImageSrc(nft) {
    switch (nft.category_id) {
        case categories["Музыка"]:
            return musicSkeletonImg;

        case categories["Видео"]:
            return vedeoSkeletonImg;

        default:
            return nft.img;
    }
}
