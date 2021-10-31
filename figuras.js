//Código del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

perimetroCuadrado(lado);

function areaCuadrado(lado) {
  return lado * lado;
}

areaCuadrado(Number(lado));

console.groupEnd();

//Código del Triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

perimetroTriangulo();

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

areaTriangulo();

console.groupEnd();

//Código del Círculo
console.group("Círculos");

function diametroCirculo(radio) {
  return radio * 2;
}

diametroCirculo();

const PI = Math.PI;

//Circunferencia

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

perimetroCirculo();

function areaCirculo(radio) {
  return radio * radio * PI;
}

areaCirculo();

console.groupEnd();

//Interactuamos con el HTML

// Interaccion Cuadrado

function calcularPerimetroCuadrado() {
  const input = document.querySelector("#inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert("El perímetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.querySelector("#inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert("El area del cuadrado es: " + area);
}

//Interaccion Triangulo

function calcularPerimetroTriangulo() {
  const input = document.querySelector("#inputTriangulo");
  const value = input.value;

  const perimetro = perimetroTriangulo(value);
  alert("El perímetro del Triángulo es: " + perimetro);
}

function calcularAreaTriangulo() {
  const input = document.querySelector("#inputTriangulo");
  const value = input.value;

  const area = areaTriangulo(value);
  alert("El área del Triángulo es: " + area);
}
