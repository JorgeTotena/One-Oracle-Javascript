/*var titulo = document.querySelector(".titulo"); //document me permite acceder a todo
console.log(titulo.textContent);

titulo.textContent = "Buena Vida Nutricion" // puedo cambiar cosas del universo html desde javascript */

var pacientes = document.querySelectorAll(".paciente") // query selector sirve para capturar a todos los que tengan la misma clase

for(var i = 0; i < pacientes.length;i++) {

    var paciente = pacientes[i];   
    var tdPeso = paciente.querySelector(".info-peso");  //también puedo acceder a un objeto especifico del query selector
    var peso = tdPeso.textContent; // text content nos permite acceder al contenido del html para usarlo
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdIMC = paciente.querySelector(".info-imc");
    pesoEsValido = validarPeso(peso);
    alturaEsValida = true;

    if ((peso < 0) || (peso > 1000)) { //las barras verticales o el operador or se hacen con alt 124
        console.log("peso incorrecto");
        pesoEsValido = false;
        tdIMC.textContent = "El peso es incorrecto"
        paciente.classList.add("paciente-incorrecto"); //classLis.add nos permite añadir una clase dentro del objeto
        
    
    }
    if ((altura < 0) || (altura > 3)) { //las barras verticales o el operador or se hacen con alt 124
        console.log("altura incorrecta");
        alturaEsValida = false;
        tdIMC.textContent = "La altura es incorrecta";
        paciente.classList.add("paciente-incorrecto");
    
    }
    
    if((pesoEsValido) && (alturaEsValida)) {
        
        tdIMC.textContent = calcularIMC(peso,altura); // para asignarle valor a mi IMC y en el mundo HTML, la función to fixed permite fijar los decimales
        
    
    
    }  

}

function calcularIMC(peso,altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);


}

function validarPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }else{
        return false;

    }

}









