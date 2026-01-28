// LOGIN ADMIN
if (username === "admin" && password === "a2026a") {
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("role", "admin");
  localStorage.setItem("currentUser", "admin");
  location.href = "admin.html";
  return;
}

// LOGIN PEMBELI
const users = JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(
  u => u.username === username && u.password === password
);

if (user) {
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("role", "buyer"); // 🔥 WAJIB buyer
  localStorage.setItem("currentUser", username);
  location.href = "index.html";
} else {
  alert("Username atau password salah");
}
