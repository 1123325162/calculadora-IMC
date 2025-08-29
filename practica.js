function calcularIMC(peso, altura) {
  if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
    return "Error: ingresa valores válidos para peso y altura.";
  }

  const imc = peso / (altura * altura);
  let categoria = "";

  if (imc < 18.5) {
    categoria = "Bajo peso";
  } else if (imc < 24.9) {
    categoria = "Peso normal";
  } else if (imc < 29.9) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidad";
  }

  return `Tu IMC es ${imc.toFixed(2)} (${categoria})`;
}

// Ejemplo de uso:
const peso = 70;     // en kilogramos
const altura = 1.75; // en metros

console.log(calcularIMC(peso, altura));
