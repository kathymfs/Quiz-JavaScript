const perguntas = [
    {
        pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toInteger()",
        ],
        correta: 2 // "toInteger()"
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Document Object Model",
            "Data Object Model",
            "Dynamic Object Model",
        ],
        correta: 1 // "Data Object Model"
    },
    {
        pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "addToEnd()",
        ],
        correta: 0 // "push()"
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara valores e tipos de dados",
            "Compara apenas valores",
            "Compara apenas tipos de dados",
        ],
        correta: 0 // "Compara valores e tipos de dados"
    },
    {
        pergunta: "O que é NaN em JavaScript?",
        respostas: [
            "Not a Number",
            "Null and Nothing",
            "Number and Null",
        ],
        correta: 1 // "Null and Nothing"
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "log()",
        ],
        correta: 2 // "log()"
    },
    {
        pergunta: "O que o operador '&&' representa em JavaScript?",
        respostas: [
            "E lógico (AND)",
            "OU lógico (OR)",
            "NÃO lógico (NOT)",
        ],
        correta: 1 // "OU lógico (OR)"
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 0 // "var"
    },
    {
        pergunta: "O que o método 'map()' faz em um array em JavaScript?",
        respostas: [
            "Cria um novo array com os resultados de uma função para cada elemento",
            "Remove elementos específicos do array",
            "Altera o tamanho do array",
        ],
        correta: 0 // "Cria um novo array com os resultados de uma função para cada elemento"
    },
    {
        pergunta: "Como se chama a técnica de empacotar variáveis e funções juntas em um único objeto em JavaScript?",
        respostas: [
            "Encapsulamento",
            "Agregação",
            "Herança",
        ],
        correta: 2 // "Herança"
    },
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute("name", "pergunta-" + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
   
    dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta) {
            corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
   
   
    quizItem.querySelector('dl').appendChild(dt)
}
quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
    
}