const questions = [
    {
        question: "O que significa a sigla ADDS?",
        answers: [
            {text: "Active Directory Domain Services", correct: true},
            {text: "Advanced Data Distribution System", correct: false},
            {text: "Automated Domain Deployment Service", correct: false},
            {text: "Active Device Directory System", correct: false}
        ]
    },
    {
        question: "Qual é a principal função do Active Directory?",
        answers: [
            {text: "Instalar programas automaticamente nos computadores", correct: false},
            {text: "Gerenciar usuários, computadores e recursos da rede de forma centralizada", correct: true},
            {text: "Configurar a velocidade da internet", correct: false},
            {text: "Fazer backup dos arquivos da empresa", correct: false}
        ]
    },
    {
        question: "O que o Active Directory armazena?",
        answers: [
            {text: "Apenas arquivos de texto e documentos", correct: false},
            {text: "Somente senhas dos usuários", correct: false},
            {text: "Informações sobre usuários, computadores, impressoras, grupos e recursos da rede", correct: true},
            {text: "Configurações de hardware do servidor", correct: false}
        ]
    },
    {
        question: "Cite três exemplos de recursos gerenciados pelo AD:",
        answers: [
            {text: "Teclado, mouse e monitor", correct: false},
            {text: "Usuários, computadores e impressoras", correct: true},
            {text: "Cabo, roteador e switch", correct: false},
            {text: "HD, RAM e processador", correct: false}
        ]
    },
    {
        question: "O que é autenticação de rede?",
        answers: [
            {text: "O processo de instalar o sistema operacional", correct: false},
            {text: "A configuração do endereço IP do computador", correct: false},
            {text: "O processo de verificar a identidade do usuário através do login e senha", correct: true},
            {text: "A conexão física entre computadores", correct: false}
        ]
    },
    {
        question: "Qual serviço é responsável por verificar o login dos usuários?",
        answers: [
            {text: "DNS Server", correct: false},
            {text: "Active Directory", correct: true},
            {text: "DHCP", correct: false},
            {text: "Firewall", correct: false}
        ]
    },
    {
        question: "O que é um domínio?",
        answers: [
            {text: "Um tipo de cabo de rede", correct: false},
            {text: "Um limite administrativo e de segurança que organiza e controla os recursos da rede", correct: true},
            {text: "Um programa de antivírus corporativo", correct: false},
            {text: "Um servidor de arquivos", correct: false}
        ]
    },
    {
        question: "Qual é a diferença principal entre uma rede doméstica e uma rede corporativa?",
        answers: [
            {text: "A doméstica é mais rápida que a corporativa", correct: false},
            {text: "Não há diferença entre elas", correct: false},
            {text: "A corporativa usa cabos; a doméstica usa Wi-Fi", correct: false},
            {text: "A doméstica é descentralizada; a corporativa é centralizada", correct: true}
        ]
    },
    {
        question: "Qual servidor foi utilizado no exemplo para instalar o ADDS?",
        answers: [
            {text: "CLI-01", correct: false},
            {text: "SRV-01", correct: false},
            {text: "DC-01", correct: true},
            {text: "AD-01", correct: false}
        ]
    },
    {
        question: "Qual serviço deve ser instalado junto com o ADDS?",
        answers: [
            {text: "DHCP Server", correct: false},
            {text: "DNS Server", correct: true},
            {text: "FTP Server", correct: false},
            {text: "Web Server (IIS)", correct: false}
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
    let questionNo = currentQuestionIndex + 1 + " Pergunta";
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