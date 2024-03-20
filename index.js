const url =
  "http://api.weatherapi.com/v1/current.json?key=acabd4755e0b4a88a3c100431231408&q=Bordeaux&aqi=no";

const weatherCard = document.querySelector(".weather-card");

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getWeather().then((data) => {
  const html = `<div class="weather-card-top">Weather App</div>
  <div class="weather-card-mid">
      <div class="weather-icon"></div>
      <div class="weather-temperature">${data.current.temp_c}°C</div>
      <div class="weather-condition">
          ${data.current.condition.text}
      </div>
      <div>City</div>
  </div>
  <div class="weather-card-bottom">
      <div class="weather-bottom-left">
          <div class="weather-bottom-left-icon">Icon</div>
          <div class="weather-bottom-left-feels-like">
              <p class="weather-bottom-left-feels-like-num">${data.current.feelslike_c}°C</p>
              <p class="weather-bottom-left-feels-like">Feels like</p>
          </div>
      </div>
      <div class="weather-bottom-right">
          <div class="weather-bottom-right-icon">Icon</div>
          <div class="weather-bottom-right-humidity">
              <p class="weather-bottom-right-humidity-num">${data.current.humidity}%</p>
              <p class="weather-bottom-right-humidity">Humidity</p>
          </div>
      </div>
  </div>`;

  weatherCard.innerHTML = html;
});
