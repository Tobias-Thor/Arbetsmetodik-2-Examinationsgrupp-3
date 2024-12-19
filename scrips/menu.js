// Hämta containern där BBQ-objekten ska läggas in
const container = document.querySelector('.img_container');

// Loopar igenom varje BBQ-objekt i databasen och renderar dem
db.bbqs.forEach(item => {
  // Skapar ett avsnitt för varje BBQ-objekt
  const bbqItem = document.createElement('section');
  bbqItem.classList.add('bbq_item');  // Lägger till en CSS-klass för stil

  // Skapar bild-elementet och sätter bildkälla och alternativ text
  const imageElement = document.createElement('img');
  imageElement.src = item.img;       // Sätter bildens URL från databasen
  imageElement.alt = item.name;      // Sätter bildens alternativtext

  // Skapar ett avsnitt för beskrivningen
  const description = document.createElement('section');
  description.classList.add('description');  // Lägger till CSS-klass för stil

  // Skapar rubrik med BBQ-objektets namn
  const name = document.createElement('h3');
  name.textContent = item.name;  // Sätter namnet från databasen

  // Skapar paragraf för beskrivningstexten
  const dsc = document.createElement('p');
  dsc.textContent = item.dsc;  // Sätter beskrivningen från databasen

  // Skapar paragraf för priset
  const price = document.createElement('p');
  price.textContent = `Price: $${item.price}`;  // Sätter priset från databasen

  // Skapar paragraf för betyg
  const rate = document.createElement('p');
  rate.textContent = `Rating: ${item.rate} stars`;  // Sätter betyget från databasen

  // Skapar paragraf för ursprungsland
  const country = document.createElement('p');
  country.textContent = `Country: ${item.country}`;  // Sätter landet från databasen

  // Lägger till alla beskrivningselement i beskrivningssektionen
  description.append(name, dsc, price, rate, country);

  // Lägger till bild och beskrivning i BBQ-objektets sektion
  bbqItem.append(imageElement, description);

  // Lägger till BBQ-objektet i huvudcontainern
  container.appendChild(bbqItem);
});