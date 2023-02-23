const fetchWeather = async () => {
    try {
        const lat = 41.897785;
        const lon = 45.549912;
        const key = "bd9634abdf643c5b99fba404518c5b33";
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        )
        const data = await response.json();

        if (response.status === 401) {
            handleError(response);
        } else {
            console.log(data)

            let temperatureF = data.main.feels_like;
            let temperatureC = temperatureF - 273.15;
            document.getElementById('celsius').textContent = Math.round(temperatureC);

            let locationName = data.name;
            document.getElementsByClassName('city_name')[0].textContent = locationName +", " + data.sys.country;
            let weatherIcon = `${data.weather[0].icon}.png`;
            document.getElementsByClassName('daynight')[0].setAttribute('src',
                `http://openweathermap.org/img/w/${weatherIcon}`)

            let currentDate = new Date(Date(data.dt));
            console.log(currentDate)
            document.getElementsByClassName('date')[0].textContent = currentDate.toDateString();

            let weatherDescription = data.weather[0].description;
            document.getElementById("description").textContent = weatherDescription;

            let visibility = data.visibility;
            document.getElementById("visibility").textContent = visibility + "KM";

            let feels_like = data.main.feels_like;
            document.getElementById("feels_like").textContent = feels_like + "C";

            let humidity = data.main.humidity;
            document.getElementById("humidity").textContent = humidity + "%";

            let wind = data.wind.speed;
            document.getElementById("wind").textContent = wind + "KM";


        }
    } catch (e) {

    }


}

function handleError(response) {
    const errorText = document.createElement("p");
    errorText.textContent = response.statusText;
    weatherContainer.appendChild(errorText);
}

fetchWeather()