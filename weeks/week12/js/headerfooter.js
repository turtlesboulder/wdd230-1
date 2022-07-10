function add_header(){
    header_node = document.querySelector("header");
    link_node = document.createElement("a");
    link_node.href = "virtualgarden.html";
    h1_node = document.createElement("h1");
    h1_node.textContent = "Virtual Garden";
    nav_node = document.createElement("nav");

    games_botton = document.createElement("a");
    games_botton.href = "games.html";
    garden_button = document.createElement("a");
    garden_button.href = "garden.html";

    anti_garden_botton = document.createElement("a");
    anti_garden_botton.href = "antigarden.html";



}
function add_footer(){
    footer_node = document.querySelector("footer");
}

function init(){

}
init()