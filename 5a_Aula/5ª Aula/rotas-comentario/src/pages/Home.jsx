import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const Home = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <body>
                <Outlet />
            </body>

            <footer>
                Desenvolvido pelo time do Serratec
            </footer>
        </>
    )
}

export default Home