// focus/blur + hints (kept explicit and simple)
document.getElementById("name").addEventListener("focus", function () {
  this.style.border = "2px solid blue";
  document.getElementById("h1").textContent = "Full name, e.g., Jane Doe";
});
document.getElementById("name").addEventListener("blur", function () {
  this.style.border = "2px solid #999";
  document.getElementById("h1").textContent = "";
});

document.getElementById("email").addEventListener("focus", function () {
  this.style.border = "2px solid blue";
  document.getElementById("h2").textContent = "Must contain @ and a dot";
});
document.getElementById("email").addEventListener("blur", function () {
  this.style.border = "2px solid #999";
  document.getElementById("h2").textContent = "";
});

document.getElementById("age").addEventListener("focus", function () {
  this.style.border = "2px solid blue";
  document.getElementById("h3").textContent = "Positive number only";
});
document.getElementById("age").addEventListener("blur", function () {
  this.style.border = "2px solid #999";
  document.getElementById("h3").textContent = "";
});

// double-click toggles favourite
document.getElementById("fav").addEventListener("dblclick", function () {
  this.textContent = this.textContent === "♡" ? "❤️" : "♡";
});

// simple validation for each input
document.getElementById("go").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let age = document.getElementById("age").value.trim();

  if (name === "") { alert("Name is required"); return; }
  if (!email.includes("@") || !email.includes(".")) { alert("Enter a valid email"); return; }
  if (age === "" || isNaN(age) || Number(age) <= 0) { alert("Enter a valid age"); return; }

  alert("Form submitted successfully");
});
