const toggler = document.getElementById("toggler");
const togglerIcon = document.getElementById("toggler-icon");
const closeIcon = document.getElementById("close-icon");
const fab = document.getElementById("floatingActionButton");
const fabSD = document.getElementById("fabScrollDown");
var toClose = false;

AOS.init({
  offset: 150,
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true,
});

const scrollToTop = () => {
  fab.children[0].addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};

const scrollDown = () => window.scrollTo(0, 350);

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
    if (pos > 650) {
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

    if (pos < 300){
      fabSD.classList.remove("d-none");
      fabSD.classList.add("d-block");
    }else{
      fabSD.classList.remove("d-block");
      fabSD.classList.add("d-none");
    }
});