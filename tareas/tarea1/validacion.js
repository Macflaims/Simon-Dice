function validarCantidadIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes==="" ){
        return "El campo integrantes no puede estar vacío";
    }
    if(cantidadIntegrantes<=1){
        return "La cantidad de integrantes debe ser de 2 o más";
    }
    if(cantidadIntegrantes>10){
        return "La cantidad máxima de integrantes es de 10";
    }
    if(!/^\d*$/.test(cantidadIntegrantes)){
        return "La cantidad de integrantes no puede expresarse con decimales";
    }
    return ""
}

function validarEdades(edadIntegrante){
    if(edadIntegrante === ""){
        return "Los campos de edad de los integrantes deben ser completados";
    }
    if(edadIntegrante < 1){
        return "La edad mínima es de 1 año";
    }
    if(edadIntegrante > 100){
        return "La edad máxima es de 100 años";
    }
    if(!/^\d*$/.test(edadIntegrante)){
        return "Las edades de los integrantes no puede expresarse con decimales";
    }
    return ""
}

function validarFormulario(validacion){
    
    if(validacion === "cantidadIntegrantes"){
        const cantidadIntegrantes = form.integrantes.value;
        const errorIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

        const errores={
            integrantes: errorIntegrantes,
            };
        manejarErrores(errores, form.integrantes);
    };

    if(validacion ==="edadIntegrantes"){
        const edadIntegrante= form.edad;
        edadIntegrante.forEach((edad, index)=>{
            let errorEdad = validarEdades(edad.value);

            const errores={
                edad: errorEdad,
            }
            manejarErrores(errores, form.edad[index])
        })
    }
}

function manejarErrores(errores, elemento){
    const key = Object.keys(errores);
    const error= errores[key]
    
    if(error){
        elemento.className="error";
        const mensajeError = document.createElement("label");
        mensajeError.textContent = error;
        mensajeError.className= "mensaje-error";
        elemento.insertAdjacentElement('afterend', mensajeError);
    }
    else{
        return elemento.className="";
    }
   
}
const form= document.querySelector("#calcular-edades");
