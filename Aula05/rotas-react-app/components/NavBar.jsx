import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
    <Link to='/'>Página Principal</Link>
    <br />
    <Link to="/contatos">Entre em contato conosco.</Link>
    <br />
    <Link to="comentarios">Veja os comentários.</Link>
    </>
  );
}

export default NavBar;
