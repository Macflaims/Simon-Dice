document.querySelector("#agregar-integrantes").onclick = function(event){
    crearIntegrante();
    mostrarBotonCalcular();
    event.preventDefault();
}

document.querySelector("#eliminar-integrantes").onclick = function(event){
    ocultarCalculos()
    const integrantes= document.querySelectorAll(".integrantes");
    for(let i=0; i<=integrantes.length; i++){
        if(i===(integrantes.length-1)){
            integrantes[i].remove()
        }
    }
    if(integrantes.length===1){
        reset()
    }
    event.preventDefault();
}

function crearIntegrante(){
    const cantidadIntegrantes = document.querySelectorAll("#integrantes input");

    const div = document.createElement('div');
    div.className = "integrantes";

    const label = document.createElement("label");
    label.textContent = `Salario anual del integrante ${cantidadIntegrantes.length+1}`;
    const input = document.createElement("input");
    input.type = "number";
    input.name = "salario";

    div.appendChild(label);
    div.appendChild(input);
    document.querySelector("#integrantes").appendChild(div)
}

function mostrarBotonCalcular(){
    document.querySelector("#calcular").className = "";
}

function reset(){
    eliminarIntegrantes();
    ocultarBotonCalcular();
    ocultarCalculos();
}

function eliminarIntegrantes(){
    const integrantes = document.querySelectorAll(".integrantes");
    for(let i=0;i<integrantes.length;i++){
        integrantes[i].remove();
    }
}

function ocultarBotonCalcular(){
    document.querySelector("#calcular").className = "oculto";
}

function ocultarCalculos(){
    document.querySelector("#resultados-calculo").className = "oculto";
}

document.querySelector("#calcular").onclick = function(event){
    eliminarMensajesError();
    validarFormulario();

    const salarios = obtenerSalarios();
    if(salarios.length===document.querySelectorAll(".integrantes input").length){
    document.querySelector("#salario-menor").textContent = `${obtenerMenor(salarios)}`
    document.querySelector("#salario-mayor").textContent = `${obtenerMayor(salarios)}`
    document.querySelector("#salario-promedio").textContent = `${obtenerPromedio(salarios)}`
    document.querySelector("#salario-mensual-promedio").textContent = `${obtenerPromedioMensual(salarios)}`
    mostrarCalculos();
    }
    event.preventDefault();
}

document.querySelector("#boton-reset").onclick = reset;

function mostrarCalculos(){
    document.querySelector("#resultados-calculo").className = "";
}

function obtenerSalarios(){
    const integrantes = document.querySelectorAll(".integrantes input");
    const salarios = [];
    for (let i=0;i<integrantes.length;i++){
        if(Number(integrantes[i].value)>0){
            salarios.push(Number(integrantes[i].value));
        }
    }
    return salarios;
}

function eliminarMensajesError(){
    document.querySelectorAll(".mensaje-error").forEach((error)=>{error.remove()})
}
