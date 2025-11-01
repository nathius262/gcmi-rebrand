// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

// Update button icon based on current theme
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    // Toggle between dark and light themes
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// Floating Action Button functionality
document.addEventListener('DOMContentLoaded', function() {
    const floatingBtn = document.getElementById('floatingBtn');
    const floatingMenu = document.getElementById('floatingMenu');
    const themeToggleFloating = document.getElementById('themeToggleFloating');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const themeToggleNav = document.getElementById('themeToggle');

    // Toggle floating menu
    floatingBtn.addEventListener('click', function() {
        floatingBtn.classList.toggle('active');
        floatingMenu.classList.toggle('active');
    });

    // Theme toggle functionality for floating button
    themeToggleFloating.addEventListener('click', function() {
        // Trigger the same function as nav theme toggle
        themeToggleNav.click();
        
        // Update floating button icon
        updateFloatingThemeIcon();
    });

    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Close floating menu after click
        floatingBtn.classList.remove('active');
        floatingMenu.classList.remove('active');
    });

    // Update floating theme icon based on current theme
    function updateFloatingThemeIcon() {
        const currentTheme = document.body.getAttribute('data-theme');
        const icon = themeToggleFloating.querySelector('i');
        if (currentTheme === 'dark') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }

    // Initialize floating theme icon
    updateFloatingThemeIcon();

    // Close floating menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!floatingBtn.contains(event.target) && !floatingMenu.contains(event.target)) {
            floatingBtn.classList.remove('active');
            floatingMenu.classList.remove('active');
        }
    });

    // Update nav theme toggle when floating button is used
    themeToggleNav.addEventListener('click', function() {
        updateFloatingThemeIcon();
    });

    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'flex'; // Always show in menu
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = body.getAttribute('data-theme') === 'dark' 
            ? 'var(--bg-midnight-blue)' 
            : 'rgba(248, 249, 250, 0.95)';
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = body.getAttribute('data-theme') === 'dark' 
            ? 'rgba(28, 37, 60, 0.95)' 
            : 'rgba(248, 249, 250, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Enhanced quote carousel with auto-rotation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize quote carousel with auto-rotation
    const quoteCarousel = new bootstrap.Carousel('#quoteCarousel', {
        interval: 5000, // Rotate every 5 seconds
        pause: 'hover',
        wrap: true
    });

    // Pause carousel when user interacts with it
    const carouselElement = document.getElementById('quoteCarousel');
    carouselElement.addEventListener('mouseenter', function() {
        quoteCarousel.pause();
    });
    
    carouselElement.addEventListener('mouseleave', function() {
        quoteCarousel.cycle();
    });
});