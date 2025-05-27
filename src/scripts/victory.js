function renderVictoryScreen() {
  const winner = localStorage.getItem("winner");
  const winnerImage = getPlayerImagePath(winner);
  const secondPlace = localStorage.getItem("secondPlace");
  const secondPlaceImage = getPlayerImagePath(secondPlace);
  const thirdPlace = localStorage.getItem("thirdPlace");
  const thirdPlaceImage = getPlayerImagePath(thirdPlace);
  const numberOfPlayers = localStorage.getItem("numberOfPlayers");

  document.body.innerHTML = `
    <div class="victory-container">
      <h1>🏆 Resultado Final 🏆</h1>
      <div class="podium">
        ${
          numberOfPlayers == 2
            ? `
          <div class="podium-spot second">
            <div class="circle">
              <img src="${secondPlaceImage}" alt="${secondPlace}" />
            </div>
            <span>${secondPlace}</span>
            <div class="position-label">2º</div>
          </div>
          <div class="podium-spot first">
            <div class="circle">
              <img src="${winnerImage}" alt="${winner}" />
            </div>
            <span>${winner}</span>
            <div class="position-label">1º</div>
          </div>
        `
            : `
          <div class="podium-spot second">
            <div class="circle">
              <img src="${secondPlaceImage}" alt="${secondPlace}" />
            </div>
            <span>${secondPlace}</span>
            <div class="position-label">2º</div>
          </div>
          <div class="podium-spot first">
            <div class="circle">
              <img src="${winnerImage}" alt="${winner}" />
            </div>
            <span>${winner}</span>
            <div class="position-label">1º</div>
          </div>
          <div class="podium-spot third">
            <div class="circle">
              <img src="${thirdPlaceImage}" alt="${thirdPlace}" />
            </div>
            <span>${thirdPlace}</span>
            <div class="position-label">3º</div>
          </div>
        `
        }
      </div>
      <button class="new-game-btn" onclick="startNewGame()">Novo Jogo</button>
    </div>
  `;
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
      return "../assets/default.png"; // Caso queira uma imagem padrão
  }
}

function startNewGame() {
  window.location.href = "../../index.html"; // ajuste conforme sua página inicial
}

document.addEventListener("DOMContentLoaded", renderVictoryScreen);
