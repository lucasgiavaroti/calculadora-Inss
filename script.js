const inputSalario = document.getElementById("salario");
let salarioBruto = 0;

inputSalario.addEventListener("input", function () {
  salarioBruto = parseFloat(inputSalario.value) || 0; // Converte para número
});

let valorInss = 0;
let valorFgts = 0;
let salarioLiquido = 0;

function calculaInss() {
  if (salarioBruto <= 1412) {
    valorInss = salarioBruto * (7.5 / 100);
  } else if (salarioBruto > 1412 && salarioBruto <= 2427.35) {
    valorInss = salarioBruto * (9 / 100);
  } else if (salarioBruto > 2427.36 && salarioBruto <= 3641.03) {
    valorInss = salarioBruto * (12 / 100);
  } else if (salarioBruto > 3641.04) {
    valorInss = salarioBruto * (14 / 100);
  } else {
    alert("Digite um valor válido!");
  }
}

function calculaFgts() {
  valorFgts = salarioBruto * (8 / 100);
}

function calculaSalarioLiquido() {
  calculaInss();
  calculaFgts();
  salarioLiquido = salarioBruto - valorInss - valorFgts;
}

let inputInss = document.getElementById("inss");
let inputFgts = document.getElementById("fgts");
let inputLiquido = document.getElementById("liquido");

function exibeNaTela() {
  calculaSalarioLiquido();
  inputInss.textContent = valorInss.toFixed(2); // Exibe com duas casas decimais
  inputFgts.textContent = valorFgts.toFixed(2);
  inputLiquido.textContent = salarioLiquido.toFixed(2);
}
