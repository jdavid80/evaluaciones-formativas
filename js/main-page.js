let selectGrado = document.getElementById("selectGrado");
let selectMateria = document.getElementById("selectMateria");
let cardsCiencias = document.querySelectorAll(".card-ciencias");
let cardsTI = document.querySelectorAll(".card-ti");
let cardsSexto = document.querySelectorAll(".card-sexto");
let cardsDecimo = document.querySelectorAll(".card-decimo");
let cardsUndecimo = document.querySelectorAll(".card-undecimo");

selectMateria.addEventListener("change", () => {
    let selectedOption = selectMateria.options[selectMateria.selectedIndex].text;
    if (selectedOption == "Tecnología e Informática") {
        cardsCiencias.forEach(element => {
            element.classList.add("card-hidden");
            element.classList.remove("cards");
        }); 
        cardsTI.forEach (element => {
            element.classList.remove("card-hidden");
            element.classList.add("cards");
        });
    }
    else if (selectedOption == "Ciencias Naturales") {
        cardsTI.forEach(element => {
            element.classList.add("card-hidden");
            element.classList.remove("cards");
        });
        cardsCiencias.forEach (element => {
            element.classList.remove("card-hidden");
            element.classList.add("cards");
        });
    }
    else if (selectedOption == "Ver Todos") {
        cardsTI.forEach(element => {
            element.classList.remove("card-hidden");
            element.classList.add("cards");
        });
        cardsCiencias.forEach (element => {
            element.classList.remove("card-hidden");
            element.classList.add("cards");
        });
    }
});
selectGrado.addEventListener("change", () => {
    let selectedOption = selectGrado.options[selectGrado.selectedIndex].text;
    if (selectedOption == "card-sexto") {
        cardsDecimo.forEach(element => {
            element.classList.add("card-hidden");
            element.classList.remove("cards");
        }); 
        cardsSexto.forEach (element => {
            element.classList.remove("card-hidden");
            element.classList.add("cards");
        });
    }
    else if (selectedOption == "card-decimo") {
        cardsDecimo.forEach(element => {
            element.classList.add("card-hidden");
            element.classList.remove("cards");
        });
        cardsSexto.forEach (element => {
            element.classList.remove("card-hidden");
            element.classList.add("cards");
        });
    }
    else if (selectedOption == "Ver Todos") {
        cardsSexto.forEach(element => {
            element.classList.remove("card-hidden");
            element.classList.add("cards");
        });
        cardsDecimo.forEach (element => {
            element.classList.remove("card-hidden");
            element.classList.add("cards");
        });
    }
});
