document.querySelector("#mydate").textContent = `Last Updated: ${document.lastModified}`;

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

const year = now.getFullYear();


document.querySelector("#currentyear").textContent = `${year}`;