(function () {
  ("use strict");

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Video
   */

  var video = document.getElementById("my-video");

  video.addEventListener("click", () => (video.muted = !video.muted));

  const flexContainer = document.querySelector(".flex-container");
  const aboutUsText = document.querySelector("#about-us-text");
  const videocontainer = document.querySelector(".video-container");

  function video_hide() {
    var viewportWidth =
      window.innerWidth || document.documentElement.clientWidth;

    if (window.innerWidth < 1000) {
      videocontainer.remove();
      flexContainer.appendChild(aboutUsText);
    } else {
      flexContainer.appendChild(aboutUsText);
      flexContainer.appendChild(videocontainer);
    }
    /*
    if (viewportWidth < 780) {
      /*videocontainer.classList.add("display-none");
      videocontainer.remove();
    } else {
      
      videocontainer.classList.remove("display-none");
    }*/
  }

  // Call the function on page load
  video_hide();

  // Call the function on window resize
  window.addEventListener("resize", video_hide);

  const firstContainer = document.getElementById("s1");
  const thirdContainer = document.getElementById("projects");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const videoTop = video.getBoundingClientRect().top;
        const firstTop = firstContainer.getBoundingClientRect().top;
        const thirdTop = thirdContainer.getBoundingClientRect().top;
        const firstTopPlus = firstTop + 100;

        if (videoTop > firstTop && videoTop < thirdTop) {
          video.play();
        } else {
          video.pause();
        }
      } else {
        video.pause();
      }
    });
  });

  observer.observe(video);

  /**
   * Click on page to start the Video
   */
  /*
  const spanElement = document.querySelector("span");
  if (window.scrollY < 50) {
    spanElement.click();
  }
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
    const xPosition =
      event.clientX - videoContainer.getBoundingClientRect().left;

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

  /**
   * Project Image transition and
   */

  // get all image-containers
  const imageContainers = document.querySelectorAll(".image-container");

  // initialize the previously hovered image-container to null
  let prevHovered = null;

  // add event listeners to each image-container
  imageContainers.forEach((container) => {
    container.addEventListener("mouseenter", () => {
      // remove the active class from the previously hovered image-container (if any)
      if (prevHovered !== null) {
        prevHovered.classList.remove("active");
      }
      // add the active class to the hovered image-container
      container.classList.add("active");
      // set the previously hovered image-container to the current one
      prevHovered = container;
      // remove the active class after 2 seconds of not hovering any image
      setTimeout(() => {
        if (container === prevHovered) {
          container.classList.remove("active");
          prevHovered = null;
        }
      }, 5000);
    });
  });
  /*
  function changeLanguage() {
    var hero_title = document.getElementsByClassName("hero-title");
    var eng = document.getElementById("ENG");
    var gr = document.getElementById("GR");

    if (title.innerHTML === "Perfection") {
      hero_title.innerHTML = "Τελειότητα";
      gr.classList.add("color-cyan");
      eng.classList.remove("color-cyan");
    } else {
      hero_title.innerHTML = "Perfection";
      gr.classList.remove("color-cyan");
      eng.classList.add("color-cyan");
    }
  }*/
})();
