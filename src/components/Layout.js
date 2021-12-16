import React from "react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import App from "./App";

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
