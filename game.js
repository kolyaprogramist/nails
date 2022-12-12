window.addEventListener('DOMContentLoaded', () => {
const pikachu = document.getElementById("pikachu");
const cactus = document.getElementById("cactus");
document.addEventListener("touchstart keydown" , function(event) {
    jump ();
});
function jump () {
    pikachu.classList.add("jump")
}
function jump(){
    if (pikachu.classList != "jump") {
        pikachu.classList.add("jump")
    }
    setTimeout ( function() {
        pikachu.classList.remove("jump")
    },300)
}
let dead = setInterval(function(){
    let pikachuTop = parseInt(window.getComputedStyle(pikachu).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if (cactusLeft <10 && cactusLeft>0 && pikachuTop>=145 ){
        alert("Ты проебал")
        
        
    }
})
});

