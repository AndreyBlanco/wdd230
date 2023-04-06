const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getProductsData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    displayProducts(data);
}


var count = 12;
getProductsData();

const displayProducts = (products) => {
    const cards = document.querySelector('#productList'); 
    
    
    for (let index = count - 12; index < count; index++){
      
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let div = document.createElement('div');
      let portrait = document.createElement('img');

      h2.textContent = `${products[index].name}`;  
      
      portrait.setAttribute('src', `images/products/${products[index].name}.jpg`);
      portrait.setAttribute('alt', `${products[index].name}`);
      portrait.setAttribute('loading', 'lazy');
            
      div.setAttribute(`class`, `divProducImg`);
      div.appendChild(portrait);
      
      card.appendChild(h2);
      card.appendChild(div);
  
      cards.appendChild(card);
    };
}