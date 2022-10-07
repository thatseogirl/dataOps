
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import {
  Home,
  GlobalStyles,
  Environment,
  ConfluentCloud,
  MainNavigation,
} from "./components";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

const theme = {
  colors: {
    primaryColor: "",
    bgColor_SideNav: "#fff",
    navBar: "#142B52",
    navigationMenu: "#45C6E8",
    bColor: "#E2E2E8",
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
const baseURL = "https://my-json-server.typicode.com/thatseogirl/dataOps/cluster"
function App() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    const getCluster = async () => {
      const clusterFromServer = await fetchData();
      setGetData(clusterFromServer);
    };

    getCluster();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(baseURL);
    const data = response.data;
    return data;
  };

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <MainNavigation />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/environment' element={<Environment />}></Route>
            <Route path='/confluentCloud' element={<ConfluentCloud getData={getData} />}></Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
