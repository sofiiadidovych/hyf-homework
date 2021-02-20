//@ts-check

window.addEventListener('load', () => {
    // Load the last searched city from the local storage
    const cityFromLocalStorage = localStorage.getItem('city');
    console.log(cityFromLocalStorage);
    if (cityFromLocalStorage) {
        getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${cityFromLocalStorage}&appid=0b2171133666adf69c5fc412fc18bb00`);
    }
});

const cityInputField = document.querySelector('#city_input_field');
const selectButton = document.querySelector('#select_button');
const weatherInfo = document.querySelector('#weather_info');
const city = document.querySelector('#city');
const temperature = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather_icon');
const windSpeed = document.querySelector('#wind_speed');
const cloudy = document.querySelector('#cloudy');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

// In openweather API temperature is indicated in Kelvin, convert it to Celcius
function convertKelvinToCelcius(k) {
    return Math.round(k - 272.15);
}

// Time is set as a timestamp, convert it to hours and minutes
function convertTimestampToTime(stamp) {
    const time = new Date(stamp * 1000);
    return `${time.getHours()}:${time.getMinutes()}`;
}

// Use Google maps to show our location
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 10,
    });
}

// Apply getWeather function to get weather by city name
selectButton.addEventListener('click', () => {
    if (cityInputField.value === '') {
        alert('Select your city');
    } else {
        getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputField.value}&appid=0b2171133666adf69c5fc412fc18bb00`);
    }
})

function getWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // In case user misspelt the name of the city
            if (data.cod === '404') {
                city.innerHTML = 'city not found';
                // Hide info section which is empty
                weatherInfo.setAttribute('class', 'hidden');
            } else {
                // Show weather info section
                weatherInfo.setAttribute('class', '');
                console.log(data);
                city.innerHTML = data.name;
                // Save the city to the local storage
                localStorage.setItem('city', data.name);
                const c = convertKelvinToCelcius(data.main.temp);
                temperature.innerHTML = `temperature is ${c}° Celcius`;
                weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                windSpeed.innerHTML = `wind speed is ${data.wind.speed} meter/sec`;
                cloudy.innerHTML = `clouds: ${data.clouds.all}%`;
                // The timestamp indicates time in UTC, so we add timezone, which is shift in seconds from UTC
                let sunriseTime = convertTimestampToTime(data.sys.sunrise + data.timezone);
                let sunsetTime = convertTimestampToTime(data.sys.sunset + data.timezone);
                sunrise.innerHTML = `sun rises at ${sunriseTime}`;
                sunset.innerHTML = `sun sets at ${sunsetTime}`;
                const center = { lat: data.coord.lat, lng: data.coord.lon };
                map.setCenter(center);
            }
        })
}

const locationElement = document.querySelector('#location');
const locationButton = document.querySelector('#location_button');

// Apply getWeather function to get weather by location
function success(pos) {
    console.log(pos);
    getWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=0b2171133666adf69c5fc412fc18bb00`)
}

// Show some text, in case user blocked access to their geolocation data
function error(err) {
    locationElement.innerHTML = `ERROR(${err.code}): ${err.message}`;
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

locationButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, error);
});