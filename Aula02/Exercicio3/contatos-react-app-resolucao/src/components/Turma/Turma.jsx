import React from 'react'
import Aluno from '../Aluno/Aluno'
import BotaoPrimarioComponent from '../BotaoPrimario/BotaoPrimario'

function Turma({ numero, alunos, ano }) {
    
    const estilo = {
        backgroundColor: 'blue',
        fontWeight: 'bold',
        color: 'white'
    }
  
    return (
    <div style = {estilo}>
        <p>Ano de formação: {ano}</p>
        Esses são os alunos da Turma: {numero}
        {alunos.map((aluno) => {
            return <Aluno nome = {aluno}/>
        })}
        <BotaoPrimarioComponent>Olá</BotaoPrimarioComponent>
    </div>
  )
}

export default Turma