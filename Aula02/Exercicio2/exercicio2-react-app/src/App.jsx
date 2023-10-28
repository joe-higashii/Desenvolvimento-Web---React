import { useState } from 'react'
import './App.css'

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState([])
  const [tarefa, setTarefa] = useState('')

  const handleChangeTarefa = (event) => {
    setTarefa(event.target.value)
  }

  const handleIncluirTarefa = () => {
    setListaDeTarefas([...listaDeTarefas, tarefa])
    setTarefa('')
  }

  const handleConcluir = (tarefaConcluida) => {
    setListaDeTarefas(listaDeTarefas.filter((value) => value != tarefaConcluida))
    alert('A tarefa' + tarefaConcluida + 'foi concluída!')
  }

  return (
    <>
      <input value={tarefa} onChange={handleChangeTarefa} type="text" />
      <button onClick={handleIncluirTarefa}>Incluir Tarefa</button>
      <p />

      <hr />

      {listaDeTarefas.map((value) => {
        <div>
          {value}
          <button onClick={handleConcluir(value)}>Concluir</button>
        </div>
      })}
      {/* <label>Lavar o Carro</label>
      <button>Concluído</button> */}
    </>
  )
}

export default App
