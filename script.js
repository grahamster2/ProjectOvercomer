// Array of Bible verses for sequential display
const bibleVerses = [
  "1 Corinthians 10:13 - 'No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.'",
  "Galatians 5:22-23 - 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness, and self-control. Against such things there is no law.'",
  "Matthew 5:28 - 'But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart.'",
  "2 Timothy 1:7 - 'For the Spirit God gave us does not make us timid, but gives us power, love, and self-discipline.'",
  "Proverbs 25:28 - 'Like a city whose walls are broken through is a person who lacks self-control.'",
  "Colossians 3:5 - 'Put to death, therefore, whatever belongs to your earthly nature: sexual immorality, impurity, lust, evil desires, and greed, which is idolatry.'",
  "1 Peter 2:11 - 'Dear friends, I urge you, as foreigners and exiles, to abstain from sinful desires, which wage war against your soul.'",
  "Romans 6:12 - 'Therefore do not let sin reign in your mortal body so that you obey its evil desires.'"
];

let currentVerseIndex = 0; // Track the current verse for the Bible verses feature

// Function to display the current Bible verse in the modal
function displayCurrentVerse() {
  const modalContent = document.getElementById("modalContent");
  const verseText = bibleVerses[currentVerseIndex];
  modalContent.innerHTML = `
    <p>${verseText}</p>
    <button id="nextVerseButton">Next</button>
  `;

  // Add event listener to the "Next" button
  document.getElementById("nextVerseButton").addEventListener("click", () => {
    currentVerseIndex++;
    if (currentVerseIndex < bibleVerses.length) {
      displayCurrentVerse(); // Show the next verse
    } else {
      closeModal(); // Close the modal after the last verse
    }
  });
}

// Function to open the modal and start the Bible verses sequence
function openVerseModal() {
  const modal = document.getElementById("popupModal");
  modal.style.display = "flex";
  currentVerseIndex = 0; // Reset to the first verse
  displayCurrentVerse(); // Show the first verse
}

// Function to open the modal and play a video
function openVideoModal() {
  const modal = document.getElementById("popupModal");
  const modalContent = document.getElementById("modalContent");

  // Inject video content into the modal
  modalContent.innerHTML = `
    <p>You will be okay! I know you can stay strong. Just pray and ask God to help you. Take a few deep breaths and pray it out twin. Much love.</p>
    <video id="popupVideo" width="560" height="315" controls>
      <source id="videoSource" src="videos/sample-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <button id="closeModalButton">Close</button>
  `;

  // Show the modal
  modal.style.display = "flex";

  // Add event listener to the "Close" button to hide the modal
  document.getElementById("closeModalButton").addEventListener("click", closeModal);
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("popupModal");
  modal.style.display = "none";
}

// Attach event listeners to the buttons
document.getElementById("pressButton").addEventListener("click", openVerseModal); // "Did you goon?" -> Bible verses
document.getElementById("goOnButton").addEventListener("click", openVideoModal); // "Are you feeling urges to goon?" -> Video
