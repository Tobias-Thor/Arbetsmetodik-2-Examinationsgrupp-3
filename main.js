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
      <p><strong>Pris:</strong> $${bbq.price}</p>
      <p><strong>Betyg:</strong> ${"⭐".repeat(bbq.rate)}</p>
      <p><strong>Plats:</strong> ${bbq.country}</p>
    `;

    // Lägg till kortet i container
    container.appendChild(card);
  });
}

createCards(db); // Anropa funktionen för att skapa korten
