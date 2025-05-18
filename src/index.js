const questions = [
  {
    id: 1,
    title: "TITULO DA QUESTAO 1",
    answers: [
      { id: 1, letter: "A", text: "Resposta Correta" },
      { id: 2, letter: "B", text: "Resposta Incorreta" },
    ],
    correctAnswer: "A",
  },
];

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita que a página recarregue
  const numberOfPlayers = document.getElementById("numberOfPlayers").value;

  // Salva no localStorage
  localStorage.setItem("numberOfPlayers", numberOfPlayers);

  // Redireciona para a próxima página do jogo
  window.location.href = "views/nickSelection.html"; // substitua pelo nome real da próxima página
});
