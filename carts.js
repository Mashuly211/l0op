let heart = document.querySelector('.cart');
let cartNumber = document.querySelector('.cart-count');
let counter = 0;

heart.onclick = function () {
  counter++;
  cartNumber.textContent = counter;
  heart.classList.toggle('added');
};