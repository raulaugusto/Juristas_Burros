function renderVictoryScreen() {
  const winner = localStorage.getItem("winner");
  document.body.innerHTML = `
    <div class="victory-container">
      <h1>${winner} é o vencedor!!! 🏆</h1>
      <img src="../assets/trofeu.png" alt="Troféu da vitória" />
      <button class="new-game-btn" onclick="startNewGame()">Novo Jogo</button>
    </div>
  `;
}

function startNewGame() {
  window.location.href = "../../index.html"; // ajuste conforme sua página inicial
}

document.addEventListener("DOMContentLoaded", renderVictoryScreen);
