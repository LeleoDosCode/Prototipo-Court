document.getElementById("menu-circle").addEventListener("click", function () {
    var menu = document.getElementById("floating-menu");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});