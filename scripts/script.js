
document.querySelector('.profile__info-button').addEventListener('click', function () {
  let namePage = document.querySelector('.profile__info-name').value;
  let descriptionPage = document.querySelector('.profile__info-description').value;
  document.querySelector('input[name="firstName"]').textContent = namePage;
  document.querySelector('input[name="job"]').textContent = descriptionPage;
  document.querySelector('.popup').classList.add('popup_opened');

});

document.querySelector('.popup__container-close').addEventListener('click', function () {
  document.querySelector('.popup').classList.remove('popup_opened');
});

let myForm = document.querySelector('form[name="popupForm"]');
myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let valName = document.querySelector('input[name="firstName"]').value;
  let valJob = document.querySelector('input[name="job"]').value;

  document.querySelector('.profile__info-name').textContent = valName;
  document.querySelector('.profile__info-description').textContent = valJob;
  document.querySelector('.popup').classList.remove('popup_opened');

});

document.querySelector('.profile__button').addEventListener('click', function() {
  document.querySelector('.popup-card').classList.add('popup-card_opened');
})
let cardForm = document.querySelector('form[name="popupCard"]');
 cardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  document.querySelector('.popup-card').classList.remove('popup-card_opened');
});

document.querySelector('.popup-card__container-save').addEventListener('click', function (evt) {
  evt.preventDefault();
 let cardName = document.getElementById('test').value;
   let cardImg = document.getElementById('test1').value;
   console.log(cardName);
 let container = document.querySelector('.mesto');
 let div = document.createElement('div');
   div.className = "mesto__items";
   div.innerHTML = `
            <div class="mesto__items">
            <img src="${cardImg}" alt="Изображение города" class="mesto__items-image">
            <button type="button" class="mesto__items-close"></button>
            <div class="mesto__item">
                <h2 class="mesto__item-name">${cardName}</h2>
                <button type="button" class="mesto__item-btn"></button>
            </div>
        </div>
  `
 container.prepend(div);
 document.querySelector('.popup-card').classList.remove('popup-card_opened');
});


document.querySelector('.popup-card__container-close').addEventListener('click', function () {
  document.querySelector('.popup-card').classList.remove('popup-card_opened');
});

const initialCards = [
  {
    name: 'Москва',
    link: './images/moscow.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/spb.jpg'
  },
  {
    name: 'Казань',
    link: './images/kazan.jpg'
  },
  {
    name: 'Сочи',
    link: './images/sochi.jpg'
  },
  {
    name: 'Стамбул',
    link: './images/istambul.jpg'
  },
  {
    name: 'Париж',
    link: './images/paris.jpg'
  }
];

const mesto = document.querySelector('.mesto');
const elementCard = document.querySelector('#mestoCard').content;

initialCards.forEach(function (element) {
  const mestoCard = elementCard.cloneNode(true);

  mestoCard.querySelector('.mesto__items-image').src = element.link;
  mestoCard.querySelector('.mesto__item-name').textContent = element.name;

  mestoCard.querySelector('.mesto__item-btn').addEventListener('click', function(evt) {
    evt.target.classList.toggle('mesto__like-button');
    document.querySelector('div');
  })

  mestoCard.querySelector('.mesto__items-close').addEventListener('click', function(evt) {
    evt.target.parentElement.remove();
    document.querySelector('div');
  })


  mesto.append(mestoCard);
})


const mestoItem = elementCard.querySelector('.mesto__items').cloneNode(true);

const modal = document.querySelector('.pictures');


function displayModal(img)
{
    modal.style.display = "flex";
   
}; 

document.addEventListener("click", function (e) {

  let puk = e.target

  if(puk.classList.contains('mesto__items-image')) {
    let pic = puk.src;
    let roditel = puk.parentNode;
    let blocktext = roditel.querySelector('.mesto__item-name').textContent;
  
    document.querySelector('.pictures__container-picture').src = pic;
    document.querySelector('.pictures__container-text').textContent = blocktext;

  }
});

const closePic = document.querySelector('.pictures__container-close');

closePic.addEventListener("click", function (e) {
  return  modal.style.display = "none";

});
