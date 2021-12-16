import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleMenuAction } from "../redux/actions/menu.action";
import { useSwipeable } from "react-swipeable";

import "./MobileNavbar.scss";

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
                    <a href="" className="menu__link">
                        О компании
                    </a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">
                        Как это работает
                    </a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">
                        Преимущества
                    </a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">
                        Команда
                    </a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">
                        Новости
                    </a>
                </li>
                <li className="menu__item">
                    <a href="" className="menu__link">
                        Авторы
                    </a>
                </li>
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
