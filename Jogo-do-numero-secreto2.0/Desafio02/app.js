/* 1. Criar uma função que exibe "Olá, mundo!" no console. */
function exibirTexto() {
    console.log('Olá, mundo!')
}
exibirTexto();
/* ---------------------------------------------------------*/

/* 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console. */
function exibeNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibeNome('Matheus')
/* ---------------------------------------------------------*/

/* 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número. */
function dobrarNumero(numero) {
    return numero * 2;
}
let resultado = dobrarNumero(5);
console.log(resultado);
/* ---------------------------------------------------------*/

/* 4. Criar uma função que recebe três números como parâmetros e retorna a média deles. */
function mediaNumero(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let media = mediaNumero(20, 20, 20);
console.log(media)
/* ---------------------------------------------------------*/

/* 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles. */
function retornaMaior (n1, n2) {
    return n1 > n2 ? n1 : n2;
}

let maior = retornaMaior(30, 5);
console.log(maior);
/* ---------------------------------------------------------*/

/* 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo. */
function quadrado(num) {
    return num * num;
}

let multiplicacao = quadrado(10);
console.log(multiplicacao);