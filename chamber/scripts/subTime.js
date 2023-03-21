document.getElementById("lastVisit").textContent = `Days from last visit: ${Math.round(countDays)}`;

const subTime = document.querySelector("#submissionTime");

subTime.value = new Date();