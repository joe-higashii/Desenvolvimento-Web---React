import { useEffect } from "react"
import { api } from "../api/api"
import { Link } from "react-router-dom"

const CardComentario = ({ autor, comentario, id, getPosts, likes }) => {

    // useEffect(() => {
    //     alert(`${autor}, seu post foi publicado`)
    // }, [])

    const handleLike = () => {
      api.patch(`/posts/${id}`, { likes: likes + 1 })
      getPosts()
    }    
    
    const handleRemover = () => {
        api.delete(`/posts/${id}`)
        getPosts()
      }

    return (
        <div style={{ borderWidth: '1px', borderColor: 'gray', border: 'solid', borderRadius: '10px', marginTop: '10px' }}>
          <b>{autor}</b>
          <p>{comentario}</p>
          <div><button onClick={handleLike}>Likes: {likes}</button>
          <button onClick={handleRemover}>Remover</button></div>
          <br />
          <div><Link to={`/comentario/${id}`}>Ver mais</Link></div>
        </div>
      )
}

export default CardComentario