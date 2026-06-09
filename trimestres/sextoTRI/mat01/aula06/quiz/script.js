const questions = [
    {
        question: "O que é o serviço de impressão em redes corporativas?",
        answers: [
            {text: "Um programa para editar documentos antes de imprimir", correct: false},
            {text: "Um serviço que permite múltiplos usuários compartilharem impressoras a partir de um servidor central", correct: true},
            {text: "Um sistema de backup de arquivos impressos", correct: false},
            {text: "Um protocolo de comunicação entre impressoras", correct: false}
        ]
    },
    {
        question: "Qual é a vantagem da centralização do gerenciamento de impressoras?",
        answers: [
            {text: "Cada computador instala seu próprio driver de impressora", correct: false},
            {text: "O administrador gerencia todas as impressoras a partir de um único servidor, sem configurar cada computador individualmente", correct: true},
            {text: "As impressoras funcionam sem precisar de servidor", correct: false},
            {text: "Os usuários configuram suas próprias impressoras", correct: false}
        ]
    },
    {
        question: "O que é a fila de impressão?",
        answers: [
            {text: "A lista de impressoras disponíveis na rede", correct: false},
            {text: "O espaço de memória da impressora", correct: false},
            {text: "A lista de trabalhos aguardando para serem impressos, organizada pelo servidor", correct: true},
            {text: "O relatório mensal de páginas impressas", correct: false}
        ]
    },
    {
        question: "O que o administrador pode fazer com a fila de impressão?",
        answers: [
            {text: "Apenas visualizar os trabalhos, sem poder alterá-los", correct: false},
            {text: "Pausar, cancelar, alterar prioridade e reiniciar trabalhos com erro", correct: true},
            {text: "Somente cancelar trabalhos de outros usuários", correct: false},
            {text: "Apenas reiniciar a impressora remotamente", correct: false}
        ]
    },
    {
        question: "Um funcionário mandou imprimir 500 páginas por engano. O que o administrador pode fazer?",
        answers: [
            {text: "Nada, pois o trabalho já foi enviado para a impressora", correct: false},
            {text: "Desligar a impressora manualmente", correct: false},
            {text: "Cancelar o trabalho diretamente na fila do servidor, evitando desperdício", correct: true},
            {text: "Aguardar a impressão terminar e depois apagar o log", correct: false}
        ]
    },
    {
        question: "O que o controle de permissões no serviço de impressão permite definir?",
        answers: [
            {text: "A velocidade de impressão de cada usuário", correct: false},
            {text: "Quem pode imprimir, gerenciar a fila e administrar as impressoras", correct: true},
            {text: "O tamanho máximo dos arquivos enviados para impressão", correct: false},
            {text: "A quantidade de tinta usada por impressão", correct: false}
        ]
    },
    {
        question: "Qual é um exemplo prático do controle de permissões em impressoras?",
        answers: [
            {text: "Todos os funcionários podem usar qualquer impressora da empresa", correct: false},
            {text: "A impressora colorida da diretoria só pode ser usada por diretores e pelo setor de marketing", correct: true},
            {text: "Apenas o administrador pode imprimir documentos", correct: false},
            {text: "As impressoras só funcionam durante o horário comercial", correct: false}
        ]
    },
    {
        question: "Como as impressoras podem ser instaladas automaticamente nos computadores dos usuários?",
        answers: [
            {text: "O usuário instala manualmente ao fazer login", correct: false},
            {text: "O administrador visita cada computador e instala individualmente", correct: false},
            {text: "Através de Políticas de Grupo (GPO) do Active Directory", correct: true},
            {text: "As impressoras se instalam sozinhas ao serem ligadas na rede", correct: false}
        ]
    },
    {
        question: "O que acontece com as impressoras quando um funcionário troca de setor, usando GPO?",
        answers: [
            {text: "Nada, as impressoras permanecem as mesmas", correct: false},
            {text: "O funcionário precisa instalar manualmente as novas impressoras", correct: false},
            {text: "A impressora antiga é removida e a nova impressora do setor é instalada automaticamente", correct: true},
            {text: "Todas as impressoras da empresa são reinstaladas", correct: false}
        ]
    },
    {
        question: "De que forma o serviço de impressão gera economia para a empresa?",
        answers: [
            {text: "Comprando uma impressora para cada funcionário", correct: false},
            {text: "Reduzindo a quantidade de equipamentos, manutenção e consumo de energia com o compartilhamento", correct: true},
            {text: "Eliminando completamente o uso de papel", correct: false},
            {text: "Substituindo impressoras por scanners", correct: false}
        ]
    },
    {
        question: "Qual é o benefício do monitoramento e auditoria no serviço de impressão?",
        answers: [
            {text: "Aumentar a velocidade de impressão", correct: false},
            {text: "Registrar quem imprimiu, quantas páginas, em qual impressora e quando", correct: true},
            {text: "Bloquear impressões fora do horário comercial", correct: false},
            {text: "Reduzir automaticamente o consumo de tinta", correct: false}
        ]
    },
    {
        question: "O que o administrador pode fazer com os dados de auditoria de impressão?",
        answers: [
            {text: "Apenas guardar os logs sem utilidade prática", correct: false},
            {text: "Criar cotas de impressão por setor com base no uso monitorado", correct: true},
            {text: "Desativar impressoras com baixo uso automaticamente", correct: false},
            {text: "Aumentar a memória das impressoras remotamente", correct: false}
        ]
    },
    {
        question: "O que é um pool de impressoras?",
        answers: [
            {text: "Um grupo de usuários com permissão para imprimir", correct: false},
            {text: "Um agrupamento de duas ou mais impressoras idênticas em uma única fila para alta disponibilidade", correct: true},
            {text: "Uma fila de impressão separada para cada setor", correct: false},
            {text: "Um servidor dedicado exclusivamente para impressão", correct: false}
        ]
    },
    {
        question: "Qual é a vantagem do pool de impressoras?",
        answers: [
            {text: "Aumentar a qualidade de impressão", correct: false},
            {text: "Se uma impressora travar, o servidor direciona automaticamente o trabalho para outra disponível", correct: true},
            {text: "Permitir que duas impressoras imprimam o mesmo documento simultaneamente", correct: false},
            {text: "Reduzir o consumo de tinta das impressoras", correct: false}
        ]
    },
    {
        question: "O que é a prioridade de impressão?",
        answers: [
            {text: "A velocidade máxima de páginas por minuto da impressora", correct: false},
            {text: "Uma configuração que define quais usuários ou setores têm seus trabalhos impressos antes dos demais", correct: true},
            {text: "A ordem alfabética dos nomes dos usuários na fila", correct: false},
            {text: "O tamanho máximo de arquivo que pode ser enviado para impressão", correct: false}
        ]
    },
    {
        question: "Como funciona a prioridade de impressão na prática?",
        answers: [
            {text: "Todos os usuários têm a mesma prioridade, sem exceções", correct: false},
            {text: "O documento da diretoria é impresso primeiro mesmo que outros trabalhos já estejam na fila", correct: true},
            {text: "O primeiro a enviar sempre imprime primeiro, sem exceções", correct: false},
            {text: "A prioridade é definida pelo tamanho do documento", correct: false}
        ]
    },
    {
        question: "O que é a impressão segura?",
        answers: [
            {text: "Um sistema que imprime apenas documentos criptografados", correct: false},
            {text: "Um recurso que exige autenticação do usuário diretamente na impressora antes de imprimir", correct: true},
            {text: "Um modo de impressão que usa menos tinta para economizar", correct: false},
            {text: "Um sistema que bloqueia impressoras fora do horário comercial", correct: false}
        ]
    },
    {
        question: "Qual é o benefício da impressão segura?",
        answers: [
            {text: "Aumentar a velocidade de impressão de documentos importantes", correct: false},
            {text: "Evitar que documentos confidenciais fiquem expostos na bandeja da impressora", correct: true},
            {text: "Reduzir o consumo de papel em documentos sigilosos", correct: false},
            {text: "Permitir impressão remota fora da empresa", correct: false}
        ]
    },
    {
        question: "Em qual situação a impressão segura é mais indicada?",
        answers: [
            {text: "Para imprimir listas de presença de reuniões", correct: false},
            {text: "Para imprimir cardápios do refeitório da empresa", correct: false},
            {text: "Para imprimir contratos sigilosos no departamento jurídico", correct: true},
            {text: "Para imprimir etiquetas de produtos no estoque", correct: false}
        ]
    },
    {
        question: "Em uma frase, como o serviço de impressão pode ser definido?",
        answers: [
            {text: "Um sistema que substitui impressoras físicas por impressão digital", correct: false},
            {text: "Um serviço que transforma impressoras isoladas em um recurso compartilhado, controlado e eficiente para toda a empresa", correct: true},
            {text: "Um programa de monitoramento de consumo de tinta", correct: false},
            {text: "Um protocolo de rede exclusivo para envio de arquivos para impressoras", correct: false}
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