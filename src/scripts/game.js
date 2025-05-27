const questions = [
  {
    id: 1,
    question: "Qual é a capital do Brasil?",
    answers: [
      { id: 1, text: "Rio de Janeiro" },
      { id: 2, text: "Brasília" },
      { id: 3, text: "São Paulo" },
      { id: 4, text: "Salvador" },
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "Quem foi o primeiro presidente do Brasil?",
    answers: [
      { id: 1, text: "Getúlio Vargas" },
      { id: 2, text: "Juscelino Kubitschek" },
      { id: 3, text: "Deodoro da Fonseca" },
      { id: 4, text: "Floriano Peixoto" },
    ],
    correctAnswer: 3,
  },
  {
    id: 3,
    question:
      "Em que ano foi promulgada a Constituição Brasileira atualmente em vigor?",
    answers: [
      { id: 1, text: "1988" },
      { id: 2, text: "1964" },
      { id: 3, text: "1993" },
      { id: 4, text: "2002" },
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "Quantos ministros compõem o STF?",
    answers: [
      { id: 1, text: "9" },
      { id: 2, text: "11" },
      { id: 3, text: "13" },
      { id: 4, text: "15" },
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "Quem é o atual presidente do STF (em 2025)?",
    answers: [
      { id: 1, text: "Luiz Fux" },
      { id: 2, text: "Rosa Weber" },
      { id: 3, text: "Luiz Roberto Barroso" },
      { id: 4, text: "Cármen Lúcia" },
    ],
    correctAnswer: 3,
  },
];
const questionsBackup = [];
questions.forEach((question) => {
  questionsBackup.push(question);
});

const board = [];
const players = JSON.parse(localStorage.getItem("players"));
const renderedBoard = document.getElementsByClassName("board")[0];
let currPlayer = 0;

function generateBoard() {
  if (!players || !renderedBoard) return;

  for (let i = 0; i < players.length; i++) {
    createTrack(i);
  }
}

function createTrack(i) {
  board.push({ id: i, name: players[i], position: 0 });

  const track = document.createElement("div");
  track.className = "track";
  track.id = `track-${i}`;

  const name = document.createElement("div");
  name.className = "player-name";
  name.textContent = players[i];

  const path = document.createElement("div");
  path.className = "path";

  // Criar as 10 casas (tiles)
  for (let j = 0; j < 10; j++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    if (j === 0) {
      const imagePath = getPlayerImagePath(players[i]);
      console.log(imagePath);
      const img = document.createElement("img");
      img.src = imagePath; // Altere para o caminho correto da sua imagem
      img.alt = "Peão do jogador";
      img.style.width = "40px";
      img.style.height = "40px";
      tile.appendChild(img);
    }
    tile.dataset.position = j; // útil para identificar depois
    path.appendChild(tile);
  }

  track.appendChild(name);
  track.appendChild(path);
  renderedBoard.appendChild(track);
}

function getQuestion() {
  const randInt = Math.floor(Math.random() * questions.length);
  const questionContainer = document.getElementById("question");
  const question = questions[randInt];
  const title = document.createElement("p");
  title.textContent = question.question;
  questionContainer.appendChild(title);
  question.answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.textContent = answer.text;
    answerButton.addEventListener("click", () => {
      checkAnswer(answer, question);
    });
    questionContainer.appendChild(answerButton);
  });
  questions.splice(randInt, 1);
  if (questions.length === 0) {
    questionsBackup.forEach((question) => {
      questions.push(question);
    });
  }
}

function checkAnswer(answer, question) {
  clearQuestionContainer();
  if (question.correctAnswer === answer.id) {
    renderAnswer(answer.text, true);
    updateScore();
  } else {
    renderAnswer(answer.text, false);
  }
  if (currPlayer < players.length - 1) {
    currPlayer++;
  } else {
    currPlayer = 0;
  }
}

function renderTurnNick() {
  const nick = players[currPlayer];
  const questionContainer = document.getElementById("question");
  const nickTitle = document.createElement("h2");
  nickTitle.textContent = "Pergunta para " + nick;
  questionContainer.appendChild(nickTitle);
}

function clearQuestionContainer() {
  const questionContainer = document.getElementById("question");
  questionContainer.innerHTML = "";
}

function renderAnswer(answerText, isCorrect) {
  const questionContainer = document.getElementById("question");
  const announcement = document.createElement("h2");
  const answer = document.createElement("p");
  answer.textContent = answerText;
  if (isCorrect) {
    announcement.textContent = "Deferido!";
    answer.id = "correct";
  } else {
    announcement.textContent = "Indeferido!";
    answer.id = "incorrect";
  }
  const continueButton = document.createElement("button");
  continueButton.textContent = "Continuar";
  continueButton.addEventListener("click", () => {
    clearQuestionContainer();
    renderTurnNick();
    getQuestion();
  });
  questionContainer.appendChild(announcement);
  questionContainer.appendChild(answer);
  questionContainer.appendChild(continueButton);
}

function updateScore() {
  const track = document.getElementById(`track-${currPlayer}`);
  const oldTile = track.querySelector(
    `.tile[data-position="${board[currPlayer].position}"]`
  );
  const image = oldTile.innerHTML;
  oldTile.innerHTML = "";
  board[currPlayer].position++;

  if (board[currPlayer].position >= 10) {
    renderVictoryScreen(board[currPlayer]);
    return; // interrompe execução após a vitória
  }

  const newTile = track.querySelector(
    `.tile[data-position="${board[currPlayer].position}"]`
  );

  newTile.innerHTML = image;
}

function renderVictoryScreen(player) {
  const boardCopy = board;
  boardCopy.sort((a, b) => {
    return b.position - a.position;
  });
  localStorage.setItem("winner", board[0].name);
  localStorage.setItem("secondPlace", board[1].name);
  localStorage.setItem("thirdPlace", board[2].name);
  window.location.href = "victory.html";
}

function getPlayerImagePath(playerName) {
  switch (playerName) {
    case "Xandão":
      return "../assets/xandao.jpg";
    case "Dino":
      return "../assets/dino.jpg";
    case "Lewandowski":
      return "../assets/lewandowski.jpg";
    case "Carmen":
      return "../assets/carmen.webp";
    default:
      return "";
  }
}

document.addEventListener("DOMContentLoaded", generateBoard);
document.addEventListener("DOMContentLoaded", renderTurnNick);
document.addEventListener("DOMContentLoaded", getQuestion);
