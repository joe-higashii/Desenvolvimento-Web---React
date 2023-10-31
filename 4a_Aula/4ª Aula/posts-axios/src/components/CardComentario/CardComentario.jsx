import { useEffect } from "react"
import { api } from "../../api/api"

const CardComentario = ({ autor, comentario, id, getPosts }) => {

    useEffect(() => {
        alert(`${autor}, seu post foi publicado`)
    }, [])

    const handleRemover = () => {
        api.delete(`/posts/${id}`)
        getPosts()
      }

    return (
        <div style={{ borderWidth: '1px', borderColor: 'gray', border: 'solid', borderRadius: '10px', marginTop: '10px' }}>
          <b>{autor}</b>
          <p>{comentario}</p>
          <div>{/* <button>Likes: {1}</button> */}
          <button onClick={handleRemover}>Remover</button></div>
        </div>
      )
}

export default CardComentario