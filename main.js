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

/* Steaks
console.log(db.steaks[0]); // Loggar den första steken
console.log(db.steaks.filter(steak => steak.price < 50)); // Filtrerar Steaks under $50

db.steaks.forEach(steak => {
    const steakItem = document.createElement('section');
    steakItem.innerHTML = `
        <img src="${steak.img}" alt="${steak.name}">
        <h2>${steak.name}</h2>
        <p>${steak.dsc}</p>
        <p>Price: $${steak.price}</p>
    `;
    document.body.appendChild(steakItem);
}); */

/* Ice Creams
console.log(db['ice-cream'][0]); // Loggar den första rätten i "best-foods"
console.log(db['ice-cream'].filter(iceCream => iceCream.price < 50)); // Filtrerar rätter under $50

db['ice-cream'].forEach(iceCream => {
    const iceCreamItem = document.createElement('section');
    iceCreamItem.innerHTML = `
        <img src="${iceCream.img}" alt="${iceCream.name}">
        <h2>${iceCream.name}</h2>
        <p>${iceCream.dsc}</p>
        <p>Price: $${iceCream.price}</p>
    `;
    document.body.appendChild(iceCreamItem); 
}); */

/* Drinks
console.log(db.drinks[0]); // Loggar den första drycken
console.log(db.drinks.filter(drink => drink.price < 50)); // Filtrerar drycker under $50

db.drinks.forEach(drink => {
    const drinkItem = document.createElement('section');
    drinkItem.innerHTML = `
        <img src="${drink.img}" alt="${drink.name}">
        <h2>${drink.name}</h2>
        <p>${drink.dsc}</p>
        <p>Price: $${drink.price}</p>
    `;
    document.body.appendChild(drinkItem);
}); */

/* 

bbqs
: 
59
best-foods
: 
60
breads
: 
58
burgers
: 
60
chocolates
: 
59
desserts
: 
43
drinks
: 
48
fried-chicken
: 
58
ice-cream
: 
27
our-foods
: 
697
pizzas
: 
54
porks
: 
60
sandwiches
: 
55
sausages
: 
60
steaks
: 
57 */

/* KOM-IHÅG!  
I JavaScript är bindestreck (-) inte tillåtna i variabelnamn 
 objekt-nycklar utan att använda strängnotation */