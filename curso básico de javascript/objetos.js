var miAuto = {
    marca: "cutlass",
    modelo: "corolla",
    annio: 2020
};
miAuto.marca //esto sirve para buscar algo dentro de un objeto
miAuto.annio //igual esto

//existen metodos de objetos, basicamente meter funciones dentro del objeto

var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};
//this. sirve para acceder a dichos elementos del objeto

