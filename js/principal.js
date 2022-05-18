console.log("Fui carregado de um arquivo externo.");


var titulo = document.querySelector(".titulo");
titulo.textContent = "Bruna Nutrição"


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc")

// Calculo imc:
var imc = peso / (altura * altura);  // 100/2.0 * 2.0 = 100/4 =>>>> 25
console.log(imc);  //imc

tdImc.textContent = imc;




// Mensagens no console
console.log(paciente); //tr
console.log(tdPeso);  //td que tem o peso
console.log(peso);  //Obter 100
console.log(tdAltura);  //td que tem o peso
console.log(altura);  //Obter 100