// Hämta containern där BBQ-objekten ska läggas in
const container = document.querySelector(".img_container");

// Loopar igenom varje BBQ-objekt i databasen och renderar dem
db.bbqs.forEach((item) => {
  // Skapar ett avsnitt för varje BBQ-objekt
  const bbqItem = document.createElement("section");
  bbqItem.classList.add("bbq_item"); // Lägger till en CSS-klass för stil

  // Skapar bild-elementet och sätter bildkälla och alternativ text
  const imageElement = document.createElement("img");
  imageElement.src = item.img; // Sätter bildens URL från databasen
  imageElement.alt = item.name; // Sätter bildens alternativtext

  // Skapar ett avsnitt för beskrivningen
  const description = document.createElement("section");
  description.classList.add("description"); // Lägger till CSS-klass för stil

  // Skapar rubrik med BBQ-objektets namn
  const name = document.createElement("h3");
  name.textContent = item.name; // Sätter namnet från databasen

  // Skapar paragraf för beskrivningstexten
  const dsc = document.createElement("p");
  dsc.textContent = item.dsc; // Sätter beskrivningen från databasen

  // Skapar paragraf för priset
  const price = document.createElement("p");
  price.textContent = `Price: $${item.price}`; // Sätter priset från databasen

  // Skapar paragraf för betyg
  const rate = document.createElement("p");
  rate.textContent = `Rating: ${"⭐".repeat(item.rate)}`; // Sätter betyget från databasen

  // Skapar paragraf för ursprungsland
  const country = document.createElement("p");
  country.textContent = `Country: ${item.country}`; // Sätter landet från databasen

  // Skapar "Add to Cart"-knappen
  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.classList.add("add_to_cart");

  addToCartBtn.setAttribute("data-product", item.name);
  addToCartBtn.setAttribute("data-price", item.price);

  // Lägger till klickhändelse på knappen
  // addToCartBtn.addEventListener("click", () => {
  //   console.log(`${item.name} added to cart!`);
  // });

  addToCartBtn.classList.add("add_to_cart");
  // Lägger till alla beskrivningselement i beskrivningssektionen
  description.append(name, dsc, price, rate, country, addToCartBtn);

  // Lägger till bild och beskrivning i BBQ-objektets sektion
  bbqItem.append(imageElement, description);

  // Lägger till BBQ-objektet i huvudcontainern
  container.appendChild(bbqItem);
});

const toggleButton = document.getElementsByClassName("toggle-button")[0]; //Skapar variabeln toggleButton och hämtar första värdet i arrayen toggle-button
const navbarLinks = document.getElementsByClassName("navbar-links")[0]; //Skapar variabeln navbarLinks och hämtar första värdet i arrayen navbar-links

toggleButton.addEventListener("click", () => {
  console.log("Toggle button clicked!");
  navbarLinks.classList.toggle("active"); //Om så visas menyn
  toggleButton.classList.toggle("active");
});

// Tobias kod test

function renderCards(data) {
  const container = document.getElementsByClassName("img_container")[0];
  container.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("section");
    card.className = "bbq_item";
    const image = document.createElement("img");
    image.src = item.img;
    image.alt = item.name;

    card.append(image);

    const description_container = document.createElement("section");
    description_container.classList.add("description");

    description_container.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.dsc}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(item.rate)}</p>
      <p><strong>Place:</strong> ${item.country}</p>
      <button class="add_to_cart">Add to cart</button>
      `;

    card.append(description_container);
    container.appendChild(card);
  });
}

function sortData(property, order) {
  const test = [...db.bbqs];
  test.sort((a, b) => {
    if (order === "asc") {
      return a[property] > b[property] ? 1 : -1;
    } else {
      return a[property] < b[property] ? 1 : -1;
    }
  });
  console.log(test);
  return test;
}

// Event listener for price sorting
document.getElementById("sort-price").addEventListener("change", (e) => {
  const sortedData = sortData("price", e.target.value);
  renderCards(sortedData);
});

// Event listener for country sorting
document.getElementById("sort-country").addEventListener("change", (e) => {
  const sortedData = sortData("country", e.target.value);
  renderCards(sortedData);
});

// Event listener for rating sorting
document.getElementById("sort-rate").addEventListener("change", (e) => {
  const sortedData = sortData("rate", e.target.value);
  renderCards(sortedData);
});

// Event listener for name sorting
document.getElementById("sort-name").addEventListener("change", (e) => {
  const sortedData = sortData("name", e.target.value);
  renderCards(sortedData);
});

renderCards(db.bbqs);
