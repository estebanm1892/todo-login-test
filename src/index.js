import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env.REACT_APP_API_URL);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="esteban-monroy.us.auth0.com"
      clientId="pkp3d31ATKLTvsK6d5lodTfbG5qC7zNM"
      audience={process.env.REACT_APP_API_URL}
      redirectUri={process.env.REACT_APP_API_URL}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
