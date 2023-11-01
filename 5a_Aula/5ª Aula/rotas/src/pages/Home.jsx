import { Link, Outlet, useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useState } from "react"

const Home = () => {
    const navigate = useNavigate()
    const [ nome, setNome] = useState('')

    return (
        <>
        <NavBar />
        {/* <h1>Bem vindo à nossa rede social</h1> */}
        {/* <input value={nome} onChange={(e) => { setNome(e.target.value) }}/>
        <br />
        <Link to={`/pessoa/${nome}`}>Entrar</Link> */}
        <Outlet />
        </>
    )
}

export default Home