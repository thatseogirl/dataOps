import { Home, GlobalStyles } from "./components";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primaryColor: "",
    navBar: "#142B52",
    navigationMenu: "#45C6E8",
    footer: "",
    inputText: "#91a9bb"

  },
  responsiveness: {
    ipad: "768px",
    mobile: "500px",
  },
}
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>
          <Home />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
