import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [autor, setAutor] = useState('')
  const [comentario, setComentario] = useState('')
  const [listaPosts, setListaPosts] = useState([])

  useEffect(() => {
    alert('Bem vindo ao nosso Orkut')
  }, [])
  
  useEffect(() => {
    if (listaPosts.length > 0)
      alert('Os posts fora atualizados')
  }, [listaPosts])

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
    // setListaPosts(listaPosts.filter((post) => post.autor !== toDeletePost.autor && post.comentario !== toDeletePost.comentario))
    
    const aux = listaPosts.filter((post) => post.autor !== toDeletePost.autor && post.comentario !== toDeletePost.comentario)    
    setListaPosts(aux)
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (autor != '' && comentario != ''){      
      setListaPosts([...listaPosts, { autor, comentario, like: 0 }])
      handleLimpar()
    }
    else
      alert('Você precisa cadastrar os campos corretamente!')
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
        {listaPosts.map((post) => {
          return (
            <div style={{ borderWidth: '1px', borderColor: 'gray', border: 'solid', borderRadius: '10px', marginTop: '10px' }}>
              <b>{post.autor}</b>
              <p>{post.comentario}</p>
              <div>{/* <button>Likes: {1}</button> */}
              <button onClick={() => {handleRemover(post)}}>Remover</button></div>
            </div>
          )
        })}
      </div>
      </div>
    </>
  )
}

export default App
