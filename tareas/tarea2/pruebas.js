function probarValidarSalario(){
    console.assert(
        validarSalario("") === "Los campos de salario de los integrantes deben ser completados",
        "Validar salario no validó que el campo no esté vacío",
    );
    console.assert(
        validarSalario(0) === "El salario mínimo es de $1",
        "Validar salario no validó que el salario mínimo sea de $1",
    );
    console.assert(
        validarSalario(3.5) === "Los salarios de los integrantes no puede expresarse con decimales",
        "Validar salario no validó que no se puedan usar decimales"
    )
    console.assert(
        validarSalario(300) === "",
        "Validar salario falló con una respuesta correcta"
    )
}

probarValidarSalario();

