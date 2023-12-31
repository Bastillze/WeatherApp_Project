//Target main div//

const main = document.getElementById("main");

//Loading Placholder

main.innerHTML = "<p>Loading...</p>";

//Function to call location's weather info from API website//

const fetchPromise = fetch("http://weatherapi.com", { mode: "cors" });

fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((weather) => {
    main.innerHTML = places(location);
  });

//Function that processess the JSON information from weather API website//

function places(condition) {
  const location = location
    .map((area) => {
      return `<li>${location.area}</li>`;
    })
    .join("/n");

  return `<ul>${area}</ul>`;
}
