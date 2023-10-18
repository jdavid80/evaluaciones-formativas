let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");

item1.addEventListener("click", () => {
    item1.classList.add("active");
    item2.classList.remove("active");
});
item2.addEventListener("click", () => {
    item1.classList.remove("active");
    item2.classList.add("active");
});