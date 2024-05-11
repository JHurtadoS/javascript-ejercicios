function areaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}
function perimetroTriangulo(lado1: number, lado2: number, lado3: number): number {
  return lado1 + lado2 + lado3;
}
function areaCuadrado(lado: number): number {
  return lado * lado;
}
function perimetroCuadrado(lado: number): number {
  return lado * 4;
}
function areaRectangulo(base: number, altura: number): number {
  return base * altura;
}
function perimetroRectangulo(base: number, altura: number): number {
  return 2 * (base + altura);
}
function areaCirculo(radio: number): number {
  return Math.PI * radio * radio;
}
function perimetroCirculo(radio: number): number {
  return 2 * Math.PI * radio;
}


export {areaTriangulo,perimetroTriangulo,areaCuadrado,perimetroCuadrado,areaRectangulo,
    perimetroRectangulo,perimetroCirculo,areaCirculo}