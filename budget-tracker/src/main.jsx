import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ This imports the router-based App.jsx
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
