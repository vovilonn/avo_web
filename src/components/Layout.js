import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Footer from "./Footer";
import Header from "./Header";

import "./Layout.scss";
import MobileNavbar from "./MobileNavbar";

const Layout = ({ children }) => {
    return (
        <Provider store={store}>
            <MobileNavbar />
            <Header />
            <main>{children}</main>
            <Footer />
        </Provider>
    );
};

export default Layout;
