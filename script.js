// Function to update the last press time display
function updateLastPressTime() {
  // Retrieve the stored time from localStorage
  const lastTime = localStorage.getItem("lastPressTime");
  
  // Check if a time is stored, and update the display accordingly
  if (lastTime) {
    document.getElementById("lastPressTime").textContent = `Last pressed: ${lastTime}`;
  } else {
    document.getElementById("lastPressTime").textContent = "Last pressed: Never";
  }
}

// Event listener for button press
document.getElementById("pressButton").addEventListener("click", () => {
  const currentTime = new Date().toLocaleString(); // Get the current time
  localStorage.setItem("lastPressTime", currentTime); // Save the time to localStorage
  document.getElementById("lastPressTime").textContent = `Last pressed: ${currentTime}`;
});

// Run the update function on page load
updateLastPressTime();
