let state = false;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("text").innerText =
    "Roblox ist eine Plattform zum Erstellen und Spielen von Games.";
});

function toggle() {
  state = !state;

  document.getElementById("text").innerText = state
    ? "Roblox Studio erlaubt Game Creation mit Lua."
    : "Roblox ist eine Plattform zum Erstellen und Spielen von Games.";
}
