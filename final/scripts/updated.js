document.querySelector("#mydate").textContent = `Last Updated: ${document.lastModified}`;

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

const defdate = new Intl.DateTimeFormat("en-US").format(
	now
);

const year = now.getFullYear();
const day = now.getDay();

document.querySelector("#currentyear").textContent = `${year}`;

var countDays = 0;

if (localStorage.visit) {
    countDays = (now.getTime() - new Date(localStorage.visit).getTime())/(1000*60*60*24);
	console.log(defdate, countDays, localStorage.visit);
	if (localStorage.visit != now) {
		localStorage.visit = now;
	} 	
  } else {
    localStorage.visit = now;
  }
