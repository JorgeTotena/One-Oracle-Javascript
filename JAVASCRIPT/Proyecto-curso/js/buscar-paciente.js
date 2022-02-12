var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest; //permite intercambiar datos entre la web y servidores, permite actualizar paginas sin recargarlas
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json")
    xhr.addEventListener("load", function(){
        var errorAjax = document.querySelector("#error-ajax")
        if(xhr.status == 200){ //si el repositorio está funcionando
            errorAjax.classList.add("invisible")
            var respuesta = xhr.responseText //me trae lo del repositorio 
            console.log(xhr.respuesta);
            console.log(typeof respuesta) // type of respuesta me devuelve el tipo de dato de esa variable

        var pacientes = JSON.parse(respuesta); // convirtiendo de string a json
        console.log(pacientes);
        console.log(typeof pacientes);

        pacientes.forEach(function(paciente){ // utilizando la funcion del formulario
            adicionarPacienteEnLaTabla(paciente);
        });
            console.log(paciente);        
        } else {
            errorAjax.classList.remove("invisible")
            console.log(xhr.status)
            console.log(xhr.responseText)
        }

    });

 //este evento es para la requisciión del api, conecta ambos
    xhr.send()

});
