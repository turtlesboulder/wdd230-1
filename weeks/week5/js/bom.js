function setUpButton(){
    const input_box = document.querySelector("#favchap");
    const button = document.querySelector(".input button");
    const list = document.querySelector("ul");

    button.addEventListener("click", (event) =>{
        let li_element = document.createElement("li");
        let delete_button = document.createElement("button");
        const list = document.querySelector("ul");
        const input_box = document.querySelector("#favchap");
        if (input_box.value != ""){
            li_element.textContent = input_box.value;
            delete_button.textContent = "❌";
            delete_button.addEventListener("click", (event) =>{
                event.target.parentElement.remove();
            })
            li_element.append(delete_button);
            list.append(li_element);
            input_box.value = "";
            input_box.focus();
        }
        
    })
}
setUpButton();