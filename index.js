let meru = document.querySelector("#menu-bars");
let navber = document.querySelector("header .flex .navber");

meru.onclick = () =>{
    meru.classList.toggle("fa-time");
    navber.classList.toggle("active");

}

let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active');
}
let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.remove("active");
}
//swiper function
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centerdSlides: true,
    autoplay:{
        delay :3000,
        disableOnInteracion: false,
    },
    pagination: {
        el : ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});