let burgerIcon = document.querySelector(".burger-icon")
let closeIcon = document.querySelector(".close-icon")

let header = document.querySelector(".landing .container .header")
let links = document.querySelector(".landing .container .links.menu")

burgerIcon.addEventListener("click", (e) => {
    e.target.classList.add("active")
    closeIcon.classList.add("active")
    header.classList.add("active")
    links.classList.add("active")
})


closeIcon.addEventListener("click" , (e) => {
    e.target.classList.remove("active")
    burgerIcon.classList.remove("active")
    header.classList.remove("active")
    links.classList.remove("active")
})