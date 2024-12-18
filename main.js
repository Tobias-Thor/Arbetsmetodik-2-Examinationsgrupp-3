console.log(db.pagination); // samtliga kategorier tillgänglig i db

//ex.
console.log(db.bbqs); // lista med bbqs

console.log("app.js har laddats.");
import db from "./db.js"; // Importera mockdatan från db.js

// Funktion för att skapa kort
function createCards(data) {
  const container = document.getElementById("bbq-container");

  // Iterera genom alla objekt och skapa kort
  data.bbqs.forEach((bbq) => {
    const card = document.createElement("section");
    card.className = "menu-item";

    // Skapa HTML för varje kort
    card.innerHTML = `
      <img src="${bbq.img}" alt="${bbq.name}">
      <h3>${bbq.name}</h3>
      <p>${bbq.dsc}</p>
      <p><strong>Price:</strong> $${bbq.price}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(bbq.rate)}</p>
      <p><strong>Conutry:</strong> ${bbq.country}</p>
      <button
      class="add-to-cart"
      data-product="${bbq.name}"
      data-price="${bbq.price}"
    >
      Add to cart
    </button>
    `;

    // Lägg till kortet i container
    container.appendChild(card);
  });
}

createCards(db); // Anropa funktionen för att skapa korten
