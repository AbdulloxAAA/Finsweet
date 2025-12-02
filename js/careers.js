const tabButtons = document.querySelectorAll(".job-tab");
const panes = document.querySelectorAll(".job-pane");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // update tabs
    tabButtons.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    // update panes
    const target = btn.dataset.target;
    panes.forEach((p) => {
      p.classList.remove("is-active");
      if (p.id === target) p.classList.add("is-active");
    });
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("applyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();
  const successMsg = document.getElementById("successMsg");

  if (!firstName || !lastName || !email || !mobile || !message) {
    successMsg.style.color = "red";
    successMsg.textContent = "Please fill out all fields!";
    return;
  }

  successMsg.style.color = "#22bb33";
  successMsg.textContent = "Form submitted successfully!";

  // Clear form after success
  document.getElementById("applyForm").reset();
});
