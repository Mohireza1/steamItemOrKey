'use strict';
const steamPrice = document.querySelector('.steam-price');
const marketPrice = document.querySelector('.market-price');
const check = document.querySelector('.check');
const result = document.querySelector('.result');
const compareator = () => {
  if (!marketPrice.value) {
    return 'Please insert the market price';
  } else if (!steamPrice.value) {
    return 'Please insert teh steam price';
  } else {
    const mainRatio =
      Number(marketPrice.value) / (Number(steamPrice.value) / 1.15 - 0.01);
    return 1.7 < mainRatio ? "It's worth buying!" : 'DO NOT BUY THE ITEM!';
  }
};

check.addEventListener('click', () => {
  result.textContent = compareator();
});
