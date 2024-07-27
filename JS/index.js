//Defininfo as variáveis
var horas = 0
var minutos = 0
var segundos = 0

var intervalo

//Botão iniciar
function iniciar() {
    // A cada 1000 milisegundos(ou 1 segundo a função counting será chamada)
    intervalo = setInterval(counting, 1000)
}
//Botão pausar
function pausar(){
    clearInterval(intervalo)
}
//Botão parar
function parar(){
    clearInterval(intervalo)

    horas = 0
    minutos = 0
    segundos = 0

    window.document.getElementById('contador').innerText = `${twoDigits(horas)}:${twoDigits(minutos)}:${twoDigits(segundos)}`
}

