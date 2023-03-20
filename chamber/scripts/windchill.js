const dirurl = 'https://api.openweathermap.org/data/2.5//weather?q=La Palmera,units=imperial&appid=57fb78219987c5ecb4d912a4593a6817';

async function apiFetch() {
    try {
      const response = await fetch(dirurl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());

      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayResults(weatherData) {
    const temp = weatherData.main.temp.toFixed(0);    
    const speed = weatherData.wind.speed;
    const desc = weatherData.weather[0].description;  
    const icon = weatherData.weather[0].icon;
    if (temp < 50 || speed > 3) {
        

        var chill = 35.74 + (0.6215 * ((temp - 273.15) * 9 / 5 + 32)) - (35.75 * (speed**0.16)) + (0.4275 * ((temp - 273.15) * 9 / 5 + 32) * (speed**0.16));
      
        chill = (chill-32) * ( 5 / 9 );
        chill = chill.toFixed(1);
      
        document.getElementById("currentChill").textContent = chill + " °C";
    } else {
        document.getElementById("currentChill").textContent = "N/A";
    }
    document.getElementById('currentTemp').textContent = (temp - 273.15).toFixed(0);
    document.getElementById('weatherCondition').textContent = desc;
    document.getElementById('currentSpeed').textContent = speed;
    document.getElementById('weatherImg').src = `images/weatherImages/${icon}.png`;
    document.getElementById('weatherImg').alt = desc;
}



  