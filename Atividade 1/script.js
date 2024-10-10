let button = document.querySelector("Button")

let p = document.querySelector("p")

button.addEventListener('click', somar)

function somar(n1, n2, n3) {
    let n1 = document.querySelector("#N1")
    let n2 = document.querySelector("#N2")
    let n3 = document.querySelector("#N3")

    p.innerHTML = `Resultado: ${n2+n2+n3}`

}