let button = document.getElementById("button")
let body = document.body

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark")
}else{
    body.classList.remove("dark")
}

button.addEventListener("click" , () => {
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        localStorage.setItem("theme", "dark")
    }else{
        localStorage.setItem("theme", "light")
    }
})