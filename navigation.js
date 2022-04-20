function add_date(){
    let current_date = Date()
    let p_element = document.getElementById("to_be_manipulated")
    p_element.innerHTML = `The time is ${current_date}`
}