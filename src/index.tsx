import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { GlobalProvider } from "./context/GlobalState";
import {BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthProvider>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </AuthProvider>
);
