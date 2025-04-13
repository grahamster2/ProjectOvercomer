// Function to update the last press time display
function updateLastPressTime() {
  const lastTime = localStorage.getItem("lastPressTime");
  if (lastTime) {
    document.getElementById("lastPressTime").textContent = `Last pressed: ${lastTime}`;
  } else {
    document.getElementById("lastPressTime").textContent = "Last pressed: Never";
  }
}

// Event listener for the original button press
document.getElementById("pressButton").addEventListener("click", () => {
  const currentTime = new Date().toLocaleString();
  localStorage.setItem("lastPressTime", currentTime);
  document.getElementById("lastPressTime").textContent = `Last pressed: ${currentTime}`;
});

// Event listener for the "Want to go on?" button
document.getElementById("goOnButton").addEventListener("click", () => {
  // Show a popup message
  alert("You will be okay");

  // Play the video by triggering the play method of the video element
  const video = document.querySelector("video");
  if (video) {
    video.play();
  }
});
