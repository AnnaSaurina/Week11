let priceProducts=document.querySelectorAll(".js_item");

let priceProduct1 = priceProducts[0].textContent;
let priceProduct2 = priceProducts[1].textContent;
let priceProduct3 = priceProducts[2].textContent;
let priceProduct4 = priceProducts[3].textContent;

let sale = document.querySelector(".sale");

sale.addEventListener('click', () => {
    priceProducts[0].textContent = +priceProduct1 * 0.8; 
    priceProducts[1].textContent = +priceProduct2 * 0.8;
    priceProducts[2].textContent = +priceProduct3 * 0.8;
    priceProducts[3].textContent = +priceProduct4 * 0.8;
    sale.setAttribute('disabled', true);
});

function plus() {
let summ = document.querySelector(".sum");
let sum = +priceProducts[0].textContent + +priceProducts[1].textContent + +priceProducts[2].textContent + +priceProducts[3].textContent;
let saleSumm = +sum * 0.8;
summ.innerHTML = 'Итого ' + saleSumm ;
};

plus();

