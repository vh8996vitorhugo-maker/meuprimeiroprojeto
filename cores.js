const body = document.getElementById ('quadrado')

const azul = document.getElementById ('azul')
const vermelho = document.getElementById ('vermelho')
const amarelo = document.getElementById ('amarelo')
const verde = document.getElementById ('verde')

var cores = ['azul', 'vermelho', 'amarelo,', 'verde']
azul.addEventListener('click',() => {
    body.style.backgroundColor='blue'
})

vermelho.addEventListener('click',() => {
    body.style.backgroundColor='red'
})

amarelo.addEventListener('click',() => {
    body.style.backgroundColor='yellow'
})

verde.addEventListener('click',() => {
    body.style.backgroundColor='green'
})