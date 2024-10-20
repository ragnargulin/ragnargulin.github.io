//TEXT ADJUSTMENT
let ele = document.querySelector(".textFiller");
window.addEventListener("load", () => adjustFontSize(ele));
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => adjustFontSize(ele), 200);
});
function adjustFontSize(el) {
  // initial range for the font size
  let minFontSize = 10;
  let maxFontSize = 200;
  let fontSize;
  // Binary search loop for efficiency
  while (minFontSize <= maxFontSize) {
    fontSize = Math.floor((minFontSize + maxFontSize) / 2);
    el.style.fontSize = fontSize + "px";

    console.log(`Font size: ${fontSize}, Overflow: ${isOverflowing(el)}`);

    if (isOverflowing(el)) {
      maxFontSize = fontSize - 1;
    } else {
      minFontSize = fontSize + 1; 
    }
  }
  el.style.fontSize = fontSize - 1 + "px";
}
function isOverflowing(el) {
  // Temporarily set overflow to hidden to avoid scrollbars
  let curOverflow = el.style.overflow;
  if (!curOverflow || curOverflow === "visible") {
    el.style.overflow = "hidden";
  }
  // Check for overflow
  let isOverflowing =
    el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
  el.style.overflow = curOverflow;
  return isOverflowing;
}

//LOGO
let ticking = false;
function scrollRotate() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const image = document.getElementById("spinning-logo");
      const rotateValue = window.pageYOffset / 10;
      image.style.transform = `rotate(${rotateValue}deg)`;
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener("scroll", scrollRotate);

//COLLAPSIBLES
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active"); // Toggle the 'active' class
  });
});
// SAVE SCROLL POSITION
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("scrollPos", window.scrollY);
});
// RESTORE SCROLL POSITION
window.addEventListener("load", () => {
  const scrollPos = sessionStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos));
  }
});

//SIDENAV
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll("nav a");

let debounceTimer;
window.addEventListener("scroll", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(navHighlighter, 10);
});
function navHighlighter() {
  let scrollY = window.pageYOffset;
  const offsetBuffer = 100;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 50;
    const sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop - offsetBuffer &&
      scrollY <= sectionTop + sectionHeight - offsetBuffer
    ) {
      navLinks.forEach((link) => {
        if (link.getAttribute("href").includes(sectionId)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

//MODAL ZOOMED IMAGE PORTFOLIO
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imgElement.src; // Set the image source
  modal.style.display = "flex"; // Display the modal
}
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none"; // Hide the modal
}
//CLOSE MODAL WITH KEYBOARD
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

//DARKMODE
const toggleButton = document.getElementById("toggleDarkMode");
const body = document.body;
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

//DVD
const dvdLogo = document.getElementById("dvdLogo");
const toggleSmiley = document.getElementById("toggleSmiley");
let posX = 0,
  posY = 0;
let velocityX = 2,
  velocityY = 2;
let animationId = null;
function animate() {
  posX += velocityX;
  posY += velocityY;
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  const { clientWidth: logoWidth, clientHeight: logoHeight } = dvdLogo;
  if (posX + logoWidth >= screenWidth || posX <= 0) velocityX = -velocityX;
  if (posY + logoHeight >= screenHeight || posY <= 0) velocityY = -velocityY;
  dvdLogo.style.left = `${posX}px`;
  dvdLogo.style.top = `${posY}px`;
  animationId = requestAnimationFrame(animate);
}
function toggleAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
    dvdLogo.style.visibility = "hidden";
  } else {
    dvdLogo.style.visibility = "visible";
    animate();
  }
}
toggleSmiley.addEventListener("click", toggleAnimation);

//ASIDE SVART ELLER VIT BEROENDE PÅ FOOTER
const spinningLogo = document.getElementById("spinning-logo");
const logoFooter = document.querySelector("footer");
const toggleDarkMode = document.getElementById("toggleDarkMode");
window.addEventListener("scroll", () => {
  const logoRect = spinningLogo.getBoundingClientRect();
  const footerRect = logoFooter.getBoundingClientRect();
  if (logoRect.bottom >= footerRect.top) {
    spinningLogo.style.fill = "var(--color-white)";
  } else {
    spinningLogo.style.fill = "var(--color-black)";
  }
  const smileyRect = toggleSmiley.getBoundingClientRect();
  if (smileyRect.bottom >= footerRect.top) {
    toggleSmiley.style.color = "var(--color-white)";
  } else {
    toggleSmiley.style.color = "var(--color-black)";
  }
  const darkModeRect = toggleDarkMode.getBoundingClientRect();
  if (darkModeRect.bottom >= footerRect.top) {
    toggleDarkMode.style.color = "var(--color-white)";
  } else {
    toggleDarkMode.style.color = "var(--color-black)";
  }
});
