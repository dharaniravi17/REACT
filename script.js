// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Typing Effect
const typedText = document.querySelector('header h1');
const text = typedText.textContent;
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(type, 100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typedText.textContent = ''; // Start with an empty string
    type();
});
// Form Validation
const form = document.querySelector('form');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector('textarea');

form.addEventListener('submit', function(e) {
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        e.preventDefault();
        alert('Please fill in all fields.');
    } else if (!validateEmail(emailInput.value)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
// Scroll to Top Button
const topButton = document.createElement('button');
topButton.textContent = '↑';
topButton.className = 'scroll-top';
document.body.appendChild(topButton);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Image Hover Effect
const projectImages = document.querySelectorAll('.project img');

projectImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
        img.style.transition = 'transform 0.3s';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
