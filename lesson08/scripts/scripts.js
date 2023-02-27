let table = document.querySelectorAll("td");

table.forEach((td) => {
    if (td.textContent == "✔") {
        td.style.color = "green";
    } else {
        if (td.textContent == "✖") {
            td.style.color = "red";
        }  
    }
    
});