function doShears(){
    let shears = document.querySelector("#shears")
    shears.shears = 0
    shears.bananasNeeded = 1
    let localShears = localStorage.getItem("shears")*1
    if (localShears){
        shears.shears = localShears
        document.querySelector("#shears h3").textContent = `Shears: ${shears.shears}`
        document.querySelector("#shears").style = "display: block;"
    }
    let localShearsBananasNeeded = localStorage.getItem("shearsBananasNeeded")*1
    if (localShearsBananasNeeded){
        shears.bananasNeeded = localShearsBananasNeeded
        document.querySelector("#shears button").textContent = `Buy: ${shears.bananasNeeded} Bananas`
    }
    
    let runner = ()=>{
        let shears = document.querySelector("#shears")
        let plant = document.querySelector("#plant")
        if (plant.bananas >= shears.bananasNeeded){
            plant.bananas -= shears.bananasNeeded
            document.querySelector("#bananas-display").textContent = `Bananas: ${plant.bananas}`
            shears.shears += 1
            shears.bananasNeeded += 1
            document.querySelector("#shears h3").textContent = `Shears: ${shears.shears}`
            if (shears.bananasNeeded == 1){
                document.querySelector("#shears button").textContent = `Buy: 1 Banana`
            }else{
                document.querySelector("#shears button").textContent = `Buy: ${shears.bananasNeeded} Bananas`
            }
            localStorage.setItem("shears", shears.shears)
            localStorage.setItem("shearsBananasNeeded", shears.bananasNeeded)
        }
        
    }
    document.querySelector("#shears button").addEventListener("click", runner);
}
function doFertilizer(){
    let fertilizer = document.querySelector("#fertilizer")
    fertilizer.fertilizer = 0
    fertilizer.leavesNeeded = 200

    let localFertilizer = localStorage.getItem("fertilizer")*1
    if (localFertilizer){
        fertilizer.fertilizer = localFertilizer
        document.querySelector("#fertilizer h3").textContent = `Fertilizer: ${fertilizer.fertilizer}`
        document.querySelector("#fertilizer").style = "display: block;"
    }
    let localFertilizerleavesNeeded = localStorage.getItem("fertilizerLeavesNeeded")*1
    if (localFertilizerleavesNeeded){
        fertilizer.leavesNeeded = localFertilizerleavesNeeded
        document.querySelector("#fertilizer button").textContent = `Buy: ${fertilizer.leavesNeeded} Leaves`
    }

    let runner = ()=>{
        let fertilizer = document.querySelector("#fertilizer")
        let plant = document.querySelector("#plant")
        if (plant.leaves >= fertilizer.leavesNeeded){
            plant.leaves -= fertilizer.leavesNeeded
            document.querySelector("#leaves-display").textContent = `Leaves: ${plant.leaves}`
            fertilizer.fertilizer += 1
            fertilizer.leavesNeeded += 100
            document.querySelector("#fertilizer h3").textContent = `Fertilizer: ${fertilizer.fertilizer}`
            document.querySelector("#fertilizer button").textContent = `Buy: ${fertilizer.leavesNeeded} Leaves`
            localStorage.setItem("fertilizer", fertilizer.fertilizer)
            localStorage.setItem("fertilizerLeavesNeeded", fertilizer.leavesNeeded)
        }
        
    }
    document.querySelector("#fertilizer button").addEventListener("click", runner);
}

function doPlant(){
    let plant = document.querySelector("#plant")

    let localLeaves = localStorage.getItem("leaves")*1
    let localBananas = localStorage.getItem("bananas")*1
    if (localLeaves){
        plant.leaves = localLeaves
        document.querySelector("#leaves-display").textContent = `Leaves: ${plant.leaves}`
    }
    if (localBananas){
        plant.bananas = localBananas
        document.querySelector("#bananas-display").textContent = `Bananas: ${plant.bananas}`
    }

    let runner = ()=>{
        let fertilizer = document.querySelector("#fertilizer")
        randomNum = 0
        for (let i = 0; i < fertilizer.fertilizer; i++){
            ran = Math.random()
            if (ran > randomNum){
                randomNum = ran
            }
        }
        let shears = document.querySelector("#shears")
        plant.leaves += (shears.shears + 1)
        localStorage.setItem("leaves", plant.leaves)
        if (randomNum > 0.99){
            plant.bananas += 1
            document.querySelector("#bananas-display").textContent = `Bananas: ${plant.bananas}`
            document.querySelector("#shears").style = "display: block;"
            localStorage.setItem("bananas", plant.bananas)
        }
        document.querySelector("#leaves-display").textContent = `Leaves: ${plant.leaves}`
        if (plant.leaves >= 200){
            document.querySelector("#fertilizer").style = "display: block;"
        }
    }
    plant.addEventListener("click", runner)
}

function init(){
    plant = document.querySelector("#plant")
    plant.leavesPerClick = 1
    plant.leaves = 0
    plant.bananas = 0
    doShears()
    doFertilizer()
    doPlant()
}
init()