import svg from '../assets/404.svg'

const Error404 = () => {
    return (
        <>
            <p>Erro 404: Página não encontrada :(</p>
            <img src={svg}/>
        </>
    )
}

export default Error404