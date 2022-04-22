
let modified_date = new Date(document.lastModified);
let date_container = document.querySelector("#last_updated_box")
let copyright_container = document.querySelector("#copyright_box")
let month = modified_date.getMonth()
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
month = months[month]
let year = modified_date.getFullYear()
let day = modified_date.getDate()
let hour = modified_date.getHours()
let minutes = modified_date.getMinutes()
let seconds = modified_date.getSeconds()
date_container.innerHTML = `Last modified ${month} ${day}, ${year} at ${hour}:${minutes} and ${seconds} seconds.`
copyright_container.innerHTML = `© ${year} by Landon Lee. All rights reserved, except you can copy this website if you are a flamingo.`

