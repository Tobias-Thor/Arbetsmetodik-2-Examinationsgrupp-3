// Hämta nödvändiga DOM-element
const feedback_btn = document.getElementById("feedback_btn");
const feedback_popup = document.getElementById("feedback_popup");
const close_feedback_popup = document.getElementById("close_popup");
const thank_you_popup = document.getElementById("thank_you_popup");
const close_thank_you_btn = document.getElementById("close_thank_you");

const stars = document.querySelectorAll(".star");
let selected_rating = 0;

// När användaren klickar på feedback-knappen, visa popupen
feedback_btn.addEventListener("click", () => {
  feedback_popup.style.display = "flex"; // Visa feedback-popupen
});

// När användaren klickar på stängknappen för feedback-popupen (krysset)
close_feedback_popup.addEventListener("click", () => {
  feedback_popup.style.display = "none"; // Stäng feedback-popupen

  // Rensa feedback-texten och återställ stjärnorna när popupen stängs
  document.getElementById("feedback_text").value = ""; // Rensa feedback-textfältet
  selected_rating = 0; // Återställ det valda betyget
  stars.forEach((star) => {
    star.classList.remove("selected"); // Återställ stjärnvalet
  });
});

// När användaren klickar på stängknappen för tack-popupen
close_thank_you_btn.addEventListener("click", () => {
  thank_you_popup.style.display = "none"; // Stäng tack-popupen
});

// Klickhändelse för att välja stjärnor
stars.forEach((star) => {
  star.addEventListener("click", () => {
    selected_rating = star.dataset.value;

    // Markera de valda stjärnorna
    stars.forEach((s) => {
      s.classList.remove("selected");
      if (s.dataset.value <= selected_rating) {
        s.classList.add("selected");
      }
    });
  });
});

// Skicka feedback
const send_feedback_btn = document.getElementById("send_feedback");
send_feedback_btn.addEventListener("click", () => {
  const feedback_text = document.getElementById("feedback_text").value;

  // Kontrollera att både feedback och betyg har angetts
  if (feedback_text.trim() === "" || selected_rating === 0) {
    alert("Vänligen skriv feedback och välj ett betyg!");
    return;
  }

  // Uppdatera tack-meddelandet med valda stjärnorna
  const thank_you_message = document.getElementById("thank_you_message");
  thank_you_message.textContent = `Tack för din feedback samt för ${selected_rating} stjärnor.`;

  // Dölja feedback-popupen och visa tack-popupen
  feedback_popup.style.display = "none";
  thank_you_popup.style.display = "flex"; // Visa tack-popupen

  // Rensa feedback-texten och återställ stjärnorna efter att feedbacken skickats
  document.getElementById("feedback_text").value = ""; // Rensa feedback-textfältet
  selected_rating = 0; // Återställ det valda betyget
  stars.forEach((star) => {
    star.classList.remove("selected"); // Återställ stjärnvalet
  });
});
