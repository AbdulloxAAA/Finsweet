// Dark mode
// Desktop toggle
const toggleDesktop = document.getElementById("modeToggle");
toggleDesktop?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Mobile toggle
const toggleMobile = document.getElementById("modeToggleMobile");
toggleMobile?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
//////////////////drobdown/////////
// Dropdownni tanlash
const dropdown = document.querySelector('.menu-item.dropdown');

dropdown.addEventListener('click', (e) => {
  e.stopPropagation(); // klikni yuqoriga uzatmaslik
  dropdown.classList.toggle('active'); // ochish/yopish
});

// Tashqariga bosilganda dropdownni yopish
window.addEventListener('click', () => {
  dropdown.classList.remove('active');
});





// Hamburger + mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});
const counters = document.querySelectorAll(".count");
let started = false;
////////////back top////////////////////////////////////////
const backToTopBtn = document.getElementById("backToTop");

// Sahifa scroll bo'lganda tugmani ko'rsatish/yashirish
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Tugma bosilganda sahifani yuqoriga siljitish
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
//////////////////////about pages////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
const counters = document.querySelectorAll('.xnum-delta');
let started = false;


function startCounting() {
counters.forEach(counter => {
let target = parseInt(counter.getAttribute("data-target"));
let current = 0;
let speed = target / 80; // tezlik


function update() {
current += speed;
if (current < target) {
counter.textContent = Math.floor(current);
requestAnimationFrame(update);
} else {
counter.textContent = target;
}
}


update();
});
}


const section = document.querySelector(".xsec-omega");


const observer = new IntersectionObserver(entries => {
if (entries[0].isIntersecting && !started) {
started = true;
startCounting();
observer.disconnect();
}
}, { threshold: 0.2 });


observer.observe(section);
});