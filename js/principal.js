console.log("Fui carregado de um arquivo externo.");


var titulo = document.querySelector(".titulo");
titulo.textContent = "Bruna Nutrição"


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc")

var pesoEhValido = true;
var alturaEhValida = true;

if(peso < 0 || peso > 500){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if(altura < 0 || altura > 3.00){
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if(alturaEhValida && pesoEhValido){
var imc = peso / (altura * altura);  //Calculo imc: 100/2.0 * 2.0 = 100/4 =>>>> 25
tdImc.textContent = imc;
}


 