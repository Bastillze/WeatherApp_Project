//Function to call location's weather info from API website//
function fetchData() {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=3c836a38db6d4e46b7950259231912&q=London&aqi=no"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchData();

//Display the code in the HTML//
