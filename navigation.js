function add_date(){
    let current_date = new Date()
    let p_element = document.getElementById("to_be_manipulated")
    let month = current_date.getMonth()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month = months[month]
    let year = current_date.getFullYear()
    let day = current_date.getDate()
    let hour = current_date.getHours()
    let minutes = current_date.getMinutes()
    let seconds = current_date.getSeconds()
    p_element.innerHTML = `It is ${month} ${day}, ${year} at ${hour}:${minutes} and ${seconds} seconds.`
}