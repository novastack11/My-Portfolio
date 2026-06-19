// Welcome message
window.onload = function () {
    console.log("Welcome to Sani Shehu's Portfolio");
};

// Auto year in footer
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Hire Me Button
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

// Typing Animation
const text = "Web Developer | Programmer | NovaStack Founder";
let i = 0;

function typeWriter() {
    const typingElement = document.getElementById("typing");

    if (typingElement && i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener("load", typeWriter);

// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// Back To Top Button
window.onscroll = function () {
    let btn = document.getElementById("topBtn");

    if (btn) {
        if (document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}