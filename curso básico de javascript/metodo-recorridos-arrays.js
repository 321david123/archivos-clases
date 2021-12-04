var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
];
// esto es un filtro - forma1
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
// este es otro filtro - forma2
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
// map me trae todo eso


// recorrer arrays
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});
encuentraArticulo
// esto me da 1 articulo que yo busque

//forEach. este te da solo el resultado sin hacer una nueva 
// variable,
articulos.forEach(function(articulo){
    console.log(articulo.nombre) // si cambio el .nombre por .costo me da los costos
});

// metodo some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
// solo regresa si existen articulos que valen menos de la condicion final

//