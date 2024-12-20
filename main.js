console.log(db.pagination);
console.log(db.bbqs);
console.log("app.js har laddats.");

const toggleButton = document.getElementsByClassName("toggle-button")[0]; //Skapar variabeln toggleButton och hämtar första värdet i arrayen toggle-button
const navbarLinks = document.getElementsByClassName("navbar-links")[0]; //Skapar variabeln navbarLinks och hämtar första värdet i arrayen navbar-links

toggleButton.addEventListener("click", () => {
  console.log("Toggle button clicked!");
  navbarLinks.classList.toggle("active"); //Om så visas menyn
  toggleButton.classList.toggle("active");
});

function displayRandomItems(db) {
  // Get the container where the random items will be displayed
  const container = document.querySelector(".img_container");

  // Clear any existing content in the container
  container.innerHTML = "";

  // Generate two random indices to select items
  const randomIndices = [];
  while (randomIndices.length < 1) {
    const randomIndex = Math.floor(Math.random() * db.bbqs.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  // Loop through the selected items and display them
  randomIndices.forEach((index) => {
    const item = db.bbqs[index];

    // Create a new card for each item
    const card = document.createElement("section");
    card.className = "bbq_item";

    // Create an image element for the item
    const image = document.createElement("img");
    image.src = item.img;
    image.alt = item.name;

    // Append the image to the card
    card.append(image);

    // Create a description section for the item
    const descriptionContainer = document.createElement("section");
    descriptionContainer.classList.add("description");
    descriptionContainer.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.dsc}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(item.rate)}</p>
      <p><strong>Place:</strong> ${item.country}</p>
    `;

    // Append the description to the card
    card.append(descriptionContainer);

    // Add the card to the container
    container.appendChild(card);
  });
}

// Call the function to display 2 random items
displayRandomItems(db);
