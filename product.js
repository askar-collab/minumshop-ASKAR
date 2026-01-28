/* =========================
   CEK LOGIN PEMBELI
========================= */
if (
  localStorage.getItem("loggedIn") !== "true" ||
  localStorage.getItem("role") !== "buyer"
) {
  window.location.href = "login.html";
}

/* =========================
   DATA PRODUK
========================= */
// Ambil produk dari localStorage (hasil input admin)
let products = JSON.parse(localStorage.getItem("products")) || [];

/* =========================
   RENDER PRODUK
========================= */
const productList = document.getElementById("productList");

function renderProducts() {
  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = "<p>Belum ada produk tersedia</p>";
    return;
  }

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="content">
        <h3>${product.name}</h3>
        <p>Rp ${Number(product.price).toLocaleString("id-ID")}</p>
        <button onclick="addToCart(${index})">Tambah ke Keranjang</button>
      </div>
    `;

    productList.appendChild(card);
  });
}

/* =========================
   TAMBAH KE CART
========================= */
function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Produk ditambahkan ke keranjang 🛒");
}

/* =========================
   INIT
========================= */
renderProducts();
