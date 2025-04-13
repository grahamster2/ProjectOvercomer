// Function to update the last press time display
function updateLastPressTime() {
  const lastTime = localStorage.getItem("lastPressTime");
  if (lastTime) {
    document.getElementById("lastPressTime").textContent = `Last pressed: ${lastTime}`;
  } else {
    document.getElementById("lastPressTime").textContent = `Last pressed: Never`;
  }
}

// Event listener for the button press
document.getElementById("pressButton").addEventListener("click", () => {
  const currentTime = new Date().toLocaleString();
  localStorage.setItem("lastPressTime", currentTime); // Save the time to localStorage
  document.getElementById("lastPressTime").textContent = `Last pressed: ${currentTime}`;
});

// Initialize the display on page load
updateLastPressTime();
