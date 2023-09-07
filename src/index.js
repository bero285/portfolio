import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyContextProvider from "./MyContextProvider";
import MyProjectPage from "./scenes/MyProjectPage";
import Page404 from "./scenes/Page404";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/home" element={<App />} />
          <Route path="/" element={<Navigate to="/portfolio/home" />} />
          <Route
            path="/portfolio"
            element={<Navigate to="/portfolio/home" />}
          />
          <Route path="/portfolio/projects" element={<MyProjectPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  </React.StrictMode>
);
