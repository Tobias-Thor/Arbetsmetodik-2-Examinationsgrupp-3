// ==================== Intro Code ====================

// Log the 'pagination' property of the 'db' object to the console
// This likely represents all available categories or pages in the database.
console.log(db.pagination); 

// Example of logging a specific property from the 'db' object:
// Log the 'bbqs' property, which is a list of BBQ items, to the console.
console.log(db.bbqs); 

// Inform the developer that the 'app.js' script has successfully loaded.
console.log("app.js har laddats.");
// ==================== End of Intro Code ====================


// ==================== Andrés Code ====================

// Create a variable 'toggleButton' and store the first element with the class name 'toggle-button'.
// This is used to target the hamburger menu button for responsive navigation.
const toggleButton = document.getElementsByClassName("toggle-button")[0]; 

// Create a variable 'navbarLinks' and store the first element with the class name 'navbar-links'.
// This represents the navigation menu links container.
const navbarLinks = document.getElementsByClassName("navbar-links")[0]; 

// Add a click event listener to the 'toggleButton' element.
// This will execute the provided callback function when the button is clicked.
toggleButton.addEventListener("click", () => {
  // Log a message to the console to confirm the toggle button was clicked.
  console.log("Toggle button clicked!");

  // Toggle the 'active' class on the 'navbarLinks' element.
  // If the class is present, it is removed; if not, it is added.
  // This controls whether the navigation menu is visible.
  navbarLinks.classList.toggle("active"); 

  // Toggle the 'active' class on the 'toggleButton' element itself.
  // This might be used for visual effects, such as changing the button's appearance.
  toggleButton.classList.toggle("active");
}); 
// ==================== End of Andrés Code ====================


// ==================== Mathilda's Code ====================

// Define a function named 'createCards' that takes one parameter, 'data'.
// The 'data' parameter is expected to be an object containing information about BBQ items.
function createCards(data) {
  // Find the HTML element with the ID 'bbq-container' and store it in a variable named 'container'.
  // This is where all the BBQ item cards will be appended.
  const container = document.getElementById("bbq-container");

  // Iterate over each object in the 'bbqs' array of the 'data' object using the forEach method.
  // Each object in the array represents a BBQ item.
  data.bbqs.forEach((bbq) => {
    // Create a new 'section' element and store it in a variable named 'card'.
    // This element will act as a container for the individual BBQ item details.
    const card = document.createElement("section");

    // Assign the class name 'menu-item' to the 'card' element.
    // This likely applies specific styles defined in CSS for each menu item.
    card.className = "menu-item";

    // Set the inner HTML of the 'card' element.
    // This dynamically generates the content of the card based on the properties of the current BBQ item.
    card.innerHTML = `
      <img src="${bbq.img}" alt="${bbq.name}">
      <h3>${bbq.name}</h3>
      <p>${bbq.dsc}</p>
      <p><strong>Price:</strong> $${bbq.price}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(bbq.rate)}</p>
      <p><strong>Place:</strong> ${bbq.country}</p>
      <button
      class="add-to-cart"
      data-product="${bbq.name}"
      data-price="${bbq.price}"
    >
      Add to cart
    </button>
    `;

    // Append the 'card' element to the 'container' element.
    // This adds the generated card to the page, making it visible in the designated container.
    container.appendChild(card);
  });
}

// Call the 'createCards' function and pass the 'db' object as an argument.
// This generates and displays the BBQ item cards on the page using the data from the database.
createCards(db); // Anropa funktionen för att skapa korten
// ==================== End of Mathilda's Code ====================


// ==================== Tobias Code ====================

// En funktion som returnerar featured items för veckodagar
function getWeeklyFeaturedItems(data) {
  // Slumpa fram featured items för varje dag i veckan
  const allItems = [...data.bbqs];
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const weeklyFeatured = {};
  daysOfWeek.forEach((day) => {
    weeklyFeatured[day] = [];
    while (weeklyFeatured[day].length < 2) { // 2 rätter per dag
      const randomIndex = Math.floor(Math.random() * allItems.length);
      const randomItem = allItems[randomIndex];
      if (!weeklyFeatured[day].includes(randomItem)) {
        weeklyFeatured[day].push(randomItem);
      }
    }
  });

  return weeklyFeatured;
}

// Generera veckans featured items
const weeklyFeaturedItems = getWeeklyFeaturedItems(db);
console.log(weeklyFeaturedItems);



// Funktion för att hämta dagens featured items
function displayTodayFeatured(items) {
  // Hämta dagens veckodag
  const today = new Date().toLocaleString("en-US", { weekday: "long" }); // "Monday", "Tuesday", etc.

  // Hämta rätter för dagen
  const todayItems = items[today];
  const container = document.getElementById("featured-container");
  container.innerHTML = ""; // Rensa tidigare innehåll

  todayItems.forEach((item) => {
    const card = document.createElement("section");
    card.className = "featured-item";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.dsc}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(item.rate)}</p>
      <p><strong>Place:</strong> ${item.country}</p>
      <h4>FEATURED DISH OF TODAY - TRY IT OUT!</h4>
    `;
    container.appendChild(card);
  });
}

// Visa dagens featured items vid sidladdning
displayTodayFeatured(weeklyFeaturedItems);
