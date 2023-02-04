const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener('click', function() {
    if (input.value != "") 
    {
        const chap = document.createElement("li");
        const delButton = document.createElement("button");
        chap.textContent = input.value;
        delButton.textContent = "❌";
        chap.appendChild(delButton);
        list.appendChild(chap);

        delButton.addEventListener('click', function() {
            list.removeChild(chap);
            input.value = "";
            input.focus();
        });        
    }
    input.value = "";
    input.focus();
    
});