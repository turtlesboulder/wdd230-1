// URL: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const getWeather = async ()=>{
    apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=38.6&lon=-80.3&appid=b4e1effa695f6d0f82a9ecbc8b7f13b8"
    const response = await fetch(apiURL);
    let jsObject = await response.json();
    console.log(jsObject);

    let farenheitTemp = Math.round((jsObject.main.temp - 273.15)*1.8 + 32)
    document.querySelector('#current-temp').textContent = farenheitTemp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
}

getWeather();