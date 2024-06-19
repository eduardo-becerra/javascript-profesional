// Enumeración para los colores
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
}

// Interfaz para los rectángulos
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

// Creación de un rectángulo con las propiedades ancho y alto
let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo, // Descomentar si se quiere asignar un color
};

// Función para calcular el área de un rectángulo
function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

// Cálculo del área del rectángulo
const areaRect = area(rect);
console.log(areaRect); // Salida: 24

// Añadiendo el método toString a la instancia rect
rect = Object.assign(rect, {
  toString: function () {
    return this.color
      ? `Un rectángulo ${this.color}`
      : `Un rectángulo sin color`;
  },
});

// Llamada al método toString y salida en consola
console.log(rect.toString()); // Salida: Un rectángulo sin color
