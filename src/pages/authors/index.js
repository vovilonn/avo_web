import React, { useState, useEffect } from "react";
import BreadCrumbs from "../../components/bread_crumbs/BreadCrumbs";
import "../authors.scss";
import Gallery from "../../components/gallery/Gallery";

export default function Authors() {
    return (
        <>
            <BreadCrumbs />
            <Gallery type="authors" />
        </>
    );
}
