// Enumeración para los colores
enum Color {
  Red = "Rojo",
  Green = "Verde",
}

// Interfaz para los rectángulos
interface Rectangle {
  width: number;
  height: number;
  color?: Color;
}

// Creación de un rectángulo con las propiedades ancho y alto
let rect: Rectangle = {
  width: 4,
  height: 6,
  // color: Color.Red,
};

// Función para calcular el área de un rectángulo
function area(r: Rectangle): number {
  return r.height * r.width;
}

// Cálculo del área del rectángulo
const rectArea = area(rect);
console.log(rectArea); // Salida: 24

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
