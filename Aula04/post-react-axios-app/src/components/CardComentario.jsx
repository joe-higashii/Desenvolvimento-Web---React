import React from "react";
import { api } from "../../api/api";

function CardComentario({ autor, comentario, id, getPosts }) {
  const handleRemover = () => {
    api.delete(`/posts/${id}`);
    getPosts();
  };

  return (
    <div>
      <div
        style={{
          borderWidth: "2px",
          borderColor: "gray",
          border: "solid",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <p>Autor: {autor}</p>
        <p>{comentario}</p>
        <div>
          <button>Likes: {1}</button>
          <button onClick={handleRemover}>Remover</button>
        </div>
      </div>
    </div>
  );
}

export default CardComentario;
