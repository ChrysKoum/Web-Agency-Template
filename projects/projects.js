const texts = document.querySelectorAll(".swipe");

function debounce(func, wait = 50, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  texts.forEach((text) => {
    console.log(text);
    const slideInAt = window.scrollY + window.innerHeight - 70;
    const imageBottom = text.offsetTop + 140;
    const isHalfShown = slideInAt > text.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      text.classList.add("text-active");
    } else {
      text.classList.remove("text-active");
    }
  });
}

document.addEventListener("scroll", checkSlide);
