let cart = [];
let totalPrice = 0;

// Hämta element från HTML
const orderPopup = document.getElementById("order-popup");
const orderList = document.getElementById("order-list");
const totalPriceElem = document.getElementById("total-price");
const cartCountElem = document.getElementById("cart_count");
const submitOrderBtn = document.getElementById("submit-order");
const thankYouPopup = document.getElementById("thank-you-popup");

// Lägg till eventlyssnare på alla "Add to Cart"-knappar
document.querySelectorAll(".add_to_cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productName = event.target.getAttribute("data-product");
    const productPrice = parseFloat(event.target.getAttribute("data-price"));

    // Kolla om produkten redan finns i varukorgen
    const existingItem = cart.find((item) => item.name === productName);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    totalPrice += productPrice;

    updateOrderList();
    updateCartCount();
  });
});

// Uppdatera varukorgslistan i popupen
function updateOrderList() {
  orderList.innerHTML = ""; // Rensa lista
  cart.forEach((item, index) => {
    const itemElem = document.createElement("div");
    itemElem.className = "order-item";
    itemElem.innerHTML = `
      <span>${item.name} - ${item.quantity}/st - ${(
      item.price * item.quantity
    ).toFixed(2)} kr</span>
      <button class="remove-item" data-index="${index}">Ta bort</button>
    `;
    orderList.appendChild(itemElem);
  });
  totalPriceElem.textContent = totalPrice.toFixed(2); // Uppdatera totalpriset
}

// Uppdatera antal produkter i navbaren
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountElem.textContent = totalItems; // Uppdatera varukorgens produktantal
}

// Ta bort produkt från varukorgen
orderList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-item")) {
    const index = parseInt(event.target.getAttribute("data-index"), 10);
    const item = cart[index];
    totalPrice -= item.price * item.quantity;
    cart.splice(index, 1);
    updateOrderList();
    updateCartCount();
  }
});

// Visa eller dölja varukorgens popup när man klickar på "Current Order"-knappen
document.getElementById("order_button").addEventListener("click", () => {
  orderPopup.classList.toggle("hidden");
});

// Skicka beställning
submitOrderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Din varukorg är tom!");
    return;
  }

  // Nollställ varukorgen
  cart = [];
  totalPrice = 0;
  updateOrderList();
  updateCartCount();

  // Dölja varukorgen och visa "Tack för beställningen"-popup
  orderPopup.classList.add("hidden");
  thankYouPopup.classList.remove("hidden");

  // Dölja "Tack för beställningen"-popup efter 3 sekunder
  setTimeout(() => {
    thankYouPopup.classList.add("hidden");
  }, 3000);
});

// Stäng popupen när man klickar på krysset
document.getElementById("close-popup").addEventListener("click", () => {
  orderPopup.classList.add("hidden");
});
