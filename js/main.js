


const fillterButton = document.querySelectorAll(".fillter_button button");
const cards = document.querySelectorAll(".filter_img .card");

const filterCard = e => {
 
    let ActiveBtn = document.querySelector(".active");
    ActiveBtn.classList.remove("active")
    e.target.classList.add("active")
 
    cards.forEach(el => {
        el.classList.add("hide");
        if(el.dataset.name  === e.target.dataset.name || e.target.dataset.name  == "All" ){
            el.classList.remove("hide");
        }
    })
}

fillterButton.forEach(button=> button.addEventListener("click" , filterCard));
