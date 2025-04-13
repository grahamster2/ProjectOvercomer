document.getElementById("pressButton").addEventListener("click", () => {
  const currentTime = new Date().toLocaleString();
  document.getElementById("lastPressTime").textContent = `Last pressed: ${currentTime}`;
});
