let nome = "William Vieira"
let idade = 26

// alert(`${nome} tem ${idade} anos`)
// let resposta = confirm("Você é mesmo biladeiro?")

// if (resposta) {
//     console.log("Parabéns biladeiro!")
// }

function button(elemento) {
    document.getElementById("msg").innerHTML = "Uma nova mensagem onclick"
}

function pass() {
    document.getElementById("msg").innerHTML = "Uma nova mensagem onmouseover"
}

function original() {
    document.getElementById("msg").innerHTML = "Aguardando uma ação..."
}

function muda(elemento) {
    document.getElementById("msg").innerHTML = elemento.value
}

window.location.href("ex.html")

// function soma(n1, n2) {
//     return n1 + n2
// }

// alert(soma(10, 12))

// arrays
let lista2 = ["ale", "ing", "esc"]
lista2.push("pol")
lista2.push("ing")
console.log(lista2)

let lista = ["maça", "pera", "laranja"]

// object
let obj = {
    nome: "Haha",
    idade: 27,
    adulto: true,
    altura: 1.85
}

let listaObj = [
    {
        nome: "Python",
        idade: 30
    },
    {
        nome: "Julia",
        idade: 15
    }
]

for(let i = 0; i < listaObj.length; i++) {
    console.log(`${listaObj[i].nome}`)
}