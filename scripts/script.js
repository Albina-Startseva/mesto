

document.querySelector('.edit_button').addEventListener('click', function () {
  console.log('click');
  document.querySelector('.popup').style.display = 'flex';
});


document.querySelector('.save__button').addEventListener('click', function ()  {
    var valName = document.querySelector('.input__name').value;
    var valJob = document.querySelector('.input__job').value;

    document.querySelector('.profile__info_name').textContent = valName;
    document.querySelector('.profile__info_description').textContent = valJob;
    document.querySelector('.popup').style.display = 'none';
}); 


document.querySelector('.popup__container_close').addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
});


