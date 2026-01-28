const cart = JSON.parse(localStorage.getItem("cart")) || [];
const list = document.getElementById("cart");

let total = 0;
cart.forEach(p => {
  total += p.price;
  list.innerHTML += `<li>${p.name} - Rp${p.price}</li>`;
});

list.innerHTML += `<li><b>Total: Rp${total}</b></li>`;

function checkout() {
  location.href = "checkout.html";
}
