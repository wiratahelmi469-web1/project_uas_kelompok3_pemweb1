// 1. Toggle Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle) {
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
}


// 2. Dark Mode Toggle
document.body.insertAdjacentHTML(
"beforeend",
'<button id="darkModeBtn" style="position:fixed; bottom:20px; right:20px;">Dark Mode</button>'
);


document.getElementById("darkModeBtn").onclick = function () {
document.body.classList.toggle("dark");
};


// 3. Form Validation
const form = document.getElementById("contactForm");
if (form) {
form.addEventListener("submit", function (e) {
e.preventDefault();
alert("Pesan berhasil dikirim!");
});
}


// 4. Simple Image Slider (Homepage)
// Anda bisa tambahkan logic slider lanjutan di sini


// 5. Scroll Reveal Basic
window.addEventListener("scroll", () => {
document.querySelectorAll(".card").forEach((card) => {
const rect = card.getBoundingClientRect();
if (rect.top < window.innerHeight - 50) {
card.style.opacity = 1;
card.style.transform = "translateY(0)";
}
});
});