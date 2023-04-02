let product1 = document.getElementById("item4").innerText;
let product2 = document.getElementById("item8").innerText;
let product3 = document.getElementById("item12").innerText;
let product4 = document.getElementById("item16").innerText;

function plus() {
    let summ = document.getElementById("sum");
    let sum = (Number(product1) + Number(product2) + Number(product3) + Number(product4));
    summ.innerHTML = 'Итого ' + sum;
};

plus();

function recalc() {
    let summ = document.getElementById("sum");
    let  numberSumm = summ.innerText.split(' ');
    let newSumm = Number(numberSumm[1]) * 0.8;
    summ.innerHTML = 'Итого ' + newSumm;
};