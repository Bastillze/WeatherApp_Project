// WeatherApp


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "3c836a38db6d4e46b7950259231912";


weatherForm.addEventListener("submit", event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

    }
    else{
      
    }


});

async function getWeatherData(city){

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){

}