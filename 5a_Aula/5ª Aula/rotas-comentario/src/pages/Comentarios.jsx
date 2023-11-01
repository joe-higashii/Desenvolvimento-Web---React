import { useEffect, useState } from "react";
import CardComentario from "../components/CardComentario";
import { api } from "../api/api";

const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);

  const getComentarios = async () => {
    const response = await api.get("/posts/1");
    setComentarios(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getComentarios();
  }, []);

  return (
    <>
      {comentarios.map(({ autor, comentario, id, likes }) => (
        <CardComentario
          autor={autor}
          comentario={comentario}
          id={id}
          getPosts={getComentarios}
          likes={likes}
        />
      ))}
    </>
  );
};

export default Comentarios;
