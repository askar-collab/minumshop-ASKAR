function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Username dan password wajib diisi");
    return;
  }

  /* ===== ADMIN ===== */
  if (username === "admin" && password === "a2026a") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("role", "admin");
    localStorage.setItem("currentUser", "admin");

    window.location.href = "index.html";
    return;
  }

  /* ===== USER ===== */
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    alert("Username atau password salah");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("role", "user");
  localStorage.setItem("currentUser", username);

  window.location.href = "index.html";
}
