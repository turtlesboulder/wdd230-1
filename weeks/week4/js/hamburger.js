let button = document.querySelector("#hamburger_button");
let menu = document.querySelector("#hamburger_menu");
let main = document.querySelector("main");
button.addEventListener("click", () => {menu.classList.toggle("hamburger_show")})
function remove_hamburger_menu_on_body_click(event){
    let menu = document.querySelector("#hamburger_menu");
    if (event.target.closest("#hamburger_container") != document.querySelector("#hamburger_container")){
        menu.classList.remove("hamburger_show");
    }
}
main.addEventListener("click", remove_hamburger_menu_on_body_click, true);