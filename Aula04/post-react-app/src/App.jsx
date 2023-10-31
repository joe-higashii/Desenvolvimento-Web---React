import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [autor, setAutor] = useState("");
  const [comentario, setComentario] = useState("");
  const [listaPosts, setListaPosts] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    if (listaPosts.length > 0) alert("Os posts foram atualizados!");
  }, [listaPosts]);

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
    setListaPosts(
      listaPosts.filter(
        (post) =>
          post.autor !== removerPost.autor &&
          post.comentario !== removerPost.comentario
      )
    );
  };

  const handleSave = (e) => {
    if (autor != "" && comentario != "") {
      e.preventDefault();
      setListaPosts([...listaPosts, { autor, comentario, like: 0 }]);
      // alert('Postado!')
      handleLimparFormulario();
    } else alert("Favor preencher os campos!");
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
        {listaPosts.map((post) => {
          return (
            <div
              style={{
                borderWidth: "2px",
                borderColor: "gray",
                border: "solid",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <p>Autor: {post.autor}</p>
              <p>{post.comentario}</p>
              <div>
                <button>Likes: {1}</button>
                <button
                  onClick={() => {
                    handleRemover(post);
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
