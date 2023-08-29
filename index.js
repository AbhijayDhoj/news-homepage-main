const icon = document.getElementById("icon")
const menu = document.querySelector(".phoneMenu")
const icon2 = document.querySelector(".icon2")


icon.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    icon.classList.toggle("hidden")
    icon2.classList.toggle("hidden")
    console.log('Hello');
    
})
icon2.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    icon.classList.toggle("hidden")
    icon2.classList.toggle("hidden")
    console.log('Hello');
    
})