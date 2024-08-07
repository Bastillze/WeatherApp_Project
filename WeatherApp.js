// WeatherApp


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "3c836a38db6d4e46b7950259231912";


weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

        try{
             const weatherData = await getWeatherData(city);
             displayWeatherInfo(weatherData);
        }
         catch(error){
               console.error(error);
               displayError(error);
         }
    }
    else{
           displayError("Please enter a city");
    }


});

async function getWeatherData(city){

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=3c836a38db6d4e46b7950259231912&q=city&aqi=yes${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();

}

function displayWeatherInfo(data){

       const {name: city, 
              main: {temp, humidity}, 
              weather: [{description, id}]} = data;

        card.textContent = "";
        card.style.display = "flex";  
        
        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const weatherDisplay = document.createElement("p");

        cityDisplay.textContent = city;
        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}`;
        descDisplaytextContent = description;

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");

        card.appendChild(cityDisplay);

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}