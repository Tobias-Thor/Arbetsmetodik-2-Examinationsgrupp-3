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


const toggleButton = document.getElementsByClassName("toggle-button")[0]; //Skapar variabeln toggleButton och hämtar första värdet i arrayen toggle-button
const navbarLinks = document.getElementsByClassName("navbar-links")[0]; //Skapar variabeln navbarLinks och hämtar första värdet i arrayen navbar-links

toggleButton.addEventListener("click", () => {
  console.log("Toggle button clicked!");
  navbarLinks.classList.toggle("active"); //Om så visas menyn
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
// For filtering food options...
// Function to render the cards for BBQ items
function renderCards(data) {
  const container = document.getElementById("bbq-container"); // Get the element where the cards will be rendered
  container.innerHTML = ""; // Clear any existing content in the container
  data.forEach((item) => { // Loop through each item in the data array
    const card = document.createElement("section"); // Create a new section element to represent each card
    card.className = "menu-item"; // Assign the class 'menu-item' to the card for styling
    // Set the inner HTML content of the card with dynamic data
    card.innerHTML = `   
      <img src="${item.img}" alt="${item.name}"> 
      <h3>${item.name}</h3>
      <p>${item.dsc}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(item.rate)}</p>
      <p><strong>Place:</strong> ${item.country}</p>
    `;
    container.appendChild(card); // Append the card to the container
  });
}

// Function to sort data based on a given property and order
function sortData(property, order) {
  return db.bbqs.slice().sort((a, b) => { // Create a new array from db.bbqs and sort it
    if (order === "asc") { // Check if the order is ascending
      return a[property] > b[property] ? 1 : -1; // Compare the two items and return the sorted order
    } else {
      return a[property] < b[property] ? 1 : -1; // For descending order, reverse the comparison
    }
  });
}

// Event listener for price sorting
document.getElementById("sort-price").addEventListener("change", (e) => { // Add a listener for changes in the price dropdown
  const sortedData = sortData("price", e.target.value); // Sort the data based on price and the selected order
  renderCards(sortedData); // Render the sorted cards
});

// Event listener for country sorting
document.getElementById("sort-country").addEventListener("change", (e) => { // Add a listener for changes in the country dropdown
  const sortedData = sortData("country", e.target.value); // Sort the data based on country and the selected order
  renderCards(sortedData); // Render the sorted cards
});

// Event listener for rating sorting
document.getElementById("sort-rate").addEventListener("change", (e) => { // Add a listener for changes in the rating dropdown
  const sortedData = sortData("rate", e.target.value); // Sort the data based on rating and the selected order
  renderCards(sortedData); // Render the sorted cards
});

// Event listener for name sorting
document.getElementById("sort-name").addEventListener("change", (e) => { // Add a listener for changes in the name dropdown
  const sortedData = sortData("name", e.target.value); // Sort the data based on name and the selected order
  renderCards(sortedData); // Render the sorted cards
});

// Render all cards on page load
renderCards(db.bbqs); // Call the renderCards function to display all BBQ items when the page loads


/* TODAYS FEATURED FOOD ITEMS */
// Function that returns featured items for each day of the week
function getWeeklyFeaturedItems(data) {
  // Randomize featured food items for each day in the week
  const allItems = [...data.bbqs]; // Create a copy of the BBQ items array
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // Array of days in the week

  const weeklyFeatured = {};  // Object to store featured items for each day
  daysOfWeek.forEach((day) => { // Loop through each day of the week
    weeklyFeatured[day] = []; // Initialize an empty array for the day's featured items
    while (weeklyFeatured[day].length < 2) { // Ensure that there are 2 items per day
      const randomIndex = Math.floor(Math.random() * allItems.length); // Generate a random index
      const randomItem = allItems[randomIndex];  // Select a random item from all items
      if (!weeklyFeatured[day].includes(randomItem)) { // Check if the item is already featured for the day
        weeklyFeatured[day].push(randomItem); // If not, add the item to the featured list for the day
      }
    }
  });

  return weeklyFeatured; // Return the object with weekly featured items
}

// Generate the weekly featured items
const weeklyFeaturedItems = getWeeklyFeaturedItems(db); // Call the function to get the featured items for the week
console.log(weeklyFeaturedItems); // Log the weekly featured items to the console for debugging

// Function to display the featured items for today
function displayTodayFeatured(items) {
  const today = new Date().toLocaleString("en-US", { weekday: "long" });  // Get the current weekday (e.g., "Monday")
  const todayItems = items[today];  // Get the featured items for the current day
  const container = document.getElementById("featured-container"); // Get the container where the featured items will be displayed
  container.innerHTML = ""; // Clear any existing content in the container

  todayItems.forEach((item) => { // Loop through each featured item for today
    const card = document.createElement("section"); // Create a new section element for the card
    card.className = "featured-item"; // Assign the class 'featured-item' for styling
    card.innerHTML = ` 
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.dsc}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(item.rate)}</p>
      <p><strong>Place:</strong> ${item.country}</p>
      <h4>FEATURED DISH OF TODAY - TRY IT OUT!</h4>
    `;
    container.appendChild(card); // Append the card to the featured container
  });
}

// Display the featured items for today on page load
displayTodayFeatured(weeklyFeaturedItems); // Call the function to display the featured items for today when the page loads
// ==================== End of Tobias Code ====================

