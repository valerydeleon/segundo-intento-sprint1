///////////////////////////////////////////////////////////////////////////////////////
//VERSION SEGUNDA
///////////////////////////////////////////////////////////////////////////////////////

var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

    return estudiantes;

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var objectStudent = {
      studentName: prompt("Ingresa el nombre del estudiante").toLowerCase(),
      techPoints: parseInt(prompt("¿Cuál es su puntaje Técnico?")),
      hsePoints: parseInt(prompt("¿Cuál es su puntaje de Habilidades Socio Emocionales?")),
    };

    estudiantes.push(objectStudent);

    return objectStudent;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.studentName + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.techPoints + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.hsePoints + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

    var listOfstudents = "";
    for (var i = 0; i < estudiantes.length; i++){
      listOfstudents += mostrar(estudiantes[i]);
    };
    return listOfstudents;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    nombre = nombre.toLowerCase();
    var searchStudentName = estudiantes.filter(function(i){
      return i.studentName === nombre;
    });
    return searchStudentName;

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    estudiantes = estudiantes.sort(function(a, b){
      return a.techPoints < b.techPoints;
    });
    return estudiantes;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    estudiantes = estudiantes.sort(function(a, b){
      return a.hsePoints < b.hsePoints;
    });
    return estudiantes;
}







///////////////////////////////////////////////////////////////////////////////////////
//VERSION PRIMERA
///////////////////////////////////////////////////////////////////////////////////////

