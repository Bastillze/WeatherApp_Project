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

}

function displayWeatherInfo(data){

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