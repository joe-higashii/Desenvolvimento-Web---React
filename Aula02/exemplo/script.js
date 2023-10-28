let contador = document.querySelector('#contador')
let botao = document.querySelector('#botao')

botao.addEventListener('click', {} => {
    let valor = contador.textContent
    valor++
    contador.textContent = valor
})