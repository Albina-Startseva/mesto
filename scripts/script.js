

document.querySelector('.profile__info-button').addEventListener('click', function () {
  document.querySelector('.popup').classList.add('popup__opened');
});



document.querySelector('.popup__container-close').addEventListener('click', function () {
  document.querySelector('.popup').classList.remove('popup__opened');
});


let myForm = document.querySelector('form[name="popupForm"]');
myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let valName = document.querySelector('input[name="firstName"]').value;
  let valJob = document.querySelector('input[name="job"]').value;


  document.querySelector('.profile__info-name').textContent = valName;
  document.querySelector('.profile__info-description').textContent = valJob;
  document.querySelector('.popup').classList.remove('popup__opened');

});