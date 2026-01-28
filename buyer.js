const products = JSON.parse(localStorage.getItem("products")) || [];
const container = document.getElementById("products");

products.forEach(p => {
  container.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>Rp ${p.price}</p>
      <button onclick="addToCart('${p.name}', ${p.price})">Tambah</button>
    </div>
  `;
});

function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Ditambahkan ke keranjang");
}
