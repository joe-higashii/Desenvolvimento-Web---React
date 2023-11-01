import { useParams, Navigate } from "react-router-dom"
import NavBar from "../components/NavBar"

const Pessoa = () => {
    const { nome } = useParams()

    return (
        <>
        {/* {nome === 'Raphael' ? <p>Você não é bem vindo aqui</p> : <p>Olá, {nome}</p> } */}
        {/* {nome !== 'Raphael' && <p>Olá, {nome}</p>} */}
        {/* <button>{ false ? 'Salvar' : 'Editar' }</button> */}    
        {nome !== 'Raphael' ? <p>Olá, {nome}</p> : <Navigate to='/'/>}
    
        </>
    )
}

export default Pessoa