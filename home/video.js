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
    muteSpan.textContent = "Click left on the video to mute";
  } else {
    videoElement.classList.add("mute");
    muteSpan.textContent = "Click left on the video to unmute";
  }
});

pauseSpan.addEventListener("click", function (event) {
  if (videoElement.paused) {
    videoElement.play();
    pauseSpan.textContent = "Click right on the video to pause";
  } else {
    videoElement.pause();
    pauseSpan.textContent = "Click right on the video to play";
  }
});

videoContainer.addEventListener("click", function (event) {
  const xPosition = event.clientX - videoContainer.getBoundingClientRect().left;

  if (xPosition < videoContainer.offsetWidth / 2) {
    if (videoElement.classList.contains("mute")) {
      videoElement.classList.remove("mute");
      muteSpan.textContent = "Click left on the video to mute";
    } else {
      videoElement.classList.add("mute");
      muteSpan.textContent = "Click left on the video to unmute";
    }
  } else {
    if (videoElement.paused) {
      videoElement.play();
      pauseSpan.textContent = "Click right on the video to pause";
    } else {
      videoElement.pause();
      pauseSpan.textContent = "Click right on the video to play";
    }
  }
});
