import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
        <Link to='/'>Página Principal</Link>
        <br />
        <Link to='/contato'>Entre em contato conosco</Link>
        <br />
        <Link to='/comentarios'>Veja os comentários</Link>
        </>
    )
}

export default NavBar