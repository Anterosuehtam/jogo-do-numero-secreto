/* 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
em metros, e peso, em quilogramas, que serão recebidos como parâmetro. */
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
}

/* 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro. */
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
// Exemplo
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);


/* 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
Para isso, considere a cotação do dólar igual a R$4,80. */
function conversorDolar(valorDolar) {
    let cotacaoDolar = 4.80;
    let valorReais = valorDolar * cotacaoDolar;
    return valorReais.toFixed(2);
}
// Exemplo
let valorDolar = 50;
let valorReais = conversorDolar(valorDolar)
console.log(`$${valorDolar} dólares equivalema a R$${valorReais}`);


/* 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro. */
function areaPerimetroSalaRetangular(altura, largura) {
    let areaSala = altura * largura;
    let perimetroSala = 2 * (altura * largura);
    console.log(`Área da sala: ${areaSala} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetroSala} metros`);
}
// Exemplo
let altura = 10;
let largura = 5;
areaPerimetroSalaRetangular(altura, largura);


/* 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14. */
function areaPerimetroSalaCircular(raio) {
    let areaCircular = Math.PI * raio * raio;
    let perimetroCircular = 2 * Math.PI * raio;
    console.log(`Área da sala circular: ${areaCircular.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetroCircular.toFixed(2)} metros`);
}

// Exemplo
let raio = 5;
areaPerimetroSalaCircular(raio);

/* 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. */
function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        let resultadoTabuada = num * i;
        console.log(`${num} x ${i} = ${resultadoTabuada}`);
    }
}
// Exemplo de uso
let num = 5;
tabuada(num);