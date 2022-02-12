var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function(){
    console.log("Buscando pacientes");
    var xhr = new XMLHttpRequest; //permite intercambiar datos entre la web y servidores, permite actualizar paginas sin recargarlas
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json")
    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);


    }); //este evento es para la requisciión del api, conecta ambos
    xhr.send()
});