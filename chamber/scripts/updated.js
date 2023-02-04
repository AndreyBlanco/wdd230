document.querySelector("#mydate").textContent = `Last Updated: ${document.lastModified}`;

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

const year = now.getFullYear();
const day = now.getDay();

document.querySelector("#currentdate").textContent = `${fulldate}`;

document.querySelector("#currentyear").textContent = `${year}`;

if (day != 1 && day != 2)
{
	document.querySelector("#add").style.display = "none";
}
