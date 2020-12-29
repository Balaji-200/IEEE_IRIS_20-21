const toggler = document.getElementById("toggler");
const togglerIcon = document.getElementById("toggler-icon");
const closeIcon = document.getElementById("close-icon");
const abouth1 = document.getElementById("about-h1");
const aboutp = document.getElementById("about-p");
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");
const card4 = document.getElementById("card-4");
const cards = document.getElementById("cards");
const speakerH1 = document.getElementById("speakers-h1");
const sponsorsH1 = document.getElementById("sponsors-h1");
const sponsors = document.getElementById("sponsors");
const fab = document.getElementById("floatingActionButton");
var toClose = false;
var smallScreen = false;

const scrollToTop = () => {
  fab.children[0].addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};

closeIcon.classList.add("d-none");
togglerIcon.classList.add("d-block");
toggler.addEventListener("click", () => {
  if (toClose) {
    closeIcon.classList.remove("d-block");
    closeIcon.classList.add("d-none");
    togglerIcon.classList.remove("d-none");
    togglerIcon.classList.add("d-block");
    toClose = false;
  } else {
    closeIcon.classList.remove("d-none");
    closeIcon.classList.add("d-block");
    togglerIcon.classList.remove("d-block");
    togglerIcon.classList.add("d-none");
    toClose = true;
  }
});
window.addEventListener("scroll", () => {
  var pos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  smallScreen = window.screen.width <= 992;
  if (pos > 100) {
    abouth1.classList.remove("animate__fadeOutUp");
    aboutp.classList.remove("animate__fadeOutUp");
    abouth1.classList.add("animate__fadeInUp");
    abouth1.classList.add("d-block");
    aboutp.classList.add("animate__fadeInUp");
    aboutp.classList.add("d-block");
  }
  if (pos < 100) {
    abouth1.classList.remove("animate__fadeInUp");
    aboutp.classList.remove("animate__fadeInUp");
    abouth1.classList.add("animate__fadeOutUp");
    aboutp.classList.add("animate__fadeOutUp");
  }
  if (pos > 450) {
    speakerH1.classList.remove("animate__fadeOutUp");
    speakerH1.classList.add("animate__fadeInUp");
  } else {
    speakerH1.classList.add("animate__fadeOutUp");
  }
  if (
    (!smallScreen && pos > 600) ||
    (window.screen.width > 800 && smallScreen && pos > 500)
  ) {
    console.log(pos);
    card1.classList.remove("animate__fadeOut");
    card2.classList.remove("animate__fadeOut");
    card3.classList.remove("animate__fadeOut");
    card4.classList.remove("animate__fadeOut");
    card1.classList.add("animate__fadeInUp");
    card2.classList.add("animate__fadeInUp");
    card3.classList.add("animate__fadeInUp");
    card4.classList.add("animate__fadeInUp");
    console.log("Yess");
  } else {
    card1.classList.remove("animate__fadeInUp");
    card2.classList.remove("animate__fadeInUp");
    card3.classList.remove("animate__fadeInUp");
    card4.classList.remove("animate__fadeInUp");
    card1.classList.add("animate__fadeOut");
    card2.classList.add("animate__fadeOut");
    card3.classList.add("animate__fadeOut");
    card4.classList.add("animate__fadeOut");
  }
  if (
    (!smallScreen && pos > 1000) ||
    (window.screen.width > 800 && smallScreen && pos > 1350)
  ) {
    console.log("Iphone");
    sponsorsH1.classList.remove("animate__fadeOut");
    sponsorsH1.classList.add("animate__fadeInUp");
  } else {
    sponsorsH1.classList.remove("animate__fadeInUp");
    sponsorsH1.classList.add("animate__fadeOut");
  }
  if (
    (!smallScreen && pos > 1100) ||
    (window.screen.width > 800 && smallScreen && pos > 1400)
  ) {
    sponsors.classList.remove("animate__fadeOut");
    sponsors.classList.add("animate__fadeInUp");
  } else {
    sponsors.classList.remove("animate__fadeInUp");
    sponsors.classList.add("animate__fadeOut");
  }
  if (pos > 650 || (window.screen.width > 800 && smallScreen)) {
    fab.classList.remove("animate__fadeOut");
    fab.classList.add("animate__fadeIn");
    fab.classList.remove("d-none");
    fab.classList.add("d-block");
    scrollToTop();
  } else {
    fab.classList.remove("animate__fadeIn");
    fab.classList.add("animate__fadeOut");
    fab.classList.remove("d-block");
    fab.classList.add("d-none");
  }
  if (smallScreen && window.screen.width < 800) {
    if (pos > 600) {
      card1.classList.remove("animate__fadeOut");
      card1.classList.add("animate__fadeInUp");
    } else {
      card1.classList.add("animate__fadeOut");
    }
    if (pos > 1000) {
      card2.classList.remove("animate__fadeOut");
      card2.classList.add("animate__fadeInUp");
    } else {
      card2.classList.add("animate__fadeOut");
    }
    if (pos > 1400) {
      card3.classList.remove("animate__fadeOut");
      card3.classList.add("animate__fadeInUp");
    } else {
      card3.classList.add("animate__fadeOut");
    }
    if (pos > 1800) {
      card4.classList.remove("animate__fadeOut");
      card4.classList.add("animate__fadeInUp");
    } else {
      card4.classList.add("animate__fadeOut");
    }

    if (pos > 2060) {
      sponsorsH1.classList.remove("animate__fadeOut");
      sponsorsH1.classList.add("animate__fadeInUp");
    } else {
      sponsorsH1.classList.add("animate__fadeOut");
    }

    if (pos > 2120) {
      sponsors.classList.remove("animate__fadeOut");
      sponsors.classList.add("animate__fadeInUp");
    } else {
      sponsors.classList.add("animate__fadeOut");
    }
  }
});
