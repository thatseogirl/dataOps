import React, { useState } from "react";
import {
    Logo,
    Notification,
    GiHamburgerMenu,
    BsQuestionCircle,
    StyledContainer,
    Flex,
    NavBar,
    Input,
    Button,
    StyledUl,
    SideNav
} from "../index";

const MainNavigation = () => {
    const [openSideNav, setOpenSideNav] = useState(false);
    const handleClick = () => {
        setOpenSideNav(!openSideNav);
    };
    return (
        <StyledContainer>
            <NavBar>
                <Flex>
                    <img
                        src={Logo}
                        alt='logo'
                        style={{ width: "12%", paddingLeft: "8px" }}
                    />
                    <Flex>
                        <Input />
                        <Button text='Learn' className="learnBtn" />
                        <StyledUl>
                            <li>
                                <img src={Notification} alt='Notification' />
                            </li>
                            <li>
                                <BsQuestionCircle className="menuImage" size="1.5em" />
                            </li>
                            <li>
                                <GiHamburgerMenu className="menuImage" size="1.5em" onClick={handleClick} />
                            </li>
                        </StyledUl>
                    </Flex>
                </Flex>
            </NavBar>
            <SideNav openSideNav={openSideNav}
                onClose={() => setOpenSideNav(false)} />
        </StyledContainer>
    );
};

export default MainNavigation;
