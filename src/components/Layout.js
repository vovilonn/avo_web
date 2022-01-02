import React from "react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import App from "./App";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import "./Layout.scss";

const Layout = ({ children }) => {
    return (
        <>
            <Provider store={store}>
                <App>{children}</App>
            </Provider>
        </>
    );
};

export default Layout;
