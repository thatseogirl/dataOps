//components import
import Home from "./Router/Home";
import Input from "./reusableComponents/Input";
import Button from "./reusableComponents/Button";
import SideNav from "./Navigations/SideNav";

//image import
import Logo from "../asset/images/Logo.svg";
import Notification from "../asset/images/Notification.svg";

//react-icons import
import { BsQuestionCircle } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { GoSearch } from "react-icons/go"

// styles import
import { Flex, NavBar, StyledForm, StyledClickedForm, StyledUl } from "../asset/styles/Reusable.styled";
import { StyledContainer } from "../asset/styles/Container.styled";
import GlobalStyles from "../asset/styles/Global";
import { SideNavContainer } from "../asset/styles/StyledSideNav"


export {
    Home,
    Input,
    Button,
    SideNav,

    Logo,
    Notification,

    GiHamburgerMenu,
    BsQuestionCircle,
    GoSearch,

    StyledContainer,
    Flex,
    GlobalStyles,
    NavBar,
    StyledForm,
    StyledClickedForm,
    StyledUl,
    SideNavContainer

}