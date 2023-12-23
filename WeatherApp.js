//Function to call location's weather info from API website//

const fetchPromise = fetch("http://weatherapi.com", { mode: "cors" });

fetchPromise.then((response) => {
  console.log(response);
});

//Function that processess the JSON information from weather API website//
