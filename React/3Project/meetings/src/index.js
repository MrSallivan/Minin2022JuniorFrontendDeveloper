import React from 'react';
import { createRoot } from "react-dom/client"
import "./index.css"
import "bootstrap/dist/css/bootstrap.css"
import App from "./app/App"

const root = createRoot(document.querySelector("#root"))
root.render(<App />)