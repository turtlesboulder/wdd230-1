function updateDate(){
    let currentDate = new Date();
    let date_container = document.querySelector("#current_date_header")
    let month = currentDate.getMonth()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month = months[month]

    let weekday = currentDate.getDay()
    let weekdays = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"]
    weekday = weekdays[weekday];

    if (weekday == "Monday" || weekday == "Teusday"){
        let banner_node = document.querySelector("#notification_banner");
        banner_node.removeAttribute("class");
    }

    let year = currentDate.getFullYear()
    let day = currentDate.getDate()
    let date_string = `The current date is ${weekday}, ${day} ${month} ${year}`
    date_container.textContent = date_string;
}
function do_hamburger_functionality(){
    let button = document.querySelector("#hamburger_button");
    let menu = document.querySelector("nav");
    let main = document.querySelector("main");
    button.addEventListener("click", () => {menu.classList.toggle("hamburger_show")})
    function remove_hamburger_menu_on_body_click(event){
        let menu = document.querySelector("#hamburger_menu");
        if (event.target.closest("nav") != document.querySelector("nav")){
            menu.classList.remove("hamburger_show");
        }
    }
    main.addEventListener("click", remove_hamburger_menu_on_body_click, true);
}

function do_footer(){
    let modified_date = new Date(document.lastModified);
    let text_container = document.querySelector("#footer_text")
    let month = modified_date.getMonth()
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    month = months[month]
    let year = modified_date.getFullYear()
    let day = modified_date.getDate()
    let hour = modified_date.getHours()
    let minutes = modified_date.getMinutes()
    text_container.innerHTML = `© ${year} Hacker Valley Chamber by Landon Lee. | WDD 230 Project | Last modified ${month} ${day}, ${year} at ${hour}:${minutes}.`
}

function init(){
    updateDate();
    do_hamburger_functionality();
    do_footer();
}
init()