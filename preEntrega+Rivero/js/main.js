// Array vacio donde se guardaran los estudiantes registrados
const estudiantes = [];

function Alumno(nombre, apellido, grado, materia) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.grado = grado;
  this.materia = materia;
  this.promedio = 0;
}

// funcion registro de alumno
function registrarAlumno() {

  // se crea variable que controla si debe agregar mas estudiantes
  let continuar = true;

  // ciclo do-while para agregar 1 o mas estudiantes al array
  do {
    const nombre = prompt("Ingrese el nombre del alumno: ");
    const apellido = prompt("Ingrese el apellido del alumno: ");
    const grado = prompt("Ingrese el grado del alumno: ");
    const materia = prompt("Ingrese la materia del alumno: ");

    // variable para solicitar las notas de cada alumno
    let n1 = +prompt("Ingrese primera nota");
    let n2 = +prompt("Ingrese segunda nota");
    let n3 = +prompt("Ingrese tercera nota");
    let n4 = +prompt("Ingrese cuarta nota");
    let n5 = +prompt("Ingrese quinta nota");

    // se crea variable para promediar las notas de los alumnos 
    let promedioNotasResultado = promedioNotas(n1, n2, n3, n4, n5);

    // crea un nuevo alumno en el array estudiantes con promedio de notas
    const nuevoAlumno = new Alumno(nombre, apellido, grado, materia);
    nuevoAlumno.promedio = promedioNotasResultado;

    estudiantes.push(nuevoAlumno);

    // se crea constante respuesta para preguntar si se desea agregar un nuevo estudiante
    const respuesta = prompt("¿Desea registrar otro alumno? (S/N)").toLowerCase().trim();
    continuar = respuesta === "s" || respuesta === "si";
  } while (continuar);

  // se crea una constante para que se pueda hacer la busqueda por grado segun sea la peticion ingresada mediante el prompt
  const gradoBuscado = prompt("Ingrese el grado por el que desea filtrar: ");
  buscarFiltrarPorGrado(gradoBuscado);
}

// se crea una funcion para buscar y filtrar a los alumnos por grado 
function buscarFiltrarPorGrado(gradoBuscado) {
  const alumnosFiltrados = estudiantes.filter(alumno => alumno.grado === gradoBuscado);

  if (alumnosFiltrados.length > 0) {
    console.log(`Alumnos del grado ${gradoBuscado}:`);
    alumnosFiltrados.forEach(function (alumno) {

      // se crea una cosntante para que el numero del dni de cada estudiante sea de manera aleatorio cada ves que se cree un nuevo estudiante en el array y objeto
      const dniAleatorio = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

      console.log("DNI", dniAleatorio);
      console.log("Nombre:", alumno.nombre);
      console.log("Apellido:", alumno.apellido);
      console.log("Materia:", alumno.materia);
      console.log("Promedio de notas:", alumno.promedio);
      if (alumno.promedio >= 5) {
        console.log("Está aprobado.");
      } else {
        console.log("No está aprobado.");
      }
      console.log("--------------------");
    });
  } else {
    console.log(`No se encontraron alumnos en el grado ${gradoBuscado}.`);
  }
}

// funcion para calcular promedio de notas del estudiante
function promedioNotas(n1, n2, n3, n4, n5) {
  let suma = n1 + n2 + n3 + n4 + n5;
  let promedio = suma / 5;
  return promedio;
}

// se invoca a la funcion para solicitar los datos mediante prompr y mostrar los resultados mediante la consola
console.log(estudiantes);
registrarAlumno(); 