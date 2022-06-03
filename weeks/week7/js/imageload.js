let images = document.querySelectorAll('img');
let increment = 0
images.forEach((image)=>{
    image.code = increment
    increment += 1
})
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