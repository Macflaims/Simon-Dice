let secuenciaMaquina = [];
let secuenciaUsuario = [];
let ronda = 1;


const boton = document.querySelector("#boton-empezar");

boton.onclick = ()=>{
    reinciarJuego();
    manejarRonda();
}

function reinciarJuego(){
    secuenciaMaquina = [];
    secuenciaUsuario = [];
    ronda = 0;
}

function manejarRonda(){
    ronda++
    actualizarEstado("Turno de la máquina");
    bloquearInputUsuario();

    secuenciaMaquina.push(cuadroAleatorio());
    actualizarNumeroRonda();

    mostrarSecuenciaMaquina();
    setTimeout(() => {
        actualizarEstado("Tu turno")
        desbloquearInputUsuario();
    }, (secuenciaMaquina.length+1)*1000);
}

function manejarInputUsuario(e) {
    const cuadro = e.target;
    resaltar(cuadro);
    secuenciaUsuario.push(cuadro);

    const cuadroMaquina = secuenciaMaquina[secuenciaUsuario.length -1];

    if(cuadro !== cuadroMaquina){
        perder();
    }
    else if(secuenciaUsuario.length === secuenciaMaquina.length){
        bloquearInputUsuario();
        secuenciaUsuario = [];
        setTimeout(manejarRonda, 1000);  
    }
}

function mostrarSecuenciaMaquina(){
    secuenciaMaquina.forEach((cuadro, index)=>{
        const retrasoMS = (index + 1) * 1000;
        setTimeout(()=>{
          resaltar(cuadro);
        }, retrasoMS);})
}

function resaltar(cuadro){
    cuadro.style.opacity = 1;
    setTimeout(()=> {
        cuadro.style.opacity = 0.5;
      }, 500);
}

function cuadroAleatorio() {
    const cuadros = document.querySelectorAll(".cuadro");
    return cuadros[Math.floor(Math.random() * cuadros.length)];
}

function desbloquearInputUsuario() {
    document.querySelectorAll(".cuadro").forEach((cuadro)=> {
      cuadro.onclick = manejarInputUsuario;
    });
}

function bloquearInputUsuario() {
    document.querySelectorAll(".cuadro").forEach(function(cuadro) {
      cuadro.onclick = ()=>{};
    });
}

function actualizarNumeroRonda(){
    document.querySelector("#ronda").textContent = ronda
}

function actualizarEstado(nuevoEstado, error = false) {
    const estado = document.querySelector("#estado");
    estado.textContent = nuevoEstado;
    if(error) {
      estado.classList.remove("alert-primary");
      estado.classList.add("alert-danger");
      
    } else {
      estado.classList.remove("alert-danger");
      estado.classList.add("alert-primary");
    }
}

function perder(){
    bloquearInputUsuario();
    actualizarEstado('Perdiste! Toca "Empezar" para jugar de nuevo!', true);
    reinciarJuego;
}