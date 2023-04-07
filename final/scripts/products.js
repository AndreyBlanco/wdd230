let formCount = localStorage.getItem("formCount");
console.log(formCount);

if (formCount == null)
{
    document.getElementById("stored").textContent = 0;
}else{
    document.getElementById("stored").textContent = formCount;
}





const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

let productsCount = 0;
let data;

async function getProductsData() {
    const response = await fetch(url);
    data = await response.json();
    for (let index = 0; index < data.length; index++) {
        productsCount = productsCount + 1;        
    }
    displayProducts(data);
}

getProductsData();

var count = 12;
var countRest = 12;
let cards = document.querySelector('#productList');

const displayProducts = (products) => {
           
    for (let index = count - 12; index < countRest; index++){
      
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

document.getElementById("seeMore").addEventListener('click', moreProducts);

function moreProducts()
{
    console.log("Estoy acá");
    console.log(count, productsCount);
    
    if (count + 12 < productsCount)
    {
        count = count + 12;
        countRest = count;
        while (cards.firstChild) {
           cards.removeChild(cards.firstChild);
        }
        displayProducts(data);
    }
    else
    {
        count = count + 12;
        countRest = productsCount;
        while (cards.firstChild) {
            cards.removeChild(cards.firstChild);
        }
        displayProducts(data);
        countRest = (count - productsCount);
        count = 12;
        displayProducts(data);
        count = countRest;
    }
}