var botonAdicionar = document.querySelector("#adicionar-paciente")
botonAdicionar.addEventListener("click", function(event){ //(event) parametro, las funciones anónimas son mejores para trabajar con eventos 
    event.preventDefault(); //se utiliza cuando el navegador, tiene comportamiento padron de borrar la información y actualizarla
    var form = document.querySelector("#form-adicionar");

    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr); //agregar el row paciente TR al html
    form.reset(); //hace que el formulario se resetee para que no se ingresen datos dobles
       

    function capturarDatosPaciente(form) {
    // capturando datos del formulario
        var paciente = { //asi se crea una clase
        nombre: form.nombre.value, // value me trae el valor de la propiedad que le estoy nombrando
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
        }
  
        return paciente;
    }

    function construirTr(paciente) {
    // crear los tds (rows) y un tr
        var pacienteTr = document.createElement("tr"); //añade un row a la tabla
        pacienteTr.classList.add("paciente");
        var nombreTd = construirTd(paciente.nombre,"info-nombre"); // añade una observación a la tabla
        var pesoTd = construirTd(paciente.peso,"info-peso");
        var alturaTd = construirTd(paciente.altura,"info-altura");
        var gorduraTd = construirTd(paciente.gordura,"info-gordura");
        var imcTd = construirTd(paciente.imc,"info-imc");    
     
        
    //asignación al tr de los td y la tabla el tr

        pacienteTr.appendChild(nombreTd); //append child hace lo contrario a querySelector, envia cosas desde el universo JS a HTML
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);    
        

        return pacienteTr
        
    }

    function construirTd(dato, clase) {
        var td = document.createElement("td");
        td.classList.add(clase); //añadir clase
        td.textContent = dato // asignar los valores a la propiedad textContent

        return td
    }
 

});
