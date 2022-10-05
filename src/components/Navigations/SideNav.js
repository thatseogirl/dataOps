import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { userDetails } from "../Content";
import {
    SideNavContainer,
    Flex,
    GrFormClose,
    StyledDiv,
    IoIosSettings,
    FeedBack,
    Contact,
    Section,
} from "../index";
import { StyledLi } from "../../asset/styles/StyledSideNav";

const SideNav = ({ openSideNav, onClose }) => {
    const [user, setUser] = useState(userDetails);

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    if (!openSideNav) {
        return null;
    }
    return (
        <SideNavContainer>
            <Flex style={{ flexDirection: "column", gap: "1em" }}>
                <Section>
                    <Flex style={{ justifyContent: "flex-end" }}>
                        <GrFormClose onClick={onClose} />
                    </Flex>
                </Section>

                {user.map((data) => (
                    <Section key={data.id}>
                        <ul>
                            <li>
                                {data.username}
                                <IoIosSettings style={{ marginLeft: "0.5em" }} />
                            </li>
                            <li style={{ margin: "1em 0", color: "#5E9EBA" }}>
                                {data.organisation}
                            </li>
                            <li style={{ color: "#8A8A8F" }}>SignOut</li>
                        </ul>
                    </Section>
                ))}
                <hr className='line_rule' />
                <StyledDiv>
                    <p style={{ textTransform: "uppercase", padding: "0 2.25em" }}>
                        Administration
                    </p>
                    <hr className='admin_line_rule' />
                    <Flex
                        style={{
                            gap: "0.5em",
                            flexDirection: "column",
                            marginTop: "1.25em",
                        }}
                    >
                        <StyledLi className={splitLocation[1] === "" ? "active" : ""}>
                            <NavLink
                                to='/environment'
                                style={{ textDecoration: "none", color: "#8A8A8F" }}
                            >
                                Environment
                            </NavLink>
                        </StyledLi>
                        <StyledLi>Accounts & access</StyledLi>
                        <StyledLi>Billings & payments</StyledLi>
                        <StyledLi>Cloud API Keys</StyledLi>
                        <StyledLi>Metrics</StyledLi>
                        <StyledLi>Single sign-on</StyledLi>
                    </Flex>
                </StyledDiv>
                <StyledDiv>
                    <hr className='line_rule' />
                    <Flex
                        style={{ gap: "0.25em", flexDirection: "column", marginTop: "1em" }}
                    >
                        <StyledLi>
                            Contact us
                            <img
                                src={Contact}
                                alt='Contact'
                                style={{ marginLeft: "0.5em" }}
                            />
                        </StyledLi>
                        <StyledLi>
                            Send FeedBack
                            <img
                                src={FeedBack}
                                alt='FeedBack'
                                style={{ marginLeft: "0.5em" }}
                            />
                        </StyledLi>
                    </Flex>
                </StyledDiv>
            </Flex>
        </SideNavContainer>
    );
};

export default SideNav;
