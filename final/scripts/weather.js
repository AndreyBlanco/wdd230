const dirurl = 'https://api.openweathermap.org/data/2.5//weather?q=Carlsbad,units=imperial&appid=57fb78219987c5ecb4d912a4593a6817';

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
    const max = weatherData.main.temp_max.toFixed(0);
    const min = weatherData.main.temp_min.toFixed(0);    
    const speed = weatherData.wind.speed;
    const desc = weatherData.weather[0].description;  
    const icon = weatherData.weather[0].icon;
    const chill = weatherData.main.feels_like.toFixed(0);
    const humidity = weatherData.main.humidity;

    
    document.getElementById("currentFeel").textContent = (chill - 273.15).toFixed(0);
    document.getElementById('currentTemp').textContent = (temp - 273.15).toFixed(0);
    document.getElementById('currentMaxTemp').textContent = (max - 273.15).toFixed(0);
    document.getElementById('currentMinTemp').textContent = (min - 273.15).toFixed(0);
    document.getElementById('weatherCondition').textContent = desc;
    document.getElementById('currentWind').textContent = speed;
    document.getElementById('weatherImg').src = `images/weatherImages/${icon}.png`;
    document.getElementById('weatherImg').alt = desc;
    document.getElementById('currentHumid').textContent = humidity;
}



  