var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
//estructura de un array
console.log(frutas); 

//ejemplos de cosas que se pueden hacer:
// (frutas).unshift(""); mete un valor al array pero al inicio de el
// (frutas).pop(""); quita el ultimo elemento
// (frutas).push("") envia un elemento al final del array
// (frutas).shift("") quita el primer elemento del array
// (frutas).indexof("")-necesita valor si o si- busca la posicion
// de un elemento en un array
// frutas[2]; ----- devuelve el nombre del elemento en la posicion 2

// elementos principales de un array - indice y elemento


                    LOOPS-BUCLES

var  estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
​
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
​
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

// se hace un array, la funcion hace que se haga la accion,
// el -for- hace que si la variable i es menor a la cantidad de 
// objetos del array, ejecutara el codigo y al mismo tiempo le
// sumara 1, para que no valla a regresar el mismo valor y asi siga
// con el siguiente valor del array

var  estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

// esta es otra forma muuuucho mas facil de hacerlo,
// wow

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

console.log(estudiantes);
while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    saludarEstudiante(estudiante);
}
​
