let products = JSON.parse(localStorage.getItem("products")) || [];

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  products.forEach((p, i) => {
    list.innerHTML += `
      <li>
        ${p.name} - Rp${p.price}
        <button onclick="remove(${i})">Hapus</button>
      </li>
    `;
  });
}

function addProduct() {
  products.push({
    name: name.value,
    price: price.value,
    image: image.value
  });
  localStorage.setItem("products", JSON.stringify(products));
  render();
}

function remove(i) {
  products.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(products));
  render();
}

render();
