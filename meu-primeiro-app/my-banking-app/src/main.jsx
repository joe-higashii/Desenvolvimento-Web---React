import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import LoginPage from "./Pages/Login/LoginPage";
import CadastroPage from "./Pages/Cadastro/CadastroPage";
import MainPage from "./Pages/Main/Main";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="font-sans text-base">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Cadastro" element={<CadastroPage />} />
            <Route path="/Main" element={<MainPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
