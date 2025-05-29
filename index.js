const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // evita que a página recarregue
  const numberOfPlayers = document.getElementById("numberOfPlayers").value;
  if (
    !numberOfPlayers ||
    numberOfPlayers === null ||
    numberOfPlayers === undefined
  ) {
    alert("Selecione o número de jogadores");
  } else {
    // Salva no localStorage
    localStorage.setItem("numberOfPlayers", numberOfPlayers);

    // Redireciona para a próxima página do jogo
    window.location.href = "src/views/nickSelection.html"; // substitua pelo nome real da próxima página
  }
});
