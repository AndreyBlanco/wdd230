
const url = 'json/data.json';

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data); 
    displayDirectory(data);
}
  
getDirectoryData();

function displayDirectory(data)
{
  const spots = document.querySelector('#spots');
  let gold = [];
  let silver = [];
  let bronze = [];
  var idx = 0;

    data.forEach((business) => {
      
      if (business.membership == "Gold")
      {
        gold.push(idx);
      }
      if (business.membership == "Silver")
      {
        silver.push(idx);
      }
      if (business.membership == "Bronze")
      {
        bronze.push(idx);
      }

      idx = idx + 1;

    });

  const goldRandom = gold[Math.floor(Math.random() * gold.length)];
  const silverRandom = silver[Math.floor(Math.random() * silver.length)];
  const bronzeRandom = bronze[Math.floor(Math.random() * bronze.length)];

  let glogo = document.createElement('img'); // Logo
  let gh2 = document.createElement('h2'); // Name
  let gh3 = document.createElement('h3'); // Direction
  let gh4 = document.createElement('h4'); // Phone
  let gdiv = document.createElement('div');
  gdiv.setAttribute('class', 'spotlight'); 

  let slogo = document.createElement('img'); // Logo
  let sh2 = document.createElement('h2'); // Name
  let sh3 = document.createElement('h3'); // Direction
  let sh4 = document.createElement('h4'); // Phone
  let sdiv = document.createElement('div');
  sdiv.setAttribute('class', 'spotlight');

  let blogo = document.createElement('img'); // Logo
  let bh2 = document.createElement('h2'); // Name
  let bh3 = document.createElement('h3'); // Direction
  let bh4 = document.createElement('h4'); // Phone
  let bdiv = document.createElement('div');
  bdiv.setAttribute('class', 'spotlight');
  
  gh2.textContent = `${data[goldRandom].name}`;
  gh3.textContent = `${data[goldRandom].direction}`;
  gh4.textContent = `${data[goldRandom].phone}`;
  console.log(data[goldRandom].name, goldRandom);

  sh2.textContent = `${data[silverRandom].name}`;
  sh3.textContent = `${data[silverRandom].direction}`;
  sh4.textContent = `${data[silverRandom].phone}`;
  
  bh2.textContent = `${data[bronzeRandom].name}`;
  bh3.textContent = `${data[bronzeRandom].direction}`;
  bh4.textContent = `${data[bronzeRandom].phone}`;

  glogo.setAttribute('src', `images/directoryImages/${data[goldRandom].icon}`);
  glogo.setAttribute('alt', `${data[goldRandom].name}`);
  glogo.setAttribute('loading', 'lazy');

  slogo.setAttribute('src', `images/directoryImages/${data[silverRandom].icon}`);
  slogo.setAttribute('alt', `${data[silverRandom].name}`);
  slogo.setAttribute('loading', 'lazy');

  blogo.setAttribute('src', `images/directoryImages/${data[bronzeRandom].icon}`);
  blogo.setAttribute('alt', `${data[bronzeRandom].name}`);
  blogo.setAttribute('loading', 'lazy');
        
  gdiv.appendChild(gh2);
  gdiv.appendChild(glogo);
  gdiv.appendChild(gh3);
  gdiv.appendChild(gh4);

  sdiv.appendChild(sh2);
  sdiv.appendChild(slogo);
  sdiv.appendChild(sh3);
  sdiv.appendChild(sh4);

  bdiv.appendChild(bh2);
  bdiv.appendChild(blogo);
  bdiv.appendChild(bh3);
  bdiv.appendChild(bh4);

  spots.appendChild(gdiv);
  spots.appendChild(sdiv);
  spots.appendChild(bdiv);
  console.log("3");

}