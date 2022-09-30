import { NavLink } from "react-router-dom";
import {
    SideNavContainer,
    Flex,
    GrFormClose,
    StyledDiv,
    LineRule,
    IoIosSettings,
    MdOutlineFeedback
} from "../index";

const SideNav = ({ openSideNav, onClose }) => {
    if (!openSideNav) {
        return null;
    }
    return (
        <SideNavContainer>
            <Flex style={{ flexDirection: "column", gap: "1em" }}>
                <Flex style={{ justifyContent: "flex-end" }}>
                    <GrFormClose onClick={onClose} />
                </Flex>
                <div>
                    <ul>
                        <li>
                            ROOT ADMIN <IoIosSettings />
                        </li>
                        <li style={{ margin: "1em 0" }}>DataOps House BV</li>
                        <li>SignOut</li>
                    </ul>
                </div>

                <StyledDiv>
                    <LineRule />
                    <h3>Administration</h3>
                    <hr />
                    <ul>
                        <li>
                            <NavLink to='/environment'>Environment</NavLink>
                        </li>
                        <li>Accounts & access</li>
                        <li>Billings & payments</li>
                        <li>Cloud API Keys</li>
                        <li>Metrics</li>
                        <li>Single sign-on</li>
                    </ul>
                </StyledDiv>
                <StyledDiv>
                    <LineRule />
                    <ul>
                        <li>Contact us</li>
                        <li>Send Feedback <MdOutlineFeedback /></li>
                    </ul>
                </StyledDiv>
            </Flex>
        </SideNavContainer>
    );
};

export default SideNav;
