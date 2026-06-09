const questions = [
    {
        question: "O que é o gerenciamento de disco?",
        answers: [
            {text: "Um programa para editar arquivos de texto", correct: false},
            {text: "O conjunto de processos e ferramentas para organizar, configurar e controlar discos de armazenamento", correct: true},
            {text: "Um sistema de backup automático de dados", correct: false},
            {text: "Um protocolo de comunicação entre servidores", correct: false}
        ]
    },
    {
        question: "Qual é a diferença entre HDD e SSD?",
        answers: [
            {text: "HDD é mais rápido; SSD é mais barato", correct: false},
            {text: "HDD usa partes móveis e é mais barato; SSD é de estado sólido e mais rápido", correct: true},
            {text: "Não há diferença entre eles", correct: false},
            {text: "HDD é usado apenas em servidores; SSD apenas em computadores pessoais", correct: false}
        ]
    },
    {
        question: "O que é o NVMe?",
        answers: [
            {text: "Um tipo de HDD de alta capacidade", correct: false},
            {text: "Um protocolo de rede para transferência de arquivos", correct: false},
            {text: "Um tipo de SSD conectado ao barramento PCIe com velocidade ainda maior", correct: true},
            {text: "Um sistema de arquivos usado no Linux", correct: false}
        ]
    },
    {
        question: "Qual é a principal limitação do estilo de partição MBR?",
        answers: [
            {text: "Não funciona no Windows", correct: false},
            {text: "Suporta discos de até 2 TB e no máximo 4 partições primárias", correct: true},
            {text: "Não permite formatação NTFS", correct: false},
            {text: "Só funciona com discos SSD", correct: false}
        ]
    },
    {
        question: "Qual estilo de partição é recomendado para discos modernos acima de 2 TB?",
        answers: [
            {text: "MBR", correct: false},
            {text: "FAT32", correct: false},
            {text: "GPT", correct: true},
            {text: "NTFS", correct: false}
        ]
    },
    {
        question: "O que é particionar um disco?",
        answers: [
            {text: "Formatar o disco com um sistema de arquivos", correct: false},
            {text: "Dividir o espaço físico do disco em regiões separadas e independentes", correct: true},
            {text: "Combinar dois discos em um único volume", correct: false},
            {text: "Verificar erros e setores defeituosos no disco", correct: false}
        ]
    },
    {
        question: "O que é a formatação de uma partição?",
        answers: [
            {text: "O processo de dividir o disco em partes menores", correct: false},
            {text: "O processo de prepará-la com um sistema de arquivos para gravar e ler dados", correct: true},
            {text: "O processo de inicializar o disco com MBR ou GPT", correct: false},
            {text: "O processo de atribuir uma letra de unidade ao disco", correct: false}
        ]
    },
    {
        question: "Qual sistema de arquivos é o padrão do Windows e suporta permissões e criptografia?",
        answers: [
            {text: "FAT32", correct: false},
            {text: "exFAT", correct: false},
            {text: "ext4", correct: false},
            {text: "NTFS", correct: true}
        ]
    },
    {
        question: "Qual sistema de arquivos é indicado para pen drives e cartões de memória sem limite prático de tamanho?",
        answers: [
            {text: "NTFS", correct: false},
            {text: "FAT32", correct: false},
            {text: "exFAT", correct: true},
            {text: "ext4", correct: false}
        ]
    },
    {
        question: "Qual é a limitação do sistema de arquivos FAT32?",
        answers: [
            {text: "Não funciona no Windows", correct: false},
            {text: "Não suporta pen drives", correct: false},
            {text: "Arquivos individuais são limitados a 4 GB", correct: true},
            {text: "Suporta apenas discos de até 500 GB", correct: false}
        ]
    },
    {
        question: "Qual é a diferença entre disco básico e disco dinâmico?",
        answers: [
            {text: "Disco básico é mais rápido; disco dinâmico é mais seguro", correct: false},
            {text: "Disco básico usa partições simples; disco dinâmico permite volumes avançados como RAID", correct: true},
            {text: "Disco básico é usado em servidores; disco dinâmico em computadores pessoais", correct: false},
            {text: "Não há diferença entre eles", correct: false}
        ]
    },
    {
        question: "O que é um volume distribuído (Spanned)?",
        answers: [
            {text: "Um volume que duplica os dados em dois discos para segurança", correct: false},
            {text: "Um volume que une espaço de dois ou mais discos em um único volume", correct: true},
            {text: "Um volume que grava dados simultaneamente em dois discos para mais velocidade", correct: false},
            {text: "Um volume que ocupa espaço em apenas um disco", correct: false}
        ]
    },
    {
        question: "O que é o RAID-0?",
        answers: [
            {text: "Espelhamento de dados entre dois discos para redundância", correct: false},
            {text: "Distribuição de dados com paridade entre três ou mais discos", correct: false},
            {text: "Gravação simultânea em dois discos aumentando a velocidade, sem redundância", correct: true},
            {text: "Combinação de RAID-0 e RAID-1", correct: false}
        ]
    },
    {
        question: "O que é o RAID-1?",
        answers: [
            {text: "Alta velocidade sem redundância", correct: false},
            {text: "Espelhamento: os dados são gravados em dois discos simultaneamente", correct: true},
            {text: "Distribuição de dados com paridade entre três discos", correct: false},
            {text: "Combinação de velocidade e redundância com quatro discos", correct: false}
        ]
    },
    {
        question: "O que acontece com os dados no RAID-0 se um disco falhar?",
        answers: [
            {text: "Os dados são recuperados automaticamente pelo segundo disco", correct: false},
            {text: "Apenas os arquivos corrompidos são perdidos", correct: false},
            {text: "Todos os dados são perdidos", correct: true},
            {text: "O sistema continua funcionando normalmente", correct: false}
        ]
    },
    {
        question: "Para que serve a desfragmentação de disco?",
        answers: [
            {text: "Criptografar os arquivos do disco", correct: false},
            {text: "Reorganizar os fragmentos de arquivos para que fiquem contíguos, melhorando o desempenho", correct: true},
            {text: "Verificar e corrigir erros no sistema de arquivos", correct: false},
            {text: "Limitar o espaço de armazenamento por usuário", correct: false}
        ]
    },
    {
        question: "Por que a desfragmentação não é indicada para SSDs?",
        answers: [
            {text: "Porque SSDs não suportam o sistema de arquivos NTFS", correct: false},
            {text: "Porque SSDs são mais lentos que HDDs", correct: false},
            {text: "Porque SSDs não fragmentam arquivos da mesma forma e a desfragmentação reduziria sua vida útil", correct: true},
            {text: "Porque SSDs já formatam automaticamente os arquivos", correct: false}
        ]
    },
    {
        question: "O que é o comando chkdsk no Windows?",
        answers: [
            {text: "Um comando para desfragmentar o disco", correct: false},
            {text: "Um comando para formatar partições", correct: false},
            {text: "Um comando que verifica e corrige erros no disco e no sistema de arquivos", correct: true},
            {text: "Um comando para criar partições no disco", correct: false}
        ]
    },
    {
        question: "O que é a cota de disco?",
        answers: [
            {text: "A velocidade máxima de leitura do disco", correct: false},
            {text: "Um limite de espaço de armazenamento definido pelo administrador para cada usuário", correct: true},
            {text: "O tamanho máximo de uma partição NTFS", correct: false},
            {text: "O espaço reservado para arquivos do sistema operacional", correct: false}
        ]
    },
    {
        question: "Qual é a diferença entre EFS e BitLocker?",
        answers: [
            {text: "EFS é mais rápido; BitLocker é mais seguro", correct: false},
            {text: "EFS criptografa arquivos e pastas individualmente; BitLocker criptografa o volume inteiro", correct: true},
            {text: "EFS funciona em SSDs; BitLocker funciona apenas em HDDs", correct: false},
            {text: "Não há diferença entre eles", correct: false}
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