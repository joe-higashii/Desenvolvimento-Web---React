import { useEffect, useRef, useState } from "react";
import { api } from "../api/api";
import "./App.css";
import CardComentario from "./components/CardComentario";

function App() {
  const [autor, setAutor] = useState("");
  const [comentario, setComentario] = useState("");
  const [listaPosts, setListaPosts] = useState([]);
  
  useEffect(() => {
    getPosts();
  }, [listaPosts]);

  const handleLike = () => {
    
  }

  const getPosts = async () => {
    const response = await api.get("/posts");
    setListaPosts(response.data);
  };

  const handleChangeAutor = (event) => {
    setAutor(event.target.value);
  };

  const handleChangeComentario = (e) => {
    setComentario(e.target.value);
  };

  const handleLimparFormulario = () => {
    setAutor("");
    setComentario("");
  };

  const handleRemover = (removerPost) => {
    api.delete(`/posts/${removerPost.id}`);
    setListaPosts(
      listaPosts.filter(
        (post) =>
          post.autor !== removerPost.autor &&
          post.comentario !== removerPost.comentario
      )
    );
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const response = await api.post("/posts", { autor, comentario });
    // if (autor != "" && comentario != "") {
    //   e.preventDefault();
    //   setListaPosts([...listaPosts, { autor, comentario, like: 0 }]);
    //   // alert('Postado!')
      handleLimparFormulario();
    // } else alert("Favor preencher os campos!");
    getPosts();
  };

  return (
    <>
      <h2>Cadastro de Posts</h2>
      <form onSubmit={handleSave} onReset={handleLimparFormulario}>
        <label htmlFor="">Autor</label>
        <input
          required
          value={autor}
          type="text"
          onChange={handleChangeAutor}
        />
        <br />

        <label htmlFor="">Comentário</label>
        <textarea
          required
          value={comentario}
          name=""
          id=""
          cols="30"
          rows="3"
          onChange={handleChangeComentario}
        ></textarea>
        <br />

        <button type="submit">Salvar</button>
        <button type="reset" onClick={handleLimparFormulario}>
          Limpar Formulário
        </button>
      </form>

      <hr />

      <div>
        {listaPosts.map((post) => (
          <CardComentario
            autor={post.autor}
            comentario={post.comentario}
            id={post.id}
            getPosts={getPosts}
          />
        ))}
      </div>
    </>
  );
}

export default App;
