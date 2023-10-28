import { useState } from 'react'
import './App.css'
import Aluno from './components/Aluno'

function App() {
  const alunos = [
    {nome: 'Raphael', idade: 29, linguagem: 'JavaScript', cor: 'blue'},
    {nome: 'Joedson', idade: 31, linguagem: 'JavaScript', cor: 'purple'},
    {nome: 'Nathan', idade: 17, linguagem: 'JavaScript', cor: 'red'},
    {nome: 'Gabriel', idade: 18, linguagem: 'Java', cor: 'black'}
  ]

  return (
    <>
    <Aluno />
    {alunos.map((value) => (
      <div style={{ backgroundColor: value.cor }}>
        <p>Nome: {value.nome}</p>
        <p>Idade: {value.idade}</p>
        <p>linguagem: {value.linguagem}</p>
        <p>cor: {value.cor}</p>
        <hr />
      </div>
    ))}
    </>
  )
}

export default App
