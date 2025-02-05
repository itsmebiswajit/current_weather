


    const apiKey = 'b926fc2baa6a89ec88186ec30c741630'; // Replace with your OpenWeatherMap API key

document.getElementById('get-weather').addEventListener('click', getWeather);

function getWeather() {
    const locationInput = document.getElementById('location-input').value;
    if (!locationInput) {
        alert('Please enter a city name.');
        return;
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            updateWeatherInfo(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function updateWeatherInfo(data) {
    document.getElementById('location').innerText = data.name;
    document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
