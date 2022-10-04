import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, GlobalStyles, Environment } from "./components";
import { ThemeProvider } from "styled-components";
import MainNavigation from "./components/Navigations/MainNavigation";

const theme = {
  colors: {
    primaryColor: "",
    bgColor_SideNav: "#fff",
    navBar: "#142B52",
    navigationMenu: "#45C6E8",
    footer: "",
    inputText: "#91a9bb",
    userName: "#BEC4CF",
    signOut: "F9F9F9",
    admin: "#8A8A8F",
  },
  responsiveness: {
    ipad: "768px",
    mobile: "500px",
  },
};
function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <MainNavigation />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/' element={<Environment />}></Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
