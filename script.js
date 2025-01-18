function adjustPageWidth() {
    
        const screenWidth = window.innerWidth;
        let scalePercentage;
    
        if (screenWidth <= 600) { 
            scalePercentage = 50; // d. Less than or equal to 600px
        } else if (screenWidth <= 700) {
            scalePercentage = 75; // c. Between 600px and 700px
        } else if (screenWidth <= 767) {
            scalePercentage = 80; // b. Between 700px and 767px
        } else if (screenWidth <= 1600) {
            scalePercentage = 90; // a. Between 992px and 1600px
        } else {
            scalePercentage = 100; // No scaling above 1600px
        }
    
        document.body.style.transform = `scale(${scalePercentage / 100})`;
        document.body.style.transformOrigin = 'top left';
    }
    


// Call the function on initial page load
adjustPageWidth();

// Call the function whenever the window size changes
window.addEventListener('resize', adjustPageWidth);

// Collapsible Menu
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.textContent = "☰";
menuToggle.addEventListener('click', () => {
    const leftMenu = document.getElementById('left-menu');
    leftMenu.classList.toggle('collapsed');
});

document.getElementById('left-menu').insertBefore(menuToggle, document.getElementById('left-menu').firstChild);