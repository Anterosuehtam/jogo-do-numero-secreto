/* 2.Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.*/
let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do desafio'

/* 3. Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado. */
function abrirConsole() {
    console.log('O botão foi clicado.')
}

/* 4. Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado. */
function mostrarAlerta() {
    alert('Eu amo JS. <3')
}

/* 5. Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você. */
function perguntarCidade() {
    let cidade = prompt('Insira o nome de uma  cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

/* 6. Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta. */
function somar() {
    let n1 = parseInt(prompt('Insira o primeiro número para somar: '));
    let n2 = parseInt(prompt('Insira o segundo número: '));
    let resultado = n1 + n2;
    alert(`O resultado da soma é ${resultado}.`);
}

