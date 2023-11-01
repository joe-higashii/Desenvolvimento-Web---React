import React from "react";
import { Navigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function pessoas() {
  const { nome } = useParams();

  return (
    <>
      <NavBar />
      {/* {nome === "Joedson" ? (
        <p>Você não é bem vindo aqui</p>
      ) : (
        <p>Olá, {nome}</p>
      <button>{false ? "Salvar" : "Editar"}</button>
      )} */}
      {nome !== "Joedson" ? <p>Olá, {nome}</p> : <Navigate to="home" />}
    </>
  );
}

export default pessoas;
