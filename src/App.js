import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  GlobalStyles,
  Environment,
  ConfluentCloud,
  MainNavigation,
} from "./components";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "",
    bgColor_SideNav: "#fff",
    navBar: "#142B52",
    navigationMenu: "#45C6E8",
    border: "#E2E2E8",
    inputText: "#91a9bb",
    userName: "#BEC4CF",
    secondaryColor: "F9F9F9",
    admin: "#8A8A8F",
    darkDim: "#191924",
  },
  responsiveness: {
    desktop: "1200px",
    ipad: "990px",
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
            <Route path='/environment' element={<Environment />}></Route>
            <Route path='/confluentCloud' element={<ConfluentCloud />}></Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
