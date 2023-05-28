function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes("") === "El campo integrantes no puede estar vacío",
        "Validar cantidad de integrantes no validó que el campo no esté vacío",
    );
    console.assert(
        validarCantidadIntegrantes(1) === "La cantidad de integrantes debe ser de 2 o más",
        "Validar cantidad de integrantes no validó que la cantidad de integrantes sea de 2 o más",
    );
    console.assert(
        validarCantidadIntegrantes(11) === "La cantidad máxima de integrantes es de 10",
        "Validar cantidad de integrantes no validó que la cantidad de integrantes no supere el máximo establecido",
    );
    console.assert(
        validarCantidadIntegrantes(3.5) === "La cantidad de integrantes no puede expresarse con decimales",
        "Validar cantidad de integrantes no validó que no se puedan usar decimales"
    )

    console.assert(
        validarCantidadIntegrantes(3) === "",
        "Validar cantidad de integrantes falló con una respuesta correcta"
    )

}

function probarValidarEdades() {
    console.assert(
        validarEdades("") === "Los campos de edad de los integrantes deben ser completados",
        "Validar edades no validó que el campo no esté vacío",
    );
    console.assert(
        validarEdades(0) === "La edad mínima es de 1 año",
        "Validar edades no validó que la edad mínima sea de un año",
    );
    console.assert(
        validarEdades(101) === "La edad máxima es de 100 años",
        "Validar edades no validó que la edad máxima sea de 100 años"
    )
    console.assert(
        validarEdades(3.5) === "Las edades de los integrantes no puede expresarse con decimales",
        "Validar edades no validó que no se puedan usar decimales"
    )
    console.assert(
        validarEdades(3) === "",
        "Validar edades falló con una respuesta correcta"
    )
}

probarValidarCantidadIntegrantes();
probarValidarEdades();

