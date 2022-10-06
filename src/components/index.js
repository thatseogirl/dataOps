//components import
import Home from "./Router/Home";
import Input from "./reusableComponents/Input";
import Button from "./reusableComponents/Button";
import SideNav from "./Navigations/SideNav";
import Environment from "./Router/Environment";
import ConfluentCloud from "./Router/ConfluentCloud";
import DefaultCluster from "./pages/DefaultCluster";
import DohCluster from "./pages/DohCluster";
import MainNavigation from "./Navigations/MainNavigation";
import BasicCluster from "./pages/BasicCluster";
import HatModal from "./pages/HatModal";
import Basic from "./NewCluster/Basic";
import Standard from "./NewCluster/Standard";
import Dedicated from "./NewCluster/Dedicated";

//image import
import Logo from "../asset/images/Logo.svg";
import Notification from "../asset/images/Notification.svg";
import Contact from "../asset/images/Contact.svg";
import FeedBack from "../asset/images/FeedBack.svg";
import BasicLogo from "../asset/images/BasicLogo.svg";
import StandardLogo from "../asset/images/StandardLogo.svg";
import DedicatedLogo from "../asset/images/DedicatedLogo.svg";
import Hat from "../asset/images/Hat.svg";
import Tree from "../asset/images/Tree.png";

//react-icons import
import { BsQuestionCircle, BsCircle } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import { GiHamburgerMenu, GiDiceSixFacesFour } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { GrFormClose } from "react-icons/gr";
import {
    IoIosSettings,
    IoIosArrowForward,
    IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import {
    HiOutlineMinus,
    HiOutlineArrowNarrowLeft,
    HiOutlineDotsHorizontal,
} from "react-icons/hi";

// styles import
import {
    Flex,
    NavBar,
    StyledForm,
    StyledClickedForm,
    StyledUl,
    Wrapper,
    StyledLogoHeader,
} from "../asset/styles/Reusable.styled";
import { StyledContainer, Container } from "../asset/styles/Container.styled";
import GlobalStyles from "../asset/styles/Global";
import {
    SideNavContainer,
    StyledDiv,
    Section,
} from "../asset/styles/StyledSideNav";
import { Tbody, Tr } from "../asset/styles/Table.styled";
import { Modal } from "../asset/styles/Modal.styled";
import {
    StyledBasicCluster,
    StyledDefaultWrapper,
    StyledDoh,
} from "../asset/styles/ConfluentCloud.styled";

export {
    Home,
    Input,
    Button,
    SideNav,
    Environment,
    ConfluentCloud,
    DefaultCluster,
    DohCluster,
    MainNavigation,
    BasicCluster,
    HatModal,
    Basic,
    Standard,
    Dedicated,
    Logo,
    Notification,
    Contact,
    FeedBack,
    DedicatedLogo,
    StandardLogo,
    BasicLogo,
    Hat,
    Tree,
    GiDiceSixFacesFour,
    AiOutlineWarning,
    GiHamburgerMenu,
    BsQuestionCircle,
    BsCircle,
    GoSearch,
    GrFormClose,
    IoIosSettings,
    MdOutlineFeedback,
    IoIosArrowForward,
    HiOutlineMinus,
    HiOutlineArrowNarrowLeft,
    HiOutlineDotsHorizontal,
    IoIosCheckmarkCircleOutline,
    StyledContainer,
    Container,
    Flex,
    GlobalStyles,
    NavBar,
    StyledForm,
    StyledClickedForm,
    StyledUl,
    SideNavContainer,
    StyledDiv,
    Section,
    Wrapper,
    StyledLogoHeader,
    Tbody,
    Tr,
    Modal,
    StyledBasicCluster,
    StyledDefaultWrapper,
    StyledDoh,
};
