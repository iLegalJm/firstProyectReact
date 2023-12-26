import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UsersApp } from "./UsersApp";


ReactDOM.createRoot(document.getElementById("mainUsers")).render(
    <React.StrictMode>
        <UsersApp></UsersApp>
    </React.StrictMode>
);
