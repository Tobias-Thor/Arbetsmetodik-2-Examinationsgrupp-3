const toggleButton = document.getElementsByClassName("toggle-button")[0]; //Skapar variabeln toggleButton och hämtar första värdet i arrayen toggle-button
const navbarLinks = document.getElementsByClassName("navbar-links")[0]; //Skapar variabeln navbarLinks och hämtar första värdet i arrayen navbar-links

toggleButton.addEventListener("click", () => {
  console.log("Toggle button clicked!");
  navbarLinks.classList.toggle("active"); //Om så visas menyn
  toggleButton.classList.toggle("active");
});

console.log(db.pagination); // samtliga kategorier tillgänglig i db

//ex.
console.log(db.bbqs); // lista med bbqs
