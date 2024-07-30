//Defininfo as variáveis
var horas = 0
var minutos = 0
var segundos = 0

var intervalo

//Botão iniciar
function iniciar() {
    // A cada 1000 milisegundos(ou 1 segundo a função contando será chamada)
    intervalo = setInterval(contando, 1000)
}
//Botão pausar
function pausar(){
    clearInterval(intervalo)
}
//Botão parar
function parar(){
    clearInterval(intervalo)
    //Zerando o contador
    horas = 0
    minutos = 0
    segundos = 0
    // Exibindo a contagem
    window.document.getElementById('contador').innerText = `${doisDigitos(horas)}:${doisDigitos(minutos)}:${doisDigitos(segundos)}`
}
//Contando
function contando(){
    //incrementando segundos
    segundos ++
    // A cada 60 segundos, minutos serão incrementados e segundos zerados
    if(segundos === 60){
        segundos = 0
        minutos ++
    }
    // A cada 60 minutos, horas serão incrementadas e minutos zerados
        if (minutos === 60){
            minutos = 0
            horas ++
        }
    // Exibindo a contagem
    window.document.getElementById('contador').innerText = `${doisDigitos(horas)}:${doisDigitos(minutos)}:${doisDigitos(segundos)}`
}
// Mantendo a contagem em dois digitos
function doisDigitos(digito){
    if(digito < 10) {
        return ('0' + digito)
    }else{
        return (digito)
    }
}



