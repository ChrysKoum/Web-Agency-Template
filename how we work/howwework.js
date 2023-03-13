//the why clicks
const boxs = document.querySelectorAll(".mybox");

const seo = document.querySelectorAll(".seo");
var textseo = document.getElementById("text-seo");

const responsive = document.querySelectorAll(".responsive");
var textresponsive = document.getElementById("text-mobile");

const branding = document.querySelectorAll(".branding");
var textbranding = document.getElementById("text-branding");

const user = document.querySelectorAll(".user");
var textuser = document.getElementById("text-user");

function toggleSeo() {
  textuser.classList.add("d-none");
  textbranding.classList.add("d-none");
  textresponsive.classList.add("d-none");
  textseo.classList.remove("d-none");
  boxs.forEach((box) => box.classList.remove("box-active"));
  boxs.forEach((box) => box.classList.remove("box-shadow"));
  seo.forEach((box) => box.classList.add("box-active"));
  document.querySelector("#fourth-img").classList.add("box-shadow");
}
function toggleResponsive() {
  textuser.classList.add("d-none");
  textbranding.classList.add("d-none");
  textresponsive.classList.remove("d-none");
  textseo.classList.add("d-none");
  boxs.forEach((box) => box.classList.remove("box-active"));
  boxs.forEach((box) => box.classList.remove("box-shadow"));
  responsive.forEach((box) => box.classList.add("box-active"));
  document.querySelector("#third-img").classList.add("box-shadow");
}
function tooggleBranding() {
  textuser.classList.add("d-none");
  textbranding.classList.remove("d-none");
  textresponsive.classList.add("d-none");
  textseo.classList.add("d-none");
  boxs.forEach((box) => box.classList.remove("box-active"));
  boxs.forEach((box) => box.classList.remove("box-shadow"));
  branding.forEach((box) => box.classList.add("box-active"));
  document.querySelector("#second-img").classList.add("box-shadow");
}
function tooggleUser() {
  textuser.classList.remove("d-none");
  textbranding.classList.add("d-none");
  textresponsive.classList.add("d-none");
  textseo.classList.add("d-none");
  boxs.forEach((box) => box.classList.remove("box-active"));
  boxs.forEach((box) => box.classList.remove("box-shadow"));
  user.forEach((box) => box.classList.add("box-active"));
  document.querySelector("#first-img").classList.add("box-shadow");
}

function toggleOpen() {
  /*boxs.forEach( box => box.classList.remove('box-active'));
            this.classList.add('box-active');*/
}

seo.forEach((a) => a.addEventListener("click", toggleSeo));
responsive.forEach((a) => a.addEventListener("click", toggleResponsive));
branding.forEach((a) => a.addEventListener("click", tooggleBranding));
user.forEach((a) => a.addEventListener("click", tooggleUser));

boxs.forEach((box) => box.addEventListener("click", toggleOpen));

//scrolling effect

const steps = document.querySelector(".steps");
const ba = document.querySelector(".ba");

function debounce(func, wait = 5, immediate = true) {
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

/* Remove img-fluid and hide line page*/
function adjustImage() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  let stepsContent = document.getElementsByClassName("image-steps");
  for (var i = 0, len = stepsContent.length; i < len; i++) {
    var img = stepsContent[i].querySelectorAll("img");
    var firstImg = img[0];
    var secondImg = img[1];
    if (viewportWidth < 780) {
      firstImg.classList.remove("img-fluid");
      secondImg.style.display = "none";
    } else {
      firstImg.classList.add("img-fluid");
      secondImg.style.display = "block";
    }
  }
}

// call the function initially to adjust the image
adjustImage();

// call the function on window resize to adjust the image when the viewport width changes
window.addEventListener("resize", adjustImage);
