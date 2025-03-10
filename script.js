document.getElementById("nav-menu").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});

const links = document.querySelectorAll(".nav-links li");
links.forEach(link =>{
    link.addEventListener("click", function(){
        links.forEach(link => link.classList.remove("active"));

        this.classList.add("active");
    })
}
)