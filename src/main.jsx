import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { registerSW } from 'virtual:pwa-register';

// Registro del Service Worker
const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm("Hay una nueva versión disponible. ¿Deseas actualizar?")) {
            updateSW(true);
        }
    },
    onOfflineReady() {
        console.log("La aplicación está lista para usarse sin conexión.");
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);

