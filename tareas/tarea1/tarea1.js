const botonSiguiente=document.querySelector("#boton-siguiente");

botonSiguiente.onclick = function(event){
    eliminarMensajesError();
    validarFormulario("cantidadIntegrantes");

    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);
    eliminarIntegrantes();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
}

function crearIntegrantes(cantidadIntegrantes){
    if(cantidadIntegrantes>1 && cantidadIntegrantes<11){
        mostrarBotonCalcular();
        for(let i=0;i<cantidadIntegrantes;i++){
            crearIntegrante(i);
        }
    }
    else{
        reset();
    }
}

function crearIntegrante(indice){
    const div = document.createElement('div');
    div.className = "integrantes";

    const label = document.createElement("label");
    label.textContent = `Edad del integrante numero ${indice+1}`;
    const input = document.createElement("input");
    input.type = "number";
    input.name = "edad"

    div.appendChild(label);
    div.appendChild(input);

    const integrantes = document.querySelector("#integrantes");
    integrantes.appendChild(div);
}

function mostrarBotonCalcular(){
    document.querySelector("#calcular").className = "";
}

function reset(){
    eliminarIntegrantes();
    ocultarBotonCalcular();
    ocultarCalculos();
}

function eliminarMensajesError(){
    document.querySelectorAll(".mensaje-error").forEach((error)=>{error.remove()})
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
    validarFormulario("edadIntegrantes");
    const numeros = obtenerEdades();
    if(numeros.length===document.querySelectorAll(".integrantes input").length){
    document.querySelector("#edad-menor").textContent = `${obtenerMenor(numeros)}`
    document.querySelector("#edad-mayor").textContent = `${obtenerMayor(numeros)}`
    document.querySelector("#edad-promedio").textContent = `${obtenerPromedio(numeros)}`
    mostrarCalculos();
    }
    event.preventDefault();
}

document.querySelector("#boton-reset").onclick = reset;

function mostrarCalculos(){
    document.querySelector("#resultados-calculo").className = "";
}

function obtenerEdades(){
    const integrantes = document.querySelectorAll(".integrantes input");
    const edades = [];
    for (let i=0;i<integrantes.length;i++){
        let edad=Number(integrantes[i].value);
        if(edad && edad>0 && edad<100){
            edades.push(Number(integrantes[i].value))
        };
    }
    return edades;
}




