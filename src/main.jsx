import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { PrimerComponente } from "./PrimerComponente";
import { Contador } from "./Contador";
import { ListadoApp } from "./ListadoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimerComponente titulo="Esta seccion es de props" sub="asd" />
    <Contador value={0} />
    <ListadoApp />
  </React.StrictMode>
);
