let images = document.querySelectorAll('[data-src]');
let increment = 0
let options = {}
options.threshold = [0.9]
options.rootMargin = "0px 0px 100px 0px";

function preloadImage(img){
    const source = img.getAttribute('data-src')
    if(!source){
        return;
    }
    img.removeAttribute('data-src')
    img.src = source
    
}

let io = new IntersectionObserver(
    (entries, io)=>{
        entries.forEach(entry=>{
            if (!entry.isIntersecting){
                return;
            }else{
                preloadImage(entry.target);
                io.unobserve(entry.target);
                console.log("Golly bob howdy")
            }
        })
    }, options
)
images.forEach((image)=>{
    io.observe(image)
})

// localstorage
let now_date = new Date()
let old_date = new Date(localStorage.getItem("lastVisited"));
localStorage.setItem('lastVisited', now_date)
if (old_date.getTime() != 0){
    let time_elapsed = now_date.getTime() - old_date.getTime();
    let days_elapsed = Math.round(time_elapsed/86400000)
    let message = ""
    if (days_elapsed == 1){
        message = "Day"
    }
    else{
        message = "Days"
    }
    document.querySelector(".visited").textContent = (days_elapsed) + " " + message
}
else{
    document.querySelector(".visited").textContent = "Welcome newcomer!"
}

// 1000 - 60,000 - 3,600,000 - 86,400,000
// if (!storeDate) will check if its not null
