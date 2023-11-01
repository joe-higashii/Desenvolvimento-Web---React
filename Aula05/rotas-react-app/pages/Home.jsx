import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");

  return (
    <div>
      <NavBar />
      <h1>Bem vindo à nossa rede social!</h1>
      <input
        value={nome}
        type="text"
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <br />
      <Link to={`/pessas/${nome}`}>Entrar</Link>
      <br />
      <Link to={"/contatos"}>Contatos</Link>
      <br />
      <button
        onClick={() => {
          navigate("/contatos");
        }}
      >
        Contatos
      </button>
    </div>
  );
}

export default Home;
