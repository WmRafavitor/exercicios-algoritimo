let image = document.querySelectorAll('.img_small');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btnClose = document.querySelector('#btn_close');
let srcVal = "";

for(let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function() {
        srcVal = image[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');

    });
}

btnClose.addEventListener('click', function() {
    modal.classList.toggle('modal_active');
});