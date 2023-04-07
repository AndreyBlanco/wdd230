const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

let formCount = 0;

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
    document.getElementById("order").value = new Date();

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
        var carbohydrates = 0;
        var protein = 0;
        var fat = 0;
        var calories = 0;
        var sugar = 0;
        
        for (let index = 0; index < 39; index++)
        {      
            if (data[index].name == order.iOne.options[iOne.selectedIndex].value)
            {
                document.getElementById("ch1").textContent = data[index].nutritions.carbohydrates;
                document.getElementById("p1").textContent = data[index].nutritions.protein;
                document.getElementById("f1").textContent = data[index].nutritions.fat;
                document.getElementById("cal1").textContent = data[index].nutritions.calories;
                document.getElementById("s1").textContent = data[index].nutritions.sugar;

                carbohydrates = carbohydrates + data[index].nutritions.carbohydrates;
                protein = protein + data[index].nutritions.protein;
                fat = fat + data[index].nutritions.fat;
                calories = calories + data[index].nutritions.calories;
                sugar = sugar + data[index].nutritions.sugar;
            };

            if (data[index].name == order.iTwo.options[iTwo.selectedIndex].value)
            {
                document.getElementById("ch2").textContent = data[index].nutritions.carbohydrates;
                document.getElementById("p2").textContent = data[index].nutritions.protein;
                document.getElementById("f2").textContent = data[index].nutritions.fat;
                document.getElementById("cal2").textContent = data[index].nutritions.calories;
                document.getElementById("s2").textContent = data[index].nutritions.sugar;

                carbohydrates = carbohydrates + data[index].nutritions.carbohydrates;
                protein = protein + data[index].nutritions.protein;
                fat = fat + data[index].nutritions.fat;
                calories = calories + data[index].nutritions.calories;
                sugar = sugar + data[index].nutritions.sugar;
            }

            if (data[index].name == order.iThree.options[iThree.selectedIndex].value)
            {
                document.getElementById("ch3").textContent = data[index].nutritions.carbohydrates;
                document.getElementById("p3").textContent = data[index].nutritions.protein;
                document.getElementById("f3").textContent = data[index].nutritions.fat;
                document.getElementById("cal3").textContent = data[index].nutritions.calories;
                document.getElementById("s3").textContent = data[index].nutritions.sugar;

                carbohydrates = carbohydrates + data[index].nutritions.carbohydrates;
                protein = protein + data[index].nutritions.protein;
                fat = fat + data[index].nutritions.fat;
                calories = calories + data[index].nutritions.calories;
                sugar = sugar + data[index].nutritions.sugar;
            }
        }


        document.getElementById("ch4").textContent = carbohydrates.toFixed(2);
        document.getElementById("p4").textContent = protein.toFixed(2);
        document.getElementById("f4").textContent = fat.toFixed(2);
        document.getElementById("cal4").textContent = calories.toFixed(2);
        document.getElementById("s4").textContent = sugar.toFixed(2);
        
        document.getElementById("fnameConf").textContent = `Name: ${order.fname.value}`;
        document.getElementById("emailConf").textContent = `Email: ${order.email.value}`;
        document.getElementById("telConf").textContent = `Phone: ${order.tel.value}`;
        document.getElementById("iOneConf").textContent = order.iOne.options[iOne.selectedIndex].value;
        document.getElementById("iTwoConf").textContent = order.iOne.options[iTwo.selectedIndex].value;
        document.getElementById("iThreeConf").textContent = order.iOne.options[iThree.selectedIndex].value;
        
        document.getElementById("iOneImg").setAttribute('src', `images/products/${order.iOne.options[iOne.selectedIndex].value}.jpg`);
        document.getElementById("iTwoImg").setAttribute('src', `images/products/${order.iOne.options[iTwo.selectedIndex].value}.jpg`);
        document.getElementById("iThreeImg").setAttribute('src', `images/products/${order.iOne.options[iThree.selectedIndex].value}.jpg`);
        
        document.getElementById("iOneImg").setAttribute('alt', `${order.iOne.options[iOne.selectedIndex].value}`);
        document.getElementById("iTwoImg").setAttribute('alt', `${order.iOne.options[iTwo.selectedIndex].value}`);
        document.getElementById("iThreeImg").setAttribute('alt', `${order.iOne.options[iThree.selectedIndex].value}`);

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

        
    }
}

document.getElementById("confirmBtn").addEventListener('click', function()
{
    formCount = localStorage.getItem("formCount");

    if (formCount == null) {
    
        formCount = 1;
        localStorage.setItem("formCount", formCount);
        let record = localStorage.getItem("formCount");
        console.log(`Por ahora son ${record} formularios`);

    } else
    {
        formCount = parseInt(localStorage.getItem("formCount")) + 1;
        localStorage.setItem("formCount", formCount);
        let record = localStorage.getItem("formCount");
        console.log(`Por ahora son ${record} formularios`);
    }
    
    let formulario = document.getElementById('mixForm');    
    formulario.submit();
});

document.getElementById("returnBtn").addEventListener('click', function()
{
    document.getElementById("joinForm").style.display = "block";
    document.getElementById("confirmation").style.display = "none";
});