// var estudiantes = [];
//
// function obtenerListaEstudiantes() {
//     // TO DO: Retornar la lista de estudiantes
//     return estudiantes;
// }
//
//
// function agregarEstudiante() {
//     // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
//     // Hint: El estudiante debe ser agregado a la lista de estudiantes
//     // TO DO: Retornar el estudiante recientemente creado
//
//     var objetoEstudiante = {
//       nombreEstudiante: promt("Ingrese el NOMBRE:").toLowerCase(),
//       puntosTech: parseInt(promt("Ingrese los PUNTOS TÉCNICOS:")),
//       puntosHSE: parseInt(prompt("Ingrese los PUNTOS HSE:"))
//     }
//     return objetoEstudiante;
//
// }
//
//
// function mostrar(estudiante) {
//     // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
//     var resultado = "";
//     resultado += "<div class='row'>";
//     resultado += "<div class='col m12'>";
//     resultado += "<div class='card blue-grey darken-1'>";
//     resultado += "<div class='card-content white-text'>";
//     resultado += "<p><strong>Nombre:</strong> " + estudiante.nombreEstudiante + "</p>";
//     resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTech + "</p>";
//     resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
//     resultado += "</div>";
//     resultado += "</div>";
//     resultado += "</div>";
//     resultado += "</div>";
//     return resultado;
// }
//
//
// function mostrarLista(estudiantes) {
//     // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
//     // Retornar el template de todos los estudiantes
//
//
// }
//
//
// function buscar(nombre, estudiantes) {
//     // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
//     // Retornar el objeto del estudiante buscado
//     // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
//
// }
//
//
// function topTecnico(estudiantes) {
//     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
//
// }
//
//
// function topHSE(estudiantes) {
//     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
//
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// // var estudiantes = [];
// //
// // function obtenerListaEstudiantes() {
// //     // TO DO: Retornar la lista de estudiantes
// //     // for (var i = 0; i < numeroEstudiantes; i++){
// //     //
// //     //   var estudiante = {};
// //     //   estudiante.nombreEstudiante = nombreEstudiante;
// //     //   estudiante.puntosTech = puntosTech;
// //     //   estudiante.puntosHse = puntosHse;
// //     // }
// // }
// //
// // function agregarEstudiante() {
// //     // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
// //     // Hint: El estudiante debe ser agregado a la lista de estudiantes
// //     // TO DO: Retornar el estudiante recientemente creado
// //
// //     // var numeroEstudiantes = estudiantes.length
// //     // var nombreEstudiante = prompt("Ingrese el NOMBRE del estudiante");
// //     // var puntosTech = prompt("Ingrese los PUNTOS TÉCNICOS del estudiante");
// //     // var puntosHse = prompt("Ingrese los PUNTOS DE HSE del estudiante");
// //     // return nombreEstudiante;
// //
// // /////////////////////////////////////////////////////////////////////////////////////////////////////
// //     //
// //     // var datosEstudiante = arregloDePreguntas.length
// //     // var arregloDePreguntas = [
// //     //   "Ingrese el NOMBRE del estudiante",
// //     //   "Ingrese los PUNTOS TÉCNICOS del estudiante",
// //     //   "Ingrese los PUNTOS DE HSE del estudiante"
// //     // ];
// //     // for ( var i = 0; i < datosEstudiante; i++){
// //     //   prompt(arregloDePreguntas);
// //     // }
// //
// // /////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// // var estudiante = new Preguntas("lolo","20", "90");
// // estudiante.agregar();
// //
// // function Preguntas (nombre, tech, hse){
// //   this.nombre = prompt("nombre");
// //   this.tech = prompt("tech");
// //   this.hse = prompt("hse");
// //   this.agregar = function(){
// //     return [this.nombre, this.tech, this.hse]);
// //   };
// // }
// //
// // /////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// //
// //     // function Preguntas (nombre, tech, hse){
// //     //   this.nombre = nombre;
// //     //   this.tech = tech;
// //     //   this.hse = hse;
// //     //   this.agregar = function(){
// //     //     return(this.nombre);
// //     //   };
// //     // }
// //     //
// //     // var estudiante = new Preguntas("lolo","20", "90");
// //     // estudiante.agregar();
// //
// // /////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// //
// //     // var nombreEstudiante = prompt("Ingrese el NOMBRE del estudiante");
// //     // var puntosTech = prompt("Ingrese los PUNTOS TÉCNICOS del estudiante");
// //     // var puntosHse = prompt("Ingrese los PUNTOS DE HSE del estudiante");
// //     // for(var i = 0; i < datosEstudiante; i++)
// //     //
// //     // agregarEstudiante(nombreEstudiante)
// //
// //
// // /////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// //     // var preguntaDatos = [
// //     //   {
// //     //     nombre: "Ingrese el NOMBRE del estudiante",
// //     //     tech: "Ingrese los puntos TÉCNICOS del estudiante",
// //     //     hse: "Ingrese los puntos HSE del estudiate"
// //     //   }
// //     // ];
// //     //
// //     // var numeroDeEstudiantes = preguntaDatos.length;
// //     // var datosDeEstudiantes = [];
// //     //
// //     // var funcionPreguntarDatos = function (i){
// //     //   datosDeEstudiantes[i] = prompt(preguntaDatos[i].nombre)
// //     //   datosDeEstudiantes[i] = prompt(preguntaDatos[i].tech)
// //     //   datosDeEstudiantes[i] = prompt(preguntaDatos[i].hse)
// //     // }
// //     //
// //     // for (i = 0; i < numeroDeEstudiantes; i++){
// //     //   funcionPreguntarDatos(i);
// //     //   var estudiante = {};
// //     //   estudiante.nombre = nombre;
// //     //   estudiante.tech = tech;
// //     //   estudiante.hse = hse;
// //     //   datosDeEstudiantes.push(estudiante)
// //     // }
// //     //
// //     // document.write(datosDeEstudiantes);
// //     // console.log(datosDeEstudiantes.length)
// //
// // /////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// //         // var respuestasUsuario = [];
// //         // var preguntarDatos = function();{
// //         //   var preguntasUsuario = [
// //         //     "Ingrese el NOMBRE del estudiante",
// //         //     "Ingrese los PUNTOS TÉCNICOS del estudiante",
// //         //     "Ingrese los PUNTOS DE HSE del estudiante"
// //         //   ];
// //         //   respuestasUsuario[i] = prompt(preguntas[i])
// //         // }
// //         // return respuestasUsuario.toLowerCase();
// //
// // /////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// //
// //     // var ingresarDatos = [
// //     //   "Ingrese el NOMBRE del estudiante",
// //     //   "Ingrese los PUNTOS TÉCNICOS del estudiante",
// //     //   "Ingrese los PUNTOS DE HSE del estudiante"
// //     // ];
// //     // var datosAgregados = agragandoDatos.length;
// //     // var datosAgregados = [];
// //     //
// //     // var agregarEstudiante = function (i){
// //     //   datosAgregados[i] = prompt(ingresarDatos[i])
// //     // }
// //     //
// //     // for (i = 0; i < datosAgregados; i++){
// //     //   agregarEstudiante(i);
// //     // }
// //
// //
// // }
// //
// // function mostrar(estudiante) {
// //     // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
// //     var resultado = "";
// //     resultado += "<div class='row'>";
// //     resultado += "<div class='col m12'>";
// //     resultado += "<div class='card blue-grey darken-1'>";
// //     resultado += "<div class='card-content white-text'>";
// //     resultado += "<p><strong>Nombre:</strong> " + estudiante + "</p>";
// //     resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante + "</p>";
// //     resultado += "<p><strong>Puntos HSE:</strong> " + estudiante + "</p>";
// //     resultado += "</div>";
// //     resultado += "</div>";
// //     resultado += "</div>";
// //     resultado += "</div>";
// //     return resultado;
// // }
// //
// // function mostrarLista(estudiantes) {
// //     // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
// //     // Retornar el template de todos los estudiantes
// //
// // }
// //
// // function buscar(nombre, estudiantes) {
// //     // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
// //     // Retornar el objeto del estudiante buscado
// //     // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
// //
// // }
// //
// // function topTecnico(estudiantes) {
// //     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
// //
// // }
// //
// // function topHSE(estudiantes) {
// //     // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
// //
// // }
