var botonAdicionar = document.querySelector("#adicionar-paciente")
botonAdicionar.addEventListener("click", function(event){ //(event) parametro, las funciones anónimas son mejores para trabajar con eventos 
    event.preventDefault(); //se utiliza cuando el navegador, tiene comportamiento padron de borrar la información y actualizarla
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    
    var errores = validarPaciente(paciente);
    
    
    if(errores.length > 0) { //si error es un string se considera como un array de caracteres
        exhibirMensajesErrores(errores);
        return; // asi se hace un break con return vacio en J con un condicional, donde si la condicion no se cumple el código para

    }

    adicionarPacienteEnLaTabla(paciente);
    form.reset(); //hace que el formulario se resetee para que no se ingresen datos dobles

    var mensajesErrores = document.querySelector("#mensaje-errores");
    mensajesErrores.innerHTML = ""
    

}); 

function adicionarPacienteEnLaTabla(paciente){ //añade el paciente a la tabla
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr); //agregar el row paciente TR al html 
}

    function capturarDatosPaciente(form) {
    // capturando datos del formulario
        var paciente = { //asi se crea una clase
        nombre: form.nombre.value, // value me trae el valor de la propiedad que le estoy nombrando
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
        }
  
        return paciente; //por esto casi pierdo horas, tener cuidado
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

    function validarPaciente(paciente) { //si el peso del paciente está correcto, me devuelve true, sino me devuelve false
        var errores = []  
        if(paciente.nombre.length == 0) {
            errores.push("El nombre no puede estar vacio"); // push agrega un valor al array       
        }

        if(paciente.peso.length == 0) {
            errores.push("El peso no puede estar vacio"); // push agrega un valor al array       
        }

        if(paciente.altura.length == 0) {
            errores.push("la altura no puede estar vacia"); // push agrega un valor al array       
        }

        if(paciente.gordura.length == 0) {
            errores.push("La gordura no puede estar vacia"); // push agrega un valor al array       
        }


        
        if(!validarPeso(paciente.peso)) {
            errores.push("El peso es incorrecto"); // push agrega un valor al array       
        }
        if(!validarAltura(paciente.altura)) {
            errores.push("La altura es incorrecta");
        }
        return errores;

        

    }

    function exhibirMensajesErrores(errores){
        var ul = document.querySelector("#mensaje-errores");
        ul.innerHTML = "" //cerrame la lista o borramelo

        errores.forEach(function(error) { //para cada valor del array haga cierta cosa
            var li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);

         });

    }
      
    



