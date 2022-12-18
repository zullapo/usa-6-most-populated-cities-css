const cardHoverColors = [
    {name: 'New York', backgroundColor: '#f58426', color: '#fff'},
    {name: 'Los Angeles', backgroundColor: '#fdB927', color: '#fff'},
    {name: 'Chicago', backgroundColor: '#ce1141', color: '#fff'},
    {name: 'Houston', backgroundColor: '#ce1141', color: '#fff'},
    {name: 'Phoenix', backgroundColor: '#e56020', color: '#fff'},
    {name: 'Philadelphia', backgroundColor: '#006bb6', color: '#fff'},
]

function cardMouseEnter(event) {
    let card = event.target;
    while (card?.parentElement?.className !== 'col-lg-4') {
        card = card.parentElement;
    }
    const cardTitle = card.getElementsByClassName('card-title')[0].textContent;
    const matchCardHoverColor = cardHoverColors.find((cardHoverColor) => cardHoverColor.name === cardTitle);
    if (matchCardHoverColor) {
        card.style.backgroundColor = matchCardHoverColor.backgroundColor;
        card.style.color = matchCardHoverColor.color;
    }
}

function cardMouseLeave(event) {
    let card = event.target;
    while (card?.parentElement?.className !== 'col-lg-4') {
        card = card.parentElement;
    }
    const cardTitle = card.getElementsByClassName('card-title')[0].textContent;
    const matchCardHoverColor = cardHoverColors.find((cardHoverColor) => cardHoverColor.name === cardTitle);
    if (matchCardHoverColor) {
        card.style.backgroundColor = "";
        card.style.color = "";
    }
}

const cards = document.getElementsByClassName('card');

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('mouseover', cardMouseEnter);
        cards[i].addEventListener('mouseleave', cardMouseLeave);
    }
}, false);
