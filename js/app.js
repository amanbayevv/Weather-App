const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')


const updateUI = (weather) => {
    console.log(weather)
    details.innerHTML =`
          <h5 class="mb-3">${weather.name},${weather.sys.country}</h5>
          <p class="mb-3">CLOUDS</p>
          <div class="display-4 mb-3">
            <span>TEMP</span>
            <span>&deg;C</span>
          </div>`
}





const getWeather = async (city) => {
    const data = await getData(city)
    return data 
}



changeLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    const cityName = changeLocation.city.value.trim()
    changeLocation.reset()
    getWeather(cityName).then((data) => {
        updataUI(data)
    })
})