const questions = [
    {
        question: "O que significa a sigla DHCP?",
        answers: [
            {text: "Dynamic Host Configuration Protocol", correct: true},
            {text: "Digital Host Connection Protocol", correct: false},
            {text: "Domain Host Control Program", correct: false},
            {text: "Dynamic Hardware Configuration Process", correct: false}
        ]
    },
    {
        question: "Qual é a principal função do servidor DHCP?",
        answers: [
            {text: "Traduzir nomes de domínio em endereços IP", correct: false},
            {text: "Atribuir endereços IP automaticamente aos dispositivos da rede", correct: true},
            {text: "Armazenar arquivos compartilhados na rede", correct: false},
            {text: "Gerenciar usuários e permissões de acesso", correct: false}
        ]
    },
    {
        question: "Quais portas o DHCP utiliza?",
        answers: [
            {text: "TCP 80 e 443", correct: false},
            {text: "UDP 53", correct: false},
            {text: "UDP 67 e 68", correct: true},
            {text: "TCP 21 e 22", correct: false}
        ]
    },
    {
        question: "O que significa a sigla DORA no contexto do DHCP?",
        answers: [
            {text: "Domain, Operation, Request, Acknowledge", correct: false},
            {text: "Discover, Offer, Request, Acknowledge", correct: true},
            {text: "Discover, Order, Relay, Assign", correct: false},
            {text: "Dynamic, Offer, Route, Address", correct: false}
        ]
    },
    {
        question: "Na etapa Discover do DHCP, o que o cliente faz?",
        answers: [
            {text: "Confirma o IP recebido do servidor", correct: false},
            {text: "Oferece um IP disponível ao cliente", correct: false},
            {text: "Envia um broadcast procurando um servidor DHCP na rede", correct: true},
            {text: "Solicita formalmente o IP oferecido", correct: false}
        ]
    },
    {
        question: "O que é o lease no DHCP?",
        answers: [
            {text: "O nome do servidor DHCP na rede", correct: false},
            {text: "O intervalo de IPs disponíveis para distribuição", correct: false},
            {text: "O tempo determinado pelo qual um IP é emprestado ao dispositivo", correct: true},
            {text: "A porta utilizada pelo protocolo DHCP", correct: false}
        ]
    },
    {
        question: "O que é o pool de endereços no DHCP?",
        answers: [
            {text: "O servidor responsável por guardar senhas", correct: false},
            {text: "O intervalo de IPs disponíveis para distribuição pelo servidor", correct: true},
            {text: "A lista de usuários autenticados na rede", correct: false},
            {text: "O cache de endereços DNS", correct: false}
        ]
    },
    {
        question: "Para que serve a reserva de IP no DHCP?",
        answers: [
            {text: "Para bloquear dispositivos desconhecidos na rede", correct: false},
            {text: "Para vincular um IP fixo a um MAC address específico", correct: true},
            {text: "Para excluir IPs do pool de distribuição", correct: false},
            {text: "Para configurar o gateway padrão da rede", correct: false}
        ]
    },
    {
        question: "O que faz o relay agent no DHCP?",
        answers: [
            {text: "Renova automaticamente o lease dos dispositivos", correct: false},
            {text: "Traduz nomes de domínio para endereços IP", correct: false},
            {text: "Encaminha solicitações DHCP entre sub-redes diferentes", correct: true},
            {text: "Reserva IPs para servidores fixos", correct: false}
        ]
    },
    {
        question: "O que significa a sigla DNS?",
        answers: [
            {text: "Dynamic Network Service", correct: false},
            {text: "Domain Name System", correct: true},
            {text: "Data Node Server", correct: false},
            {text: "Digital Name Structure", correct: false}
        ]
    },
    {
        question: "Qual é a principal função do servidor DNS?",
        answers: [
            {text: "Distribuir endereços IP automaticamente", correct: false},
            {text: "Gerenciar permissões de usuários na rede", correct: false},
            {text: "Traduzir nomes de domínio em endereços IP", correct: true},
            {text: "Armazenar arquivos de configuração da rede", correct: false}
        ]
    },
    {
        question: "Qual porta o DNS utiliza?",
        answers: [
            {text: "UDP/TCP 53", correct: true},
            {text: "UDP 67 e 68", correct: false},
            {text: "TCP 80", correct: false},
            {text: "TCP 443", correct: false}
        ]
    },
    {
        question: "Qual tipo de registro DNS mapeia um domínio para um endereço IPv4?",
        answers: [
            {text: "MX", correct: false},
            {text: "CNAME", correct: false},
            {text: "A", correct: true},
            {text: "PTR", correct: false}
        ]
    },
    {
        question: "Para que serve o registro MX no DNS?",
        answers: [
            {text: "Mapear domínio para IPv6", correct: false},
            {text: "Indicar o servidor de e-mail do domínio", correct: true},
            {text: "Criar um apelido para outro domínio", correct: false},
            {text: "Fazer resolução reversa de IP", correct: false}
        ]
    },
    {
        question: "O que é o registro CNAME no DNS?",
        answers: [
            {text: "Um registro que aponta os servidores autoritativos do domínio", correct: false},
            {text: "Um registro que converte IP em nome de domínio", correct: false},
            {text: "Um apelido que aponta para outro domínio", correct: true},
            {text: "Um registro de texto usado para autenticação de e-mail", correct: false}
        ]
    },
    {
        question: "O que é o TTL no DNS?",
        answers: [
            {text: "O tempo máximo de duração do lease DHCP", correct: false},
            {text: "O tempo pelo qual uma resposta DNS fica armazenada em cache", correct: true},
            {text: "O número máximo de consultas por segundo", correct: false},
            {text: "O tamanho máximo de um registro DNS", correct: false}
        ]
    },
    {
        question: "O que é o DNS reverso?",
        answers: [
            {text: "Um servidor DNS de backup", correct: false},
            {text: "A conversão de nome de domínio em IPv6", correct: false},
            {text: "A conversão de endereço IP em nome de domínio", correct: true},
            {text: "O processo de renovar o cache DNS", correct: false}
        ]
    },
    {
        question: "O que é o DNSSEC?",
        answers: [
            {text: "Um protocolo para distribuir IPs com segurança", correct: false},
            {text: "Uma extensão que assina digitalmente registros DNS para evitar falsificação", correct: true},
            {text: "Um tipo de servidor DNS secundário", correct: false},
            {text: "Uma política de senha aplicada ao servidor DNS", correct: false}
        ]
    },
    {
        question: "Qual a diferença entre zona primária e zona secundária no DNS?",
        answers: [
            {text: "A primária é mais rápida; a secundária é mais segura", correct: false},
            {text: "A primária é onde os registros são criados; a secundária é uma cópia de backup", correct: true},
            {text: "Não há diferença entre elas", correct: false},
            {text: "A primária atende IPv4; a secundária atende IPv6", correct: false}
        ]
    },
    {
        question: "Como o DHCP e o DNS trabalham juntos?",
        answers: [
            {text: "O DNS distribui IPs e o DHCP traduz nomes", correct: false},
            {text: "Eles são independentes e não se relacionam", correct: false},
            {text: "O DHCP atribui o IP ao dispositivo e já entrega o endereço do servidor DNS junto", correct: true},
            {text: "O DHCP consulta o DNS antes de distribuir qualquer IP", correct: false}
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