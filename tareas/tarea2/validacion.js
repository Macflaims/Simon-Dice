function validarSalario(salarioIntegrante){
    if(salarioIntegrante === ""){
        return "Los campos de salario de los integrantes deben ser completados";
    }
    if(salarioIntegrante < 1){
        return "El salario mínimo es de $1";
    }
    if(!/^\d*$/.test(salarioIntegrante)){
        return "Los salarios de los integrantes no puede expresarse con decimales";
    }
    return ""
}

function validarFormulario(){
        const salarioIntegrante= form.salario;
        salarioIntegrante.forEach((salario, index)=>{
            let errorSalario = validarSalario(salario.value);

            const errores={
                salario: errorSalario,
            }
            manejarErrores(errores, form.salario[index])
        })
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
const form= document.querySelector("#calcular-salarios");