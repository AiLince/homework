const button = document.querySelector('.button');
const price = document.querySelectorAll('.price');
const total = document.querySelector('.total-price');

const xiaomi = document.querySelector('#xiaomi');
const oppo = document.querySelector('#oppo');
const mildstore = document.querySelector('#mildstore');
const infinix = document.querySelector('#infinix');

button.addEventListener('click', () => {
    const price = document.querySelector('.price').value;
    total.textContent = (`${57414 - (57414 * 20 / 100)} руб`);
    xiaomi.textContent = document.querySelector('#xiaomi').value;
    xiaomi.textContent = (`${9999 - (9999 * 20 / 100)} руб`);
    oppo.textContent = document.querySelector('#oppo').value;
    oppo.textContent = (`${25990 - (25990 * 20 / 100)} руб`);
    mildstore.textContent = document.querySelector('#mildstore').value;
    mildstore.textContent = (`${3435 - (3435 * 20 / 100)} руб`);
    infinix.textContent = document.querySelector('#infinix').value;
    infinix.textContent = (`${17990 - (17990 * 20 / 100)} руб`);
});