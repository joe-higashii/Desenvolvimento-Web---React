import { useState, useEffect } from 'react'
import { api } from './api/api'
import './App.css'
import CardComentario from './components/CardComentario/CardComentario'

function App() {
  const [autor, setAutor] = useState('')
  const [comentario, setComentario] = useState('')
  const [listaPosts, setListaPosts] = useState([])

  const post = {
    autor: 'Adilson',
    comentario: 'Olá'
  }

  useEffect(() => {
    getPosts()
  }, [])//Array vazio, só chama quando o componente for criado

  const getPosts = async () => {
    const response = await api.get('/posts')
    //console.log(typeof response.data[0])
    setListaPosts(response.data)
  }
  
  // useEffect(() => {
  //   if (listaPosts.length > 0)
  //     alert('Os posts fora atualizados')
  // }, [listaPosts])

  const handleChangeAutor = (event) => {
    setAutor(event.target.value)
  }

  const handleChangeComentario = (e) => {
    setComentario(e.target.value)
  }

  const handleLimpar = () => {
    setAutor('')
    setComentario('')
  }

  const handleRemover = (toDeletePost) => {
    api.delete(`/posts/${toDeletePost.id}`)
    getPosts()
  }

  const handleSave = async (e) => {
    e.preventDefault()
    if (autor != '' && comentario != ''){
      const response = await api.post('/posts',
    {
      comentario,
      autor      
    })
      getPosts()
      handleLimpar()
    }
  }

  return (
    <>
    <div>
      <h2>Cadastro de Posts</h2>
      <form onSubmit={handleSave} onReset={handleLimpar}>
        <label>Autor:</label>
        <input value={autor} onChange={handleChangeAutor} />
        <br />

        <label>Comentário</label>
        <textarea value={comentario} onChange={handleChangeComentario}/>
        <br />

        <button type='submit'>Salvar</button>
        <button type='reset'>Limpar</button>
      </form>
      
      <hr />

      <div>
        {listaPosts.map((post) => <CardComentario autor={post.autor} comentario={post.comentario} id={post.id} getPosts={getPosts}/>)}
      </div>
      </div>
    </>
  )
}

export default App
