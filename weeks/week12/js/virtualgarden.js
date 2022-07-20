function doTitle(){
    let runner = ()=>{
        let header_node1 = document.querySelector("#welcome-1");
        let header_node2 = document.querySelector("#welcome-2");
        let title1 = document.querySelector("#title1");
        let title2 = document.querySelector("#title2");
        header_node1.textContent = `Welcome, ${title1.value} ${title2.value}!`;
        header_node2.textContent = `Welcome, ${title1.value} ${title2.value}!`;
    }
    let title1 = document.querySelector("#title1");
    let title2 = document.querySelector("#title2");
    title1.addEventListener("click", runner);
    title2.addEventListener("click", runner);
    runner();
}

function doColors(){
    let runner = ()=>{
        let main = document.querySelector("main");
        let background_node = document.querySelector("#background-color");
        let text_node = document.querySelector("#text-color");
        main.style = `background-color: ${background_node.value}; color: ${text_node.value};`;
    }
    let background_node = document.querySelector("#background-color");
    let text_node = document.querySelector("#text-color");
    background_node.addEventListener("click", runner);
    text_node.addEventListener("click", runner);
    runner();
}

function init(){
    doTitle()
    doColors()
}
init()