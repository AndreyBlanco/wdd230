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
        document.getElementById("fnameConf").textContent = order.fname.value;
        document.getElementById("emailConf").textContent = order.email.value;
        document.getElementById("telConf").textContent = order.tel.value;
        document.getElementById("iOneConf").textContent = order.iOne.options[iOne.selectedIndex].value;
        document.getElementById("iTwoConf").textContent = order.iOne.options[iTwo.selectedIndex].value;
        document.getElementById("iThreeConf").textContent = order.iOne.options[iThree.selectedIndex].value;
        

        if (order.desc.value == "Please, add special instructions")
        {
            document.getElementById("descConf").textContent = "No special instructions added.";
        }
        else
        {
            document.getElementById("descConf").textContent = order.desc.value;
        }

        document.getElementById("joinForm").style.display = "none";
        document.getElementById("confirmation").style.display = "block";

        /*
        */
    }
}

document.getElementById("confirmBtn").addEventListener('click', function()
{
    let formulario = document.getElementById('mixForm');
    formulario.submit();
});

document.getElementById("returnBtn").addEventListener('click', function()
{
    document.getElementById("joinForm").style.display = "block";
    document.getElementById("confirmation").style.display = "none";
});

