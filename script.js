const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const calc1 = document.querySelector('#calc1');
const calc2 = document.querySelector('#calc2');
const btn = document.querySelector('#toCalculate');
const result = document.querySelector('#result');

btn.addEventListener('click', addInputValues);

function addInputValues(event){
    const additionResult = calc1.value + calc2.value;
    result.innerText = "The calculation result: " + additionResult;
}
