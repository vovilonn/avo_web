import { Link } from "gatsby";
import React from "react";

import "./BorderedBtn.scss";

 export default function BorderedBtn({ text, to }) {
    return (
        <Link
            to={to}
            className="header__br-btn border-btn"
        >
            {text || "empty"}
        </Link>
    );
}

