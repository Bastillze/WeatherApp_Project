
//Target main div//

const main = document.getElementById("main");


//Function to call location's weather info from API website//

const fetchPromise = fetch("http://api.weatherapi.com/v1/current.json?key=3c836a38db6d4e46b7950259231912&q=London&aqi=no", { mode: "cors" });

fetchPromise
.then((response) => {
  return response.json();
})
.then((weather => {
  var climate = climate.map((weather) => {
    return climate.weather;
  })
  console.log(weather);
}))
 
//Function that processess the JSON information from weather API website//
