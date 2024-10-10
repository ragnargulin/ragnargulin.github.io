    //TEXT ADJUSTMENT 
    let ele = document.querySelector('.textFiller');
    // Run the adjustFontSize function on page load and refresh
    window.addEventListener('load', () => adjustFontSize(ele));
    // Debounced resize event listener to prevent excessive calls
    let resizeTimeout;
    window.addEventListener('resize', () => {
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
            el.style.fontSize = fontSize + 'px';

            if (isOverflowing(el)) {
                maxFontSize = fontSize - 1; // Reduce the range
            } else {
                minFontSize = fontSize + 1; // Increase the range
            }
        }
        // Set the font size to the largest that fits
        el.style.fontSize = (fontSize - 1) + 'px';
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
        // Restore original overflow style
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
                // Only update if the value changes significantly (optional optimization)
                image.style.transform = `rotate(${rotateValue}deg)`;
                ticking = false;
            });
            ticking = true;
        }
    }
    window.addEventListener('scroll', scrollRotate);

    //COLLAPSIBLES
    const collapsibles = document.querySelectorAll(".collapsible");

    collapsibles.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.toggle("active"); // Toggle the 'active' class
        });
    });
   // SAVE SCROLL POSITION
window.addEventListener("beforeunload", () => {
    sessionStorage.setItem('scrollPos', window.scrollY);
});
// RESTORE SCROLL POSITION
window.addEventListener("load", () => {
    const scrollPos = sessionStorage.getItem('scrollPos');
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
        const offsetBuffer = 100; // Adjust this value as needed
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
            const sectionId = current.getAttribute("id");
            // Adjust the active class logic to account for the buffer
            if (scrollY > sectionTop - offsetBuffer && scrollY <= sectionTop + sectionHeight - offsetBuffer) {
                navLinks.forEach(link => {
                    if (link.getAttribute("href").includes(sectionId)) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }

    //BACKGROUND CIRCLE
    document.querySelectorAll('.colorSelectors .icon').forEach(icon => {
        icon.addEventListener('click', function() {
            // Get the color from the clicked icon
            const newColor = this.getAttribute('data-color');
            const backgroundIcon = document.getElementById('background-image');
    
            // Check if the clicked icon is already active
            const isActive = this.classList.contains('active-selector');
    
            // If the clicked icon is already active, remove the inline color style
            if (isActive) {
                backgroundIcon.style.color = ''; // Remove the inline color, falling back to the default
                this.classList.remove('active-selector'); // Remove active class
            } else {
                // Update the SVG's color to the new one
                backgroundIcon.style.color = newColor;
    
                // Remove 'active' class from all icons
                document.querySelectorAll('.colorSelectors .icon').forEach(i => {
                    i.classList.remove('active-selector');
                });
    
                // Add 'active' class to the clicked icon
                this.classList.add('active-selector');
            }
        });
    });
    
    //MODAL ZOOMED IMAGE PORTFOLIO
    function openModal(imgElement) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        modalImage.src = imgElement.src; // Set the image source
        modal.style.display = 'flex'; // Display the modal
    }
    function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.style.display = 'none'; // Hide the modal
    }
    //CLOSE MODAL WITH KEYBOARD
    document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Remove the hash from the URL
if (window.location.hash) {
    history.replaceState(null, '', window.location.href.split('#')[0]);
}
