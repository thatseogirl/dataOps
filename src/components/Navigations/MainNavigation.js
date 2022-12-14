import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Logo,
    Notification,
    GiHamburgerMenu,
    BsQuestionCircle,
    StyledContainer,
    Flex,
    NavBar,
    AllInput,
    Button,
    StyledUl,
    SideNav,
} from "../index";

const MainNavigation = () => {
    const [activeColor, setActiveColor] = useState(false);
    const [openSideNav, setOpenSideNav] = useState(false);
    const handleClick = () => {
        activeMenu();
        setOpenSideNav(!openSideNav);
    };
    const activeMenu = () => {
        setActiveColor((current) => !current);
    };
    const closeSideNav = () => {
        setActiveColor(false)
        setOpenSideNav(false)

    }
    return (
        <StyledContainer>
            <NavBar>
                <Flex>
                    <NavLink to="/" style={{ padding: "0.75em" }}>
                        <img
                            src={Logo}
                            alt='logo'
                            style={{ width: "65%" }}
                        />
                    </NavLink>

                    <Flex>
                        <Flex style={{ padding: "0.75em" }}>
                            <AllInput />
                            <Button text='Learn' className='learnBtn' />
                        </Flex>
                        <StyledUl>
                            <li className="nav_link">
                                <img
                                    src={Notification}
                                    alt='Notification'
                                    className='menuImage'
                                />
                            </li>
                            <li className="nav_link">
                                <BsQuestionCircle className='menuImage' size='1.5em' />
                            </li>
                            <li
                                style={{
                                    backgroundColor: activeColor ? "#45C6E8" : "",
                                }}
                                className="nav_link"
                            >
                                <GiHamburgerMenu
                                    className='menuImage'
                                    size='1.5em'
                                    onClick={handleClick}
                                    style={{
                                        color: activeColor ? "#fff" : "",
                                    }}
                                />
                            </li>
                        </StyledUl>
                    </Flex>
                </Flex>
            </NavBar>
            <SideNav
                openSideNav={openSideNav}
                onClose={closeSideNav}
            />
        </StyledContainer>
    );
};

export default MainNavigation;
