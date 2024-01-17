import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Container maxWidth="xs">
            <App />
          </Container>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </CookiesProvider>
);
