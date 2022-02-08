var pacientes = document.querySelectorAll(".paciente")
var tabla = document.querySelector("#tabla-pacientes")

tabla.addEventListener("dblclick",function(event){
    console.log("hicieron clicks");  //cuando hace click dentro de la tabla manda el console.log, se resuelve le problema de la tabla nativa
    event.target.parentNode.remove() //lugar donde estoy haciendo especificamente el click

});

/*
pacientes.forEach(function(paciente) { //for each es más sencillo de usar para esta aplicación, esta función solo sirve para lo nativo
    paciente.addEventListener("dblclick", function(){
        this.remove(); //me remueve el objeto que estoy seleccionando        
    });  
}); 
*/
