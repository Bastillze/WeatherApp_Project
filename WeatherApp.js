//Function to call location's weather info from API website//
const fetchPromise = fetch(
  "http://api.weatherapi.com/v1/current.json?key=3c836a38db6d4e46b7950259231912&q=London&aqi=no",
  { mode: "cors" }
);

//Target main div//

const main = document.getElementById("main");

//Function that processess the JSON information from weather API website//

let weather = "regionWeather";

fetchPromise

  .then((response) => {
    return response.json();
  })
  .then((weather) => {
    const location = function weather(regionWeather) {
      location.weather.join("\n");
    };
    console.log(weather);
  });

//Append weather info into main DIV element//

main.innerHTML = weather;
