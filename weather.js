const getWeather = async() => {
const weatherBar = document.getElementById('weatherBar')
console.log(weatherBar)
    try{
        const lat = 41.901051;
        const lon = 45.526001;
        const key = 'bd9634abdf643c5b99fba404518c5b33'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
        const data = await response.json()
        if (response.status === 401) {
            const errorText = document.createElement("p")
            errorText.textContent = respone.statusText
            console.log(errorText)
            weatherBar.appendchild(errorText)
        }else{
            console.log(data)
            const h2 = document.createElement("h2")
            h2.textContent = data.name 
            h2.classList.add('qalaqi')

            weatherBar.appendChild(h2)
        }
    }
    catch(e){

    }
}
getWeather()