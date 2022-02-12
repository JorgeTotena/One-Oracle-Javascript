var campoFiltro = document.querySelector("#filtrar-tabla")
console.log(campoFiltro);

campoFiltro.addEventListener("input",function(){ //creando filtro
    var pacientes = document.querySelectorAll(".paciente")
    
    
    if(this.value.length > 0){ 

        for(var i = 0; i < pacientes.length; i++){ //haciendo la iteracción
            var paciente = pacientes[i]
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value, "i");
        
            if(!expresion.test(nombre)){ // haciendo la comparación del filtro con una expresion regular para que sea más eficiente
                paciente.classList.add("invisible") // mirar css

            }else{
                paciente.classList.remove("invisible")
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){ //haciendo la iteracción, para que cuando borre me vuelva a mostrar la tabla
            var paciente = pacientes[i]
            paciente.classList.remove("invisible");
        }
    }

});

