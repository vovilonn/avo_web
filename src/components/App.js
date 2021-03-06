import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MobileNavbar from "./MobileNavbar";
import { toggleMenuAction } from "../redux/actions/menu.action";
import { connect } from "react-redux";
import { useSwipeable } from "react-swipeable";

function App({ children, toggleMenu }) {
    const [innerWidth, setInnerWidth] = useState();
    const swipeHandlers = useSwipeable({
        onSwipedRight: () => toggleMenu(true),
        delta: { right: innerWidth * 0.6 },
    });

    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, []);

    return (
        <div {...swipeHandlers}>
            <MobileNavbar />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

const mstp = ({ menu }) => ({});
const mdtp = (dispatch) => ({
    toggleMenu: () => dispatch(toggleMenuAction()),
});

export default connect(mstp, mdtp)(App);
