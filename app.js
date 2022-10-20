const shareButton = document.querySelector('.btn');
const icons = document.querySelector('.icons');
const mobileShare = document.querySelector('.btn-mobile');
const michelle = document.querySelector('.michelle');
const mobileIcons = document.querySelector('.mobile-icons');

shareButton.addEventListener('click', () => 
{
    icons.classList.toggle('d-none');
});

shareButton.addEventListener('click', () => 
{
    mobileIcons.classList.toggle('d-none');
});