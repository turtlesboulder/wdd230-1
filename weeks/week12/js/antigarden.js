function doButtons(){
    let buttons = document.querySelectorAll(".unhelpfulbutton")
    buttons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            let menu = document.querySelector("#call-to-action")
            let form = document.querySelector("#form-container")
            menu.style.display = "none";
            form.style.display = "block";
        })
    })

    let button2 = document.querySelector("#button2")
    button2.addEventListener("mouseenter", ()=>{
        button2.textContent = "Yes";
    })
    button2.addEventListener("mouseleave", ()=>{
        button2.textContent = "No";
        })
}
function init(){
    doButtons()
}
init()