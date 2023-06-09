import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";
import store from "./store";
import { baselightTheme } from "./theme/DefaultColors";
import Init from "./Initialization";

function App() {
  const routing = useRoutes(Router);
  const theme = baselightTheme;
  return (
    <Provider store={store}>
      <Init />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
        />
        {routing}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
