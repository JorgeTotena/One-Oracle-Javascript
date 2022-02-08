var pacientes = document.querySelectorAll(".paciente")
console.log(pacientes);

pacientes.forEach(function(paciente) { //for each es más sencillo de usar para esta aplicación, esta función solo sirve para lo nativo
    paciente.addEventListener("dblclick", function(){
        this.remove(); //me remueve el objeto que estoy seleccionando        
    });  
});
