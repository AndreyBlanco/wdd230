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
  const members = document.querySelector('directory');

    data.forEach((business) => {
      
      let member = document.createElement('section'); //Member
      let logo = document.createElement('img'); // Logo
      let h2 = document.createElement('h2'); // Name
      let h3 = document.createElement('h3'); // Direction
      let h4 = document.createElement('h4'); // Phone
      let p = document.createElement('p'); //Membership
      let div = document.createElement('div');

      h2.textContent = `${business.name}`;
      h3.textContent = `${business.direction}`;
      h4.textContent = `${business.phone}`;
      p.textContent = `Level: ${business.membership}`;
  
      logo.setAttribute('src', `images/directoryImages/${business.icon}`);
      logo.setAttribute('alt', `${business.name}`);
      logo.setAttribute('loading', 'lazy');
            
      div.appendChild(h2);
      div.appendChild(h3);
      div.appendChild(h4);
      if (business.web != null)
      {
        let a = document.createElement('a'); // Web
        a.textContent = `${business.web}`;
        a.setAttribute('href', `${business.href}`);
        div.appendChild(a);
      }
      div.appendChild(p);

      member.appendChild(logo);
      member.appendChild(div);
  
      members.appendChild(member);
    });

}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("directory");

gridbutton.addEventListener("click", showGrid);

function showGrid()
{
	display.classList.add("grid");
	display.classList.remove("list");
}

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}