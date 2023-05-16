const menutoggle = document.querySelector("#check");
const navlist = document.querySelector(".nav-list");

menutoggle.addEventListener("click", function () {
    navlist.classList.toggle("slide");
    searchBar.classList.remove("show");
});

// search nav icon
const searchIcon = document.querySelector("#search-icon");
const searchBar = document.querySelector(".search-bar");
const xIcon = document.querySelector("#x-icon");

searchIcon.addEventListener("click", function () {
    searchBar.classList.toggle("show");
    navlist.classList.remove("slide");
});

xIcon.addEventListener("click", function () {
    searchBar.classList.remove("show");
});
