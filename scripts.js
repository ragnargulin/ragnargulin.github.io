//TEXTFILLER
const ele = document.querySelector(".textFiller");
const adjustFontSize = (el) => {
  let [minFontSize, maxFontSize] = [10, 200];
  let fontSize;
  while (minFontSize <= maxFontSize) {
    fontSize = Math.floor((minFontSize + maxFontSize) / 2);
    el.style.fontSize = `${fontSize}px`;
    isOverflowing(el) ? maxFontSize = fontSize - 1 : minFontSize = fontSize + 1;
  }
  el.style.fontSize = `${fontSize - 1}px`; 
};
const isOverflowing = (el) => {
  const curOverflow = el.style.overflow;  
  if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";
  const overflow = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
  el.style.overflow = curOverflow; 
  return overflow;
};
let resizeTimeout;
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => adjustFontSize(ele), 200);
};
window.addEventListener("load", () => adjustFontSize(ele));
window.addEventListener("resize", handleResize);

// LOGO ROTATION
let ticking = false;
const scrollRotate = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const image = document.getElementById("spinning-logo");
      image.style.transform = `rotate(${window.pageYOffset / 10}deg)`;
      ticking = false;
    });
    ticking = true;
  }
};
window.addEventListener("scroll", scrollRotate);

// COLLAPSIBLES
document.querySelectorAll(".collapsible").forEach(item =>
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  })
);
// SAVE & RESTORE SCROLL POSITION
window.addEventListener("beforeunload", () => sessionStorage.setItem("scrollPos", window.scrollY));
window.addEventListener("load", () => {
  const scrollPos = sessionStorage.getItem("scrollPos");
  if (scrollPos) window.scrollTo(0, parseInt(scrollPos));
});

// SIDENAV HIGHLIGHTER
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll("nav a");
const navHighlighter = () => {
  const scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100; 
    const sectionId = current.getAttribute("id");
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active"); 
        if (link.getAttribute("href").includes(sectionId)) {
          link.classList.add("active"); 
        }
      });
    }
  });
};
window.addEventListener("scroll", navHighlighter);

// MODAL ZOOMED IMAGE PORTFOLIO
const openModal = (imgElement) => {
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imgElement.src;
  document.getElementById("imageModal").style.display = "flex";
};
const closeModal = () => {
  document.getElementById("imageModal").style.display = "none";
};
document.addEventListener("keydown", (event) => event.key === "Escape" && closeModal());

// DARK MODE TOGGLE
const toggleDarkMode = document.getElementById("toggleDarkMode");
toggleDarkMode.addEventListener("click", () => document.body.classList.toggle("dark-mode"));

// DVD LOGO ANIMATION
const dvd = document.getElementById("dvd");
const toggleSmiley = document.getElementById("toggleSmiley");
let posX = 0, posY = 0;
let velocityX = 2, velocityY = 2;
let animationId = null;
const animate = () => {
  posX += velocityX;
  posY += velocityY;
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  const { clientWidth: logoWidth, clientHeight: logoHeight } = dvd;
  if (posX + logoWidth >= screenWidth || posX <= 0) velocityX = -velocityX;
  if (posY + logoHeight >= screenHeight || posY <= 0) velocityY = -velocityY;
  dvd.style.left = `${posX}px`;
  dvd.style.top = `${posY}px`;
  animationId = requestAnimationFrame(animate);
};
const toggleAnimation = () => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
    dvd.style.visibility = "hidden";
  } else {
    dvd.style.visibility = "visible";
    animate();
  }
};
toggleSmiley.addEventListener("click", toggleAnimation);

//BLACK/WHITE FOOTER
const spinningLogo = document.getElementById("spinning-logo");
const logoFooter = document.querySelector("footer");
const elementsToCheck = [
  { el: spinningLogo, styleProp: "fill", white: "var(--color-white)", black: "var(--color-black)" },
  { el: toggleSmiley, styleProp: "color", white: "var(--color-white)", black: "var(--color-black)" },
  { el: toggleDarkMode, styleProp: "color", white: "var(--color-white)", black: "var(--color-black)" }
];
window.addEventListener("scroll", () => {
  const footerTop = logoFooter.getBoundingClientRect().top;
  elementsToCheck.forEach(({ el, styleProp, white, black }) => {
    const elBottom = el.getBoundingClientRect().bottom;
    el.style[styleProp] = elBottom >= footerTop ? white : black;
  });
});