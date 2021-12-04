// esto es del cuadrado
// console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
// console.groupEnd("");
// esto es del triangulo
// console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const BaseTriangulo = 4;
// const altura = 5.5;
// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm y " +
//     BaseTriangulo +
//     "cm base"
// );
// console.log("La altura del triangulo es de: " + altura + "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("el Area del Triangulo es: " + areaTriangulo + "cm^2")
// console.groupEnd;

//Esto es de un circulo 
function diametroCirculo(radio) {
    return radio * 2; 
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
function areaCirculo(radio){
    return (radio * radio) * pi;
}
// console.group("Circulos");
// const radioCirculo = 4;
// console.log("El radio es de: " + radioCirculo + "cm")
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro es de: " + diametroCirculo + "cm")
const pi = Math.PI;
// console.log("pi vale: " + pi);
// const perimetroCirculo = diametroCirculo * pi;
// console.log("El perimetro es: " + perimetroCirculo + "cm")
// const areaCirculo = (radioCirculo * radioCirculo) * pi;
// console.log("El area vale: " + areaCirculo + "cm^2")

// console.groupEnd();


// se interactua con html

// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}
// Cuadrado


// Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = input3.value;

    const perimetro = perimetroTriangulo(+lado1, +lado2, +base);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputArea");
    const input2 = document.getElementById("InputArea2");
    const base = input.value;
    const altura = input2.value;
    
    const area = areaTriangulo(base, altura);
    alert(area);
}
// </Triangulo>


// Circulo 
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;
    
    const area = areaCirculo(radio);
    alert(area);
}