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

document.getElementById("subOrder").addEventListener('click', changeForms);

function changeForms()
{
    const order = document.mixForm;
    
    if (order.fname.value == null || order.fname.value.length == 0 || /^\s+$/.test(order.fname.value))
    {
        alert("The First Name is required");
    }
    else if (order.email.value == null || order.email.value.length == 0 || /^\s+$/.test(order.email.value))
    {
        alert("The Email is required");
    }         
    else if ( !(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(order.email.value)))
    {
        alert("The Email is invalid");
    }
    else if (order.tel.value == null || order.tel.value.length == 0 || /^\s+$/.test(order.tel.value))
    {
        alert("The Phone is required");
    }
    else if ( !(/^\d{6,12}$/.test(order.tel.value)))
    {
        alert("The Phone is invalid");
    }
    else if (order.iOne.options[iOne.selectedIndex].value == order.iOne.options[iTwo.selectedIndex].value || order.iOne.options[iOne.selectedIndex].value == order.iOne.options[iThree.selectedIndex].value || order.iOne.options[iTwo.selectedIndex].value == order.iOne.options[iThree.selectedIndex].value )
    {
        alert("The ingredients choosen must to be different.");
    }
    else
    {
        let name = order.fname.value;
        let email = order.email.value;
        let phone = order.tel.value;
        let one = order.iOne.options[iOne.selectedIndex].value;
        let two = order.iOne.options[iTwo.selectedIndex].value;
        let three = order.iOne.options[iThree.selectedIndex].value;
        let desc = order.desc.textContent;
        if (desc == "Please, add special instructions");
        {
            desc = "No special instructions added."
        }
        let formulario = document.getElementById('mixForm');
        formulario.submit();
    }
}


