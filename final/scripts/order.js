const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

let data;

async function getProductsData() {
    const response = await fetch(url);
    data = await response.json();
    displayProducts(data);
}

getProductsData();

let first = document.querySelector('#iOne');
let second = document.querySelector('#iTwo');
let third = document.querySelector('#iThree');

const displayProducts = (products) => {
               
    for (let index = 0; index < 39; index++){
      
      let option = document.createElement('option');
      let option2 = document.createElement('option');
      let option3 = document.createElement('option');

      option.value = `${products[index].name}`;
      option.textContent = `${products[index].name}`;

      option2.value = `${products[index].name}`;
      option2.textContent = `${products[index].name}`;

      option3.value = `${products[index].name}`;
      option3.textContent = `${products[index].name}`;
              
      first.appendChild(option);
      second.appendChild(option2);
      third.appendChild(option3);
    };
}
