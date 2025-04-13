// Function to update the last press time display
function updateLastPressTime() {
  const lastTime = localStorage.getItem("lastPressTime"); // Retrieve the stored time from localStorage
  if (lastTime) {
    document.getElementById("lastPressTime").textContent = `Last pressed: ${lastTime}`;
  } else {
    document.getElementById("lastPressTime").textContent = "Last pressed: Never"; // Default display
  }
}

// Event listener for the original "Press Me" button
document.getElementById("pressButton").addEventListener("click", () => {
  const currentTime = new Date().toLocaleString(); // Get the current time
  localStorage.setItem("lastPressTime", currentTime); // Save the time to localStorage
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

// Show custom popup and play the video
document.getElementById("goOnButton").addEventListener("click", () => {
  const modal = document.getElementById("popupModal");
  modal.style.display = "block";

  document.getElementById("closeModal").addEventListener("click", () => {
    modal.style.display = "none";
    const video = document.querySelector("video");
    if (video) {
      video.play();
    }
  });
});


// Run the update function on page load
updateLastPressTime();
