//Function to call location's weather info from API website//
function fetchData() {
  return fetch(
    "http://api.weatherapi.com/v1/current.json?key=3c836a38db6d4e46b7950259231912&q=London&aqi=no"
  ).then((response) => response.json());
}
const data = () => {
  Promise.then(
    (data) => {},
    (error) => {}
  );
};
console.log(fetchData);
