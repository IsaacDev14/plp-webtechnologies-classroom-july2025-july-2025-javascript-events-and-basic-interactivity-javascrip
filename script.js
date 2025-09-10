// Dark/Light Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Counter Feature
let count = 0;
const counter = document.getElementById('counter');
document.getElementById('increment').addEventListener('click', () => {
    count++;
    counter.textContent = count;
});
document.getElementById('decrement').addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.classList.toggle('visible');
    });
});

// Form Validation
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default submission

    let valid = true;

    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if(name.value.trim() === '') {
        nameError.textContent = "Name is required";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value)) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if(password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if(valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});
