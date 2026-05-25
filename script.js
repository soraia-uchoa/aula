const numero1Input = document.getElementById("numero1")
const numero2Input = document.getElementById("numero2")
const botaoSomar = document.getElementById("botaoSomar")
const resultadoTexto = document.getElementById("resultado")

function somar(a, b) {
    return a + b
}

botaoSomar.addEventListener("click", () => {
    const numero1 = Number(numero1Input.value)
    const numero2 = Number(numero2Input.value)

    const resultado = somar(numero1, numero2)

    resultadoTexto.innerText = `Resultado: ${resultado}`
})

module.exports = { somar }