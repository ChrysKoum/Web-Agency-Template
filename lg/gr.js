/**
 * Click on page to start the Video
 */

const videoElement = document.getElementById("my-video");
const muteSpan = document.getElementById("mute-span");
const pauseSpan = document.getElementById("pause-span");
const videoContainer = document.querySelector(".video-container");

muteSpan.addEventListener("click", function (event) {
  if (videoElement.classList.contains("mute")) {
    videoElement.classList.remove("mute");
    muteSpan.textContent = "Κάντε κλικ αριστερά στο βίντεο για ήχο";
  } else {
    videoElement.classList.add("mute");
    muteSpan.textContent = "Κάντε κλικ αριστερά στο βίντεο για σίγαση";
  }
});

pauseSpan.addEventListener("click", function (event) {
  if (videoElement.paused) {
    videoElement.play();
    pauseSpan.textContent = "Κάντε κλικ δεξιά στο βίντεο για παύση";
  } else {
    videoElement.pause();
    pauseSpan.textContent = "Κάντε κλικ δεξιά στο βίντεο για να ξεκινήσει";
  }
});

videoContainer.addEventListener("click", function (event) {
  const xPosition = event.clientX - videoContainer.getBoundingClientRect().left;

  if (xPosition < videoContainer.offsetWidth / 2) {
    if (videoElement.classList.contains("mute")) {
      videoElement.classList.remove("mute");
      muteSpan.textContent = "Κάντε κλικ αριστερά στο βίντεο για ήχο";
    } else {
      videoElement.classList.add("mute");
      muteSpan.textContent = "Κάντε κλικ αριστερά στο βίντεο για σίγαση";
    }
  } else {
    if (videoElement.paused) {
      videoElement.play();
      pauseSpan.textContent = "Κάντε κλικ δεξιά στο βίντεο για παύση";
    } else {
      videoElement.pause();
      pauseSpan.textContent = "Κάντε κλικ δεξιά στο βίντεο για να ξεκινήσει";
    }
  }
});
