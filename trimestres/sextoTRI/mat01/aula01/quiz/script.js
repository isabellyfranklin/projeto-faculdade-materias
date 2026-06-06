const questions = [
    {
        question: "Qual minha cor favorita",
        answers: [
            {text: "Roxo", correct: true},
            {text: "Preto", correct: false},
            {text: "Marrom", correct: false},
            {text: "Branco", correct: false}
        ]
    },
    {
        question: "Qual minha comida favorita",
        answers: [
            {text: "Lamen", correct: false},
            {text: "Hamburguer", correct: false},
            {text: "Macarrão", correct: true},
            {text: "Lasanha", correct: false}
        ]
    },
    {
        question: "Qual minha bebida favorita",
        answers: [
            {text: "Suco de Laranja", correct: false},
            {text: "Água de Coco", correct: false},
            {text: "Sucos de Caixinha", correct: false},
            {text: "Água", correct: true}
        ]
    },
    {
        question: "Qual pais tenho vontade de visitar",
        answers: [
            {text: "Paris", correct: false},
            {text: "Japão", correct: true},
            {text: "Russia", correct: false},
            {text: "Suecia", correct: false}
        ]
    }
];


const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-button");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct; // marca o botão certo
        }
        button.addEventListener("click", selectAnswer); // detecta o clique
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
        selectedBtn.classList.add("correct"); // fica verde
        score++;
    } else {
        selectedBtn.classList.add("wrong"); // fica vermelho
    }

    // mostra a resposta certa e bloqueia os outros botões
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true; // impede clicar de novo
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
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
        startQuiz(); // reinicia ao clicar em "jogar de novo"
    }
});

startQuiz();