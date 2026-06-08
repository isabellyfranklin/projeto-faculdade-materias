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
    },
    {
        question: "O que é o Active Directory?",
        answers: [
            {text: "É um serviço de diretório da Microsoft que gerencia usuários, computadores, grupos e recursos de uma rede de forma centralizada", correct: true},
            {text: "É um programa de edição de documentos da Microsoft", correct: false},
            {text: "É um sistema operacional para servidores", correct: false},
            {text: "É um software de backup de dados", correct: false}
        ]
    },
    {
        question: "O que são permissões no Active Directory?",
        answers: [
            {text: "São senhas criadas para cada usuário", correct: false},
            {text: "São regras que determinam quais recursos um usuário pode acessar", correct: true},
            {text: "São configurações de hardware do servidor", correct: false},
            {text: "São relatórios de acesso gerados automaticamente", correct: false}
        ]
    },
    {
        question: "O que são grupos no Active Directory?",
        answers: [
            {text: "São servidores agrupados por localização", correct: false},
            {text: "São conjuntos de usuários organizados para facilitar o gerenciamento de permissões", correct: true},
            {text: "São pastas compartilhadas na rede", correct: false},
            {text: "São políticas de senha aplicadas ao sistema", correct: false}
        ]
    },
    {
        question: "O que significa GPO?",
        answers: [
            {text: "General Protection Order", correct: false},
            {text: "Group Policy Object", correct: true},
            {text: "Global Permission Override", correct: false},
            {text: "Grouped Protocol Operation", correct: false}
        ]
    },
    {
        question: "Para que servem as GPOs?",
        answers: [
            {text: "Para instalar o Active Directory no servidor", correct: false},
            {text: "Para aplicar configurações e políticas de segurança a usuários e computadores de forma automática", correct: true},
            {text: "Para criar backups automáticos dos arquivos", correct: false},
            {text: "Para monitorar a velocidade da rede", correct: false}
        ]
    },
    {
        question: "O que é uma Unidade Organizacional (OU)?",
        answers: [
            {text: "Um tipo de servidor dedicado ao armazenamento", correct: false},
            {text: "Uma estrutura usada para organizar usuários, computadores e grupos dentro do Active Directory", correct: true},
            {text: "Um protocolo de comunicação entre servidores", correct: false},
            {text: "Um relatório de auditoria de acessos", correct: false}
        ]
    },
    {
        question: "O que são objetos no Active Directory?",
        answers: [
            {text: "São os arquivos armazenados no servidor", correct: false},
            {text: "São os elementos armazenados no diretório, como usuários, computadores e grupos", correct: true},
            {text: "São as configurações de rede do sistema", correct: false},
            {text: "São os logs de acesso dos usuários", correct: false}
        ]
    },
    {
        question: "Explique a diferença entre autenticação e autorização:",
        answers: [
            {text: "São a mesma coisa no Active Directory", correct: false},
            {text: "Autenticação verifica quem é o usuário; autorização determina o que ele pode acessar", correct: true},
            {text: "Autenticação é para computadores; autorização é para usuários", correct: false},
            {text: "Autenticação define permissões; autorização verifica a senha", correct: false}
        ]
    },
    {
        question: "O que aconteceria se cada usuário recebesse permissões individualmente em uma empresa grande?",
        answers: [
            {text: "Seria mais seguro e organizado", correct: false},
            {text: "O gerenciamento seria mais complexo, demorado e sujeito a erros", correct: true},
            {text: "O Active Directory funcionaria mais rápido", correct: false},
            {text: "As GPOs seriam aplicadas automaticamente", correct: false}
        ]
    },
    {
        question: "Qual é o benefício da administração centralizada no Active Directory?",
        answers: [
            {text: "Aumenta o custo de manutenção da rede", correct: false},
            {text: "Facilita o gerenciamento da rede, reduz erros e aumenta a segurança", correct: true},
            {text: "Permite que cada usuário configure seu próprio acesso", correct: false},
            {text: "Elimina a necessidade de um servidor na rede", correct: false}
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
    let questionNo = currentQuestionIndex + 1 ;
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