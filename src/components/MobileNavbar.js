import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleMenuAction } from "../redux/actions/menu.action";
import { useSwipeable } from "react-swipeable";

import "./MobileNavbar.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

function MobileNavbar({ opened, toggleMenu }) {
    useEffect(() => {
        document.body.style.overflow = opened ? "hidden" : "initial";
    }, [opened]);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => toggleMenu(false),
    });

    return (
        <nav className={`menu ${opened ? "visible" : ""}`} {...swipeHandlers}>
            <ul className="menu__list">
                <li className="menu__item">
                    <Link
                        to="/authors"
                        className="menu__link"
                        onClick={() => toggleMenu(false)}
                    >
                        Авторы
                    </Link>
                </li>
                <li className="menu__item">
                    <AnchorLink
                        to="/#about"
                        className="menu__link"
                        onAnchorLinkClick={() => toggleMenu(false)}
                    >
                        О компании
                    </AnchorLink>
                </li>
                <li className="menu__item">
                    <AnchorLink
                        to="/#howItWorks"
                        className="menu__link"
                        onAnchorLinkClick={() => toggleMenu(false)}
                    >
                        Как это работает
                    </AnchorLink>
                </li>
                <li className="menu__item">
                    <AnchorLink
                        to="/#advantages"
                        className="menu__link"
                        onAnchorLinkClick={() => toggleMenu(false)}
                    >
                        Преимущества
                    </AnchorLink>
                </li>
                <li className="menu__item">
                    <AnchorLink
                        to="/#team"
                        className="menu__link"
                        onAnchorLinkClick={() => toggleMenu(false)}
                    >
                        Команда
                    </AnchorLink>
                </li>
                {/* <li className="menu__item">
                    <AnchorLink
                        to="/#news"
                        className="menu__link"
                        onAnchorLinkClick={() => toggleMenu(false)}
                    >
                        Новости
                    </AnchorLink>
                </li> */}
            </ul>
        </nav>
    );
}

const mstp = ({ menu }) => ({
    opened: menu.menuIsActive,
});
const mdtp = (dispatch) => ({
    toggleMenu: () => dispatch(toggleMenuAction()),
});

export default connect(mstp, mdtp)(MobileNavbar);
