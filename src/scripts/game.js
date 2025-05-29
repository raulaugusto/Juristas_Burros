const questions = [
  {
    id: 1,
    question:
      "De acordo com o artigo 1º da Constituição Federal de 1988, qual dos seguintes é um dos fundamentos da República Federativa do Brasil?",
    answers: [
      { id: 1, text: "Liberdade de imprensa" },
      { id: 2, text: "Pluripartidarismo" },
      { id: 3, text: "Soberania" },
      { id: 4, text: "Intervenção estatal na economia" },
    ],
    correctAnswer: 3,
  },
  {
    id: 2,
    question:
      "Segundo o artigo 5º da Constituição Federal, o direito de resposta, proporcional ao agravo, é:",
    answers: [
      {
        id: 1,
        text: "Garantido apenas judicialmente, mediante prova de dano moral.",
      },
      { id: 2, text: "Condicionado à retratação pública espontânea." },
      {
        id: 3,
        text: "Assegurado, independentemente de ação judicial, nos meios de comunicação.",
      },
      {
        id: 4,
        text: "Assegurado, além da indenização por dano material, moral ou à imagem.",
      },
    ],
    correctAnswer: 4,
  },
  {
    id: 3,
    question:
      "Sobre a organização político-administrativa da República Federativa do Brasil, é correto afirmar que:",
    answers: [
      { id: 1, text: "O Distrito Federal pode ser dividido em municípios." },
      {
        id: 2,
        text: "Os Estados possuem competência para legislar sobre direito penal.",
      },
      {
        id: 3,
        text: "Os Territórios Federais são considerados entes da federação com autonomia plena.",
      },
      {
        id: 4,
        text: "A União, os Estados, o Distrito Federal e os Municípios são entes autônomos da federação.",
      },
    ],
    correctAnswer: 4,
  },
  {
    id: 4,
    question: "No processo legislativo federal, o veto presidencial:",
    answers: [
      {
        id: 1,
        text: "Só pode ser exercido por motivo de inconstitucionalidade.",
      },
      {
        id: 2,
        text: "Pode ser derrubado por maioria simples do Congresso Nacional.",
      },
      {
        id: 3,
        text: "Deve ser apreciado pelo Congresso Nacional no prazo de 30 dias.",
      },
      { id: 4, text: "Impede a reedição do projeto de lei por um ano." },
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    question:
      "A Constituição Federal de 1988 estabelece que a República Federativa do Brasil é formada pela união indissolúvel de quais entes federativos?",
    answers: [
      { id: 1, text: "União, Estados e Municípios" },
      { id: 2, text: "União, Estados, Municípios e Territórios" },
      { id: 3, text: "União, Estados, Municípios e Distrito Federal" },
      { id: 4, text: "União, Estados e Distrito Federal" },
    ],
    correctAnswer: 3,
  },
  {
    id: 7,
    question:
      "A disposição dos direitos fundamentais no início da Constituição indica:",
    answers: [
      {
        id: 1,
        text: "Os direitos fundamentais são normas programáticas, dependendo de regulamentação infraconstitucional para sua eficácia.",
      },
      {
        id: 2,
        text: "A Constituição de 1988 não prevê direitos fundamentais, apenas direitos sociais.",
      },
      {
        id: 3,
        text: "A importância central dos direitos fundamentais no ordenamento jurídico.",
      },
      {
        id: 4,
        text: "Os direitos fundamentais podem ser livremente restringidos por leis ordinárias.",
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 8,
    question:
      "A casa é o asilo inviolável do indivíduo. Quais são as exceções em que alguém pode nela penetrar sem consentimento do morador?",
    answers: [
      {
        id: 1,
        text: "Flagrante delito, desastre, socorro ou determinação judicial durante o dia.",
      },
      {
        id: 2,
        text: "Flagrante delito, desastre, socorro ou determinação judicial a qualquer hora.",
      },
      { id: 3, text: "Somente com determinação judicial." },
      { id: 4, text: "Flagrante delito ou desastre, apenas." },
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question:
      "É possível suprimir o voto obrigatório por meio de emenda constitucional?",
    answers: [
      { id: 1, text: "Não, pois o voto obrigatório é cláusula pétrea." },
      {
        id: 2,
        text: "Sim, com aprovação por 3/5 do Congresso em dois turnos.",
      },
      {
        id: 3,
        text: "Sim, com aprovação por maioria absoluta em dois turnos.",
      },
      {
        id: 4,
        text: "Não, pois o voto obrigatório é norma de reprodução obrigatória pelas Constituições Estaduais.",
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 11,
    question:
      "Qual é a forma de Estado adotada pela Constituição Federal de 1988?",
    answers: [
      { id: 1, text: "Estado Confessional" },
      { id: 2, text: "Estado Unitário" },
      { id: 3, text: "Estado Federal" },
      { id: 4, text: "Estado Absolutista" },
      { id: 5, text: "Estado Socialista" },
    ],
    correctAnswer: 3,
  },
  {
    id: 12,
    question:
      "Qual dos seguintes é um direito social previsto na Constituição Federal?",
    answers: [
      { id: 1, text: "Liberdade de imprensa" },
      { id: 2, text: "Direito à propriedade" },
      { id: 3, text: "Direito à vida" },
      { id: 4, text: "Direito ao lazer" },
      { id: 5, text: "Direito à segurança" },
    ],
    correctAnswer: 4,
  },
  {
    id: 13,
    question: "Quem é o titular do poder constituinte originário?",
    answers: [
      { id: 1, text: "O Presidente da República" },
      { id: 2, text: "O Congresso Nacional" },
      { id: 3, text: "O Supremo Tribunal Federal" },
      { id: 4, text: "O povo" },
      { id: 5, text: "A Assembleia Nacional Constituinte" },
    ],
    correctAnswer: 4,
  },
  {
    id: 14,
    question: "Qual é o órgão máximo do Poder Judiciário no Brasil?",
    answers: [
      { id: 1, text: "Tribunal Superior do Trabalho (TST)" },
      { id: 2, text: "Superior Tribunal de Justiça (STJ)" },
      { id: 3, text: "Supremo Tribunal Federal (STF)" },
      { id: 4, text: "Conselho Nacional de Justiça (CNJ)" },
      { id: 5, text: "Tribunal de Justiça Federal (TJF)" },
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    question: "A Constituição Federal de 1988 é caracterizada como:",
    answers: [
      { id: 1, text: "Flexível, analítica e autocrática" },
      { id: 2, text: "Rígida, sintética e democrática" },
      { id: 3, text: "Rígida, analítica e democrática" },
      { id: 4, text: "Flexível, analítica e liberal" },
      { id: 5, text: "Semi-rígida, dogmática e parlamentarista" },
    ],
    correctAnswer: 3,
  },
  {
    id: 16,
    question:
      "O controle de constitucionalidade exercido pelo STF é, em regra:",
    answers: [
      { id: 1, text: "Preventivo e administrativo" },
      { id: 2, text: "Repressivo e difuso" },
      { id: 3, text: "Preventivo e concentrado" },
      { id: 4, text: "Repressivo e concentrado" },
      { id: 5, text: "Consultivo e facultativo" },
    ],
    correctAnswer: 4,
  },
  {
    id: 17,
    question:
      "Qual é o artigo da Constituição que trata dos direitos e garantias fundamentais?",
    answers: [
      { id: 1, text: "Art. 1º" },
      { id: 2, text: "Art. 3º" },
      { id: 3, text: "Art. 5º" },
      { id: 4, text: "Art. 10º" },
      { id: 5, text: "Art. 7º" },
    ],
    correctAnswer: 3,
  },
  {
    id: 18,
    question:
      "Qual dos seguintes é um princípio fundamental da Constituição Federal de 1988?",
    answers: [
      { id: 1, text: "Neutralidade política" },
      { id: 2, text: "Supremacia do Executivo" },
      { id: 3, text: "Soberania" },
      { id: 4, text: "Livre concorrência" },
      { id: 5, text: "Liberdade religiosa" },
    ],
    correctAnswer: 3,
  },
  {
    id: 19,
    question:
      "Qual dos entes federativos brasileiros possui competência para legislar sobre Direito Civil?",
    answers: [
      { id: 1, text: "Municípios" },
      { id: 2, text: "União" },
      { id: 3, text: "Estados" },
      { id: 4, text: "Distrito Federal" },
      { id: 5, text: "Todos os entes" },
    ],
    correctAnswer: 2,
  },
  {
    id: 20,
    question:
      "Qual é o instrumento constitucional adequado para se combater uma norma inconstitucional em abstrato?",
    answers: [
      { id: 1, text: "Habeas corpus" },
      { id: 2, text: "Recurso extraordinário" },
      { id: 3, text: "Mandado de injunção" },
      { id: 4, text: "Ação Direta de Inconstitucionalidade" },
      { id: 5, text: "Ação popular" },
    ],
    correctAnswer: 4,
  },
  {
    id: 21,
    question:
      "O controle difuso de constitucionalidade foi introduzido no Brasil por meio de qual precedente?",
    answers: [
      { id: 1, text: "Constituição de 1891" },
      { id: 2, text: "Caso Marbury v. Madison" },
      { id: 3, text: "Constituição de 1988" },
      { id: 4, text: "Constituição de 1946" },
      { id: 5, text: "Constituição de 1937" },
    ],
    correctAnswer: 1,
  },
  {
    id: 22,
    question:
      "Segundo a Constituição, qual a natureza jurídica dos tratados internacionais de direitos humanos aprovados por quórum qualificado no Congresso?",
    answers: [
      { id: 1, text: "Normas infraconstitucionais" },
      { id: 2, text: "Decretos legislativos" },
      { id: 3, text: "Normas supralegais" },
      { id: 4, text: "Normas constitucionais" },
      { id: 5, text: "Normas regulamentares" },
    ],
    correctAnswer: 4,
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
  if (players.length > 2) localStorage.setItem("thirdPlace", board[2].name);
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
