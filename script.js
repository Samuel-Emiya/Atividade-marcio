let button = document.querySelector("Button")

let p = document.querySelector(".resultado")

function somar() {
    const n1 = Number(document.querySelector("#N1").value)
    const n2 = Number(document.querySelector("#N2").value)
    const n3 = Number(document.querySelector("#N3").value)

    p.innerHTML = `Resultado: ${n2+n2+n3}`
}

button.addEventListener('click', somar)