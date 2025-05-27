const form = document.getElementById("nickSelectionForm");

function generateNickSelectionForm() {
  const numberOfPlayers = parseInt(localStorage.getItem("numberOfPlayers"));

  if (!form || !numberOfPlayers) return;

  for (let i = 0; i < numberOfPlayers; i++) {
    const label = document.createElement("label");
    label.textContent = `Jogador ${i + 1}: `;

    const nickInput = document.createElement("select");

    const options = ["Xandão", "Dino", "Lewandowski", "Carmen"];
    options.forEach((optionText) => {
      const option = document.createElement("option");
      option.textContent = optionText;
      option.value = optionText;
      nickInput.appendChild(option);
    });

    nickInput.name = `player${i + 1}`;

    form.appendChild(label);
    form.appendChild(nickInput);
    form.appendChild(document.createElement("br"));
  }

  const button = document.createElement("button");
  button.textContent = "Começar";
  form.appendChild(button);
}

document.addEventListener("DOMContentLoaded", generateNickSelectionForm);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nicks = Array.from(form.elements)
    .filter((element) => element.name.startsWith("player"))
    .map((element) => element.value.trim());

  // Verificar se algum nick está vazio
  if (nicks.some((nick) => nick === "")) {
    alert("Todos os jogadores devem ter um nome!");
    return;
  }

  // Verificar se há nomes duplicados
  const nickSet = new Set(nicks);
  if (nickSet.size !== nicks.length) {
    alert("Cada jogador deve ter um nome diferente!");
    return;
  }

  // Salvar no localStorage e iniciar o jogo
  localStorage.setItem("players", JSON.stringify(nicks));
  window.location.href = "game.html";
});
