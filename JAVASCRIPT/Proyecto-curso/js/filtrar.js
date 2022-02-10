var campoFiltro = document.querySelector("#filtrar-tabla")
console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){
    console.log("Escribieron en el Input");
    console.log(this.value); 

    var pacientes = document.querySelectorAll(".paciente")
    console.log(pacientes); 

    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]
        var tdNombre = paciente.querySelector(".info-nombre");
        var nombre = tdNombre.textContent;
        console.log(nombre);
    }

});