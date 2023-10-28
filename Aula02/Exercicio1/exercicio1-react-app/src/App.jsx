import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleDecrementar = () => {
    setCount(count - 1)
  }

  const handleIncrementar = () => {
    setCount(count + 1)
  }

  const handleResetar = () => {
    setCount(0)
  }

  const handleAlterar = (e) => {
    e.preventDefault();
    const novoValor = parseInt(inputValue)
    if (!isNaN(novoValor)) {
      setCount(novoValor)
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <form onSubmit={handleAlterar}>
      <h3>Contador boladão</h3>
      <p>{count}</p>
      <button onClick={handleDecrementar}>Decrementar</button>
      <button onClick={handleIncrementar}>Incrementar</button>
      <br />
      <button onClick={handleResetar}>Resetar</button>
      <hr />
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Alterar</button>
    </form>
  )
}

export default App
