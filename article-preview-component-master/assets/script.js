//Desktop
let button = document.querySelector('.share-btn');
let shareActive = document.querySelector('.share-active');


button.addEventListener('click', shareShow)

function shareShow() {
    shareActive.style.opacity = (shareActive.style.opacity == '1') ? '0' : '1';

    let color = button.style.backgroundColor;
    color = button.style.backgroundColor = color === 'var(--color-darkBlue)' ? 'var(--color-light-grayBlue) ' : 'var(--color-darkBlue)';

    let img = document.querySelector('.share-btn').src;
    if (img.indexOf('icon-share.svg') != -1) {
        document.querySelector('.share-btn').src = 'images/icon-shareActive.svg';
    } else {
        document.querySelector('.share-btn').src = 'images/icon-share.svg';
    }
}

//Mobile
let shareActiveM = document.querySelector('.share-active2');
let row = document.querySelector('.row');

let buttonMobile = document.querySelectorAll('.share-btn2'),
    result;
for (let i = 0; i < buttonMobile.length; i++) {
    result = buttonMobile[i];
    result.addEventListener('click', shareShowMobile);
}

function shareShowMobile() {
    shareActiveM.style.opacity = (shareActiveM.style.opacity == '1') ? '0' : '1';
    let colorM = buttonMobile.style.backgroundColor;
    colorM = buttonMobile.style.backgroundColor = color === 'var(--color-darkBlue)' ? 'var(--color-light-grayBlue) ' : 'var(--color-darkBlue)';

    let img = document.querySelector('.share-btn2').src;
    if (img.indexOf('icon-share.svg') != -1) {
        document.querySelector('.share-btn2').src = 'images/icon-shareActive.svg';
    } else {
        document.querySelector('.share-btn2').src = 'images/icon-share.svg';
    }
}