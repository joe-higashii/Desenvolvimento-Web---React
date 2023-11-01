import { useState } from "react"
import { api } from "../api/api"
import { useNavigate } from "react-router-dom"

const CadastroComentario = () => {
    const [autor, setAutor] = useState('')
    const [comentario, setComentario] = useState('')
    const navigate = useNavigate()

    const handleSave = async (e) => {
        e.preventDefault()
        await api.post('/posts', { autor, comentario, likes: 0 })
        navigate('/comentarios')
    }

    const handleLimpar = () => {
        setAutor('')
        setComentario('')
    }

    return (
        <>
        <form onSubmit={handleSave}>
        <label>Autor:</label>
        <br />
        <input value={autor} onChange={(e) => { setAutor(e.target.value) }}/>
        <p />

        <label>Comentário</label>
        <br />
        <textarea value={comentario} onChange={(e) => { setComentario(e.target.value) }} />
        <br />

        <button type='submit'>Salvar</button>
        <button type='reset'>Limpar</button>
      </form>
        </>
    )
}

export default CadastroComentario