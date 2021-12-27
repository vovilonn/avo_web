import axios from "axios";
import React, { useEffect } from "react";
import downloadImg from "../../images/download.svg";

export default function DownloadBtn({ src }) {
    useEffect(() => {
        (async function getDownloadUrl() {
            const res = await axios.get("https://avonft.io/api/nft/19");
            console.log(res.data);
        })();
    }, []);

    return (
        <a
            href={src}
            download
            target="_blank"
            rel="noreferrer"
            className="work__download"
        >
            <img src={downloadImg} alt="" />
        </a>
    );
}
