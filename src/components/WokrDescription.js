import React, { useState } from "react";

export default function WokrDescription({ text = "" }) {
    const [description, setDescription] = useState(
        text.trim().length > 100 ? text.slice(0, 100) + "..." : text
    );

    return (
        <>
            <div className="work__caption line">Краткое описание</div>
            <p className="work__desc">{description}</p>
            {text.trim().length > 100 ? (
                <button
                    className="work__more"
                    onClick={() => setDescription(text)}
                >
                    Развернуть
                </button>
            ) : (
                ""
            )}
        </>
    );
}
