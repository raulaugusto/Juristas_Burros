const form = document.getElementById("nickSelectionForm");

function generateNickSelectionForm() {
  const numberOfPlayers = parseInt(localStorage.getItem("numberOfPlayers"));

  if (!form || !numberOfPlayers) return;

  for (let i = 0; i < numberOfPlayers; i++) {
    const label = document.createElement("label");
    label.textContent = `Jogador ${i + 1}: `;

    const nickInput = document.createElement("select");
    const xande = document.createElement("option");
    xande.textContent = "Xandão";
    xande.value = "Xande";
    const dino = document.createElement("option");
    dino.textContent = "Dino";
    dino.value = "Dino";
    const lewandowski = document.createElement("option");
    lewandowski.textContent = "Lewandowski";
    lewandowski.value = "Lewandowski";
    const carmen = document.createElement("option");
    carmen.textContent = "Carmen";
    carmen.value = "Carmen";
    nickInput.appendChild(xande);
    nickInput.appendChild(dino);
    nickInput.appendChild(lewandowski);
    nickInput.appendChild(carmen);
    nickInput.name = `player${i + 1}`;
    nickInput.placeholder = "Digite o nome";

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

  // Validação opcional
  if (nicks.some((nick) => nick === "")) {
    alert("Todos os jogadores devem ter um nome!");
    return;
  }

  localStorage.setItem("players", JSON.stringify(nicks));
  window.location.href = "game.html";
});
