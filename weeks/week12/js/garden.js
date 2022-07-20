function doDrag(node){
    let runner = (event)=>{
        const PLANTWIDTH = 120;
        const PLANTHEIGHT = 220;
       let plant = event.target.closest(".plant");
       plant.canChange = false
       if (plant){
        let move = (event)=>{
            plant.style.left = (event.pageX - PLANTWIDTH/2) + "px";
            plant.style.top = (event.pageY - PLANTHEIGHT/2) + "px";
            plant.style.zIndex = 999
        }
        plant.addEventListener("mousemove", move)
        let stop = ()=>{
            plant.removeEventListener("mousemove", move)
            plant.canChange = true
            plant.style.zIndex = 1
            plant.removeEventListener("mouseup", stop)
        }
        plant.addEventListener("mouseup", stop)
       }
    }
    node.addEventListener("mousedown", runner)
}
function doSwap(plant){
    let runner = ()=>{
        if (plant.canChange){
            plant.sourceNum = (plant.sourceNum + 1)%4
            plant.src = `images/plant${plant.sourceNum}.webp`
        }
    }
    plant.addEventListener("dblclick", runner)
}
plants = document.querySelectorAll(".plant")
plants.forEach((plant)=>{
    doDrag(plant);
    doSwap(plant);
    plant.sourceNum = 2;
    plant.canChange = true;
    plant.ondragstart = ()=>{
        return false;
    }
})