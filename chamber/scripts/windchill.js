var temp = document.getElementById("currentTemp").textContent;
var speed = document.getElementById("currentSpeed").textContent;

temp = (temp * ( 9 / 5 )) + 32;
speed = speed * 0.621371;

if (temp < 50 || speed > 3) {
    var chill = 35.74 + (0.6215*temp) - (35.75 * (speed**0.16)) + (0.4275 * temp * (speed**0.16));

    chill = (chill-32) * ( 5 / 9 );
    chill = chill.toFixed(1);

    document.getElementById("currentChill").textContent = chill + " °C";
} else {
    document.getElementById("currentChill").textContent = "N/A";
}

