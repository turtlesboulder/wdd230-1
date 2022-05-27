function do_wind_chill(){

    let temp = (document.querySelector("#temperature span").textContent)*1
    let windspeed = (document.querySelector("#wind_speed_num").textContent)*1
    let chill = temp;
    if (temp <= 10 && windspeed >= 4.8){
        chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    }
    document.querySelector("#wind_chill_num").textContent = chill
}

do_wind_chill();