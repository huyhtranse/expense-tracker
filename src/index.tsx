import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import { WalletProvider } from "./context/WalletContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <GlobalProvider>
          <WalletProvider>
            <App />
          </WalletProvider>
        </GlobalProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
