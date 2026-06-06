const questions = [
    {
        question: "O que é um Sistema Operacional?",
        answers: [
            {text: "Software que gerencia recursos e atua como intermediário entre usuário e hardware", correct: true},
            {text: "Software para navegação na internet", correct: false},
            {text: "Hardware responsável pelo processamento", correct: false},
            {text: "Programa para edição de textos", correct: false}
        ]
    },
    {
        question: "Qual a função de um SOR?",
        answers: [
            {text: "Apenas instalar programas nos computadores", correct: false},
            {text: "Compartilhar recursos, controlar usuários e fornecer segurança em rede", correct: true},
            {text: "Substituir o hardware dos computadores", correct: false},
            {text: "Gerenciar somente impressoras", correct: false}
        ]
    },
    {
        question: "O que é uma Máquina Virtual?",
        answers: [
            {text: "Um computador físico dedicado a testes", correct: false},
            {text: "Um tipo de processador mais rápido", correct: false},
            {text: "Software que simula um computador completo dentro de outro computador", correct: true},
            {text: "Um sistema de backup automático", correct: false}
        ]
    },
    {
        question: "O que é o Host em virtualização?",
        answers: [
            {text: "O SO instalado dentro da máquina virtual", correct: false},
            {text: "O software de gerenciamento de VMs", correct: false},
            {text: "O computador físico onde a VM é executada", correct: true},
            {text: "A imagem ISO do sistema", correct: false}
        ]
    },
    {
        question: "O que é um Hipervisor?",
        answers: [
            {text: "Um tipo de memória RAM", correct: false},
            {text: "Software responsável por criar, executar e gerenciar máquinas virtuais", correct: true},
            {text: "Um protocolo de rede", correct: false},
            {text: "Um antivírus para servidores", correct: false}
        ]
    },
    {
        question: "Qual a diferença entre Hipervisor Bare Metal e Hospedado?",
        answers: [
            {text: "Bare Metal funciona sobre um SO; Hospedado funciona direto no hardware", correct: false},
            {text: "São a mesma coisa, apenas nomes diferentes", correct: false},
            {text: "Bare Metal é mais lento que o Hospedado", correct: false},
            {text: "Bare Metal funciona direto no hardware; Hospedado funciona sobre um SO instalado", correct: true}
        ]
    },
    {
        question: "Qual dessas NÃO é uma plataforma de virtualização?",
        answers: [
            {text: "VirtualBox", correct: false},
            {text: "VMware", correct: false},
            {text: "Photoshop", correct: true},
            {text: "Hyper-V", correct: false}
        ]
    },
    {
        question: "O que é uma imagem ISO?",
        answers: [
            {text: "Um formato de imagem para fotos", correct: false},
            {text: "Cópia digital de um disco de instalação usada para instalar sistemas operacionais", correct: true},
            {text: "Um tipo de partição de disco", correct: false},
            {text: "Um protocolo de segurança", correct: false}
        ]
    },
    {
        question: "Qual a diferença entre NAT e Rede em Ponte?",
        answers: [
            {text: "NAT deixa a VM visível na rede; Rede em Ponte não", correct: false},
            {text: "Não há diferença entre os dois modos", correct: false},
            {text: "NAT não acessa internet; Rede em Ponte sim", correct: false},
            {text: "NAT oculta a VM na rede; Rede em Ponte deixa a VM visível como um computador real", correct: true}
        ]
    },
    {
        question: "Qual das opções é uma vantagem da virtualização?",
        answers: [
            {text: "Aumenta o consumo de hardware físico", correct: false},
            {text: "Impede a execução de múltiplos sistemas operacionais", correct: false},
            {text: "Permite testes seguros sem afetar o sistema principal", correct: true},
            {text: "Reduz a segurança do sistema", correct: false}
        ]
    }
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-button");
const nextButton = document.querySelector("#next-btn");
const barra = document.querySelector("#barra");
const progressoTexto = document.querySelector("#progresso-texto");
const perguntaLabel = document.querySelector("#pergunta-label");

let currentQuestionIndex = 0;
let score = 0;

function atualizarProgresso() {
    const total = questions.length;
    const atual = currentQuestionIndex + 1;
    barra.style.width = (atual / total * 100) + "%";
    progressoTexto.textContent = atual + " / " + total;
    perguntaLabel.textContent = "Pergunta " + atual;
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    atualizarProgresso(); 
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct"); 
        score++;
    } else {
        selectedBtn.classList.add("wrong"); 
    }

    // mostra a resposta certa e bloqueia os outros botões
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true; 
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    perguntaLabel.textContent = "Resultado";
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas! Parabens`;
    barra.style.width = "100%";
    progressoTexto.textContent = questions.length + " / " + questions.length;
    nextButton.innerHTML = "Jogar de novo";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz(); 
    }
});

startQuiz();