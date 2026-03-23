const products = [
  { name: "Tent", price: 100 },
  { name: "Backpack", price: 80 },
  { name: "Sleeping Bag", price: 60 }
];

// Discount feature
function applyDiscount(price) {
  return price * 0.9; // 10% discount
}

const container = document.getElementById("product-list");

products.forEach(product => {
  const discounted = applyDiscount(product.price);

  const item = document.createElement("div");
  item.innerHTML = `
    <h3>${product.name}</h3>
    <p>Original: $${product.price}</p>
    <p>Discounted: $${discounted.toFixed(2)}</p>
  `;

  container.appendChild(item);
});