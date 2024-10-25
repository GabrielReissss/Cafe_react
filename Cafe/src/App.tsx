import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.ts";
import { Router } from "./router.tsx";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/theme/DefaultTheme.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
