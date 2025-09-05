// =============================
// Part 1: Event Handling
// =============================
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "🎉 Button clicked! Event handling works!";
});

// =============================
// Part 2: Interactive Elements
// =============================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// FAQ Toggle
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// =============================
// Part 3: Form Validation
// =============================
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting by default

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const successMsg = document.getElementById("successMsg");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMsg.textContent = "";

  let valid = true;

  // Name validation
  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email (e.g. user@example.com).";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Final check
  if (valid) {
    successMsg.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
