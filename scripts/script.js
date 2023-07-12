

document.querySelector('.profile__edit-button').addEventListener('click', function () {
  console.log('click');
  document.querySelector('.popup').style.display = 'flex';
});


document.querySelector('.popup__save-button').addEventListener('click', function ()  {
    var valName = document.querySelector('.input-name').value;
    var valJob = document.querySelector('.input-job').value;

    document.querySelector('.profile__info-name').textContent = valName;
    document.querySelector('.profile__info-description').textContent = valJob;
    document.querySelector('.popup').style.display = 'none';
}); 


document.querySelector('.popup__container-close').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
});


