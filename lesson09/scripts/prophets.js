const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
}
  
getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let p = document.createElement(`p`);
      let div = document.createElement(`div`);
      let h3 = document.createElement(`h3`);
      let h4 = document.createElement(`h4`);
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      h3.textContent = `Date of Birth: ${prophet.birthdate}`;
      h4.textContent = `Place of Birth: ${prophet.birthplace}`;
      p.textContent = `${prophet.order}°`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
            
      div.setAttribute(`class`, `divImg`);
      div.appendChild(portrait);
      div.appendChild(p);
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(div);
  
      cards.appendChild(card);
    }); // end of forEach loop
} // end of function expression