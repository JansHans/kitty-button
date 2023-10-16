var button = document.querySelector(".show-cat");

var cat = document.querySelector(".cat");

button.addEventListener("click", function() {
    cat.classList.toggle("show");
});