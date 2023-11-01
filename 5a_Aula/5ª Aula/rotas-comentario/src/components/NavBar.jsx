import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <Link to='/cadastrar'>Cadastrar</Link>
            <Link to='/comentarios'>Comentarios</Link>
            <Link to='/comentario/:id'>Teste</Link>
        </>
    )
}

export default NavBar