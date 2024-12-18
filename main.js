// Loggar alla tillgängliga kategorier
console.log(db.pagination);

// BBQ (lägg till country) (experimentera och byt ut till alternativ kod)
console.log(db.bbqs[0]); // Loggar den första BBQ:n
console.log(db.bbqs.filter(bbq => bbq.price < 50)); // Filtrerar BBQs med pris under $50

db.bbqs.forEach(bbq => {
    const bbqItem = document.createElement('section');
    bbqItem.innerHTML = `
        <img src="${bbq.img}" alt="${bbq.name}">
        <h2>${bbq.name}</h2>
        <p>${bbq.dsc}</p>
        <p>Price: $${bbq.price}</p>
    `;
    document.body.appendChild(bbqItem);
});

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