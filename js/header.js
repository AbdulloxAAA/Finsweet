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

///////////////////sanoq siatemasi////////////////////////////////////////////
function startCounting() {
  if (started) return; // faqat bir marta ishlaydi
  started = true;

  counters.forEach(counter => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let speed = target / 100; // sanash tezligi

    let update = setInterval(() => {
      count += speed;
      if (count >= target) {
        counter.textContent = target;
        clearInterval(update);
      } else {
        counter.textContent = Math.floor(count);
      }
    }, 20);
  });
}

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) startCounting();
  });
});

observer.observe(document.querySelector(".about__image-wrap"));
///////servive js code////////////////////
const data = {
  strategy: {
    title: "Helping clients with research and strategy for their business",
    desc1:
      "Business strategy helps companies define their direction and make better long-term decisions. We analyze market trends, customer needs and competition.",
    desc2:
      "Our team develops custom strategies to improve operations, marketing and growth opportunities.",
    img: "images/service/service img.png"
  },
  digital: {
    title: "Digitalization that transforms your business",
    desc1:
      "We help companies digitize their processes, automate workflows and implement modern technologies.",
    desc2:
      "Our digital solutions improve speed, accuracy and help businesses operate more efficiently.",
    img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
  },
  risk: {
    title: "Risk assessment that protects your company",
    desc1:
      "We identify potential risks and vulnerabilities that could affect your organization.",
    desc2:
      "Our experts help you build strong risk-management systems and avoid future losses.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
  }
};

const buttons = document.querySelectorAll(".tab-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".tab-btn.active").classList.remove("active");
    btn.classList.add("active");

    const id = btn.dataset.id;

    document.getElementById("title").textContent = data[id].title;
    document.getElementById("desc1").textContent = data[id].desc1;
    document.getElementById("desc2").textContent = data[id].desc2;
    document.getElementById("main-img").src = data[id].img;
  });
});
////////footer/////////////////////////////////////////////////////////////////////////////////
// DARK MODE
const body = document.body;

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// SAVE MODE
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.checked = true;
}


// EMAIL CHECK
document.getElementById("subscribeBtn").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const msg = document.querySelector(".email-msg");

  if (!email.trim()) {
    msg.style.color = "#ff9000";
    msg.textContent = "Please enter an email!";
    return;
  }

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (valid) {
    msg.style.color = "#4CAF50";
    msg.textContent = "Subscribed successfully!";
  } else {
    msg.style.color = "#ff9000";
    msg.textContent = "Invalid email!";
  }
});
