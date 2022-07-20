function add_header(){
    const header_node = document.querySelector("header");

    let make_link = (ref, text)=>{
        let link_node = document.createElement("a");
        link_node.href = ref;
        link_node.textContent = text;
        return link_node
    }
    let h1_node = document.createElement("h1");
    h1_node.textContent = "Virtual Garden";
    let nav_node = document.createElement("nav");

    let home_button = make_link("virtualgarden.html", "Home");
    
    let games_button = make_link("games.html", "Games");

    let garden_button = make_link("garden.html", "Garden");

    let anti_garden_button = make_link("antigarden.html", "Anti Garden");

    header_node.appendChild(h1_node)
    nav_node.appendChild(home_button)
    nav_node.appendChild(garden_button)
    nav_node.appendChild(games_button)
    nav_node.appendChild(anti_garden_button)
    header_node.appendChild(nav_node)

    let hamburger_button = document.createElement("span");
    hamburger_button.innerHTML = "&#9776;";
    hamburger_button.id = "hamburger_button";
    let menu = document.querySelector("nav");
    let main = document.querySelector("body");

    hamburger_button.addEventListener("click", () => {menu.classList.toggle("hamburger_show")})
    function remove_hamburger_menu_on_body_click(event){
        let menu = document.querySelector("nav");
        if ((event.target.closest("nav") != document.querySelector("nav")) && event.target.closest("span") != document.querySelector("#hamburger_button")){
            menu.classList = ""
        }
    }
    main.addEventListener("click", remove_hamburger_menu_on_body_click, true);

    header_node.appendChild(hamburger_button)

}
function add_footer(){
     const footer_node = document.querySelector("footer");

    let div_node = document.createElement("div");
    div_node.id = "socialMediaLinks";

    let create_social_media_link = (link_href, img_src, img_alt)=>{
        let link = document.createElement("a");
        link.href = link_href;
        let img = document.createElement("img");
        img.src = img_src;
        img.alt = img_alt;
        link.appendChild(img);
        return link
    }

    div_node.appendChild(create_social_media_link("https://www.facebook.com/", "images/facebook.png", "The facebook logo."));
    div_node.appendChild(create_social_media_link("https://twitter.com/", "images/twitter.png", "The twitter logo."));
    div_node.appendChild(create_social_media_link("https://www.instagram.com/", "images/instagram.png", "The instagram logo."))

    footer_node.appendChild(div_node);

    let disclaimer = document.createElement("p");
    let current_date = new Date()
    let year = current_date.getFullYear()
    disclaimer.id = "disclaimer"
    disclaimer.innerHTML = `© ${year} by Landon Lee | WDD 230 Project | Your results may vary.`
    footer_node.appendChild(disclaimer)

    let link_list = document.createElement("ul")
    link_list.id = "footer_link_list"

    let create_li_link_element = (name, refrence)=>{
        let li_element = document.createElement("li");
        let a_element = document.createElement("a");
        a_element.href = refrence
        a_element.textContent = name
        li_element.appendChild(a_element)
        return li_element
    }

    link_list.appendChild(create_li_link_element("Site Map", "site_map.html"))
    link_list.appendChild(create_li_link_element("Garden", "garden.html"))
    link_list.appendChild(create_li_link_element("Games", "games.html"))
    link_list.appendChild(create_li_link_element("Anti Garden", "antigarden.html"))

    footer_node.appendChild(link_list);
}

function init(){
    add_header();
    add_footer();
}
init()