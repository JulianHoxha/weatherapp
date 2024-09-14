const apiKey = '60869af9059c097ef960d18f74a96056';

document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    checkWeather(city);
});

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();

        // Update DOM elements with the correct data
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.country').innerHTML = data.sys.country; // Country code
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    } catch (error) {
        alert(error.message); // Shows error if city not found or other issues
    }
}