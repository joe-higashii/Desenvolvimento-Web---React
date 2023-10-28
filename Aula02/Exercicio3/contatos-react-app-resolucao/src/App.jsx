import { useState } from 'react'
// import './App.css'
import Turma from './components/Turma/Turma'

import BackgroundColor from './components/BackgroundColor/BackgroundColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BackgroundColor>
    <>
    <Turma ano = '2014' numero = {'10'} alunos = {['Raphael', 'Marcelo', 'Nathalia', 'Renan']}/>
    <Turma ano = '2015' numero = {'11'} alunos = {['Maria', 'Eduardo', 'Eduarda', 'Junior']}/>
    </>
    </BackgroundColor>
  )
}

export default App
