const brand = document.querySelector('#brand');
const model = document.querySelector('#model');

//в зависимости от марки, показываем модели машин
let models = {
    Renault: ["Arcana", "Clio", "Duster", "Logan"],
    Opel: ["Astra", "Frontera", "Vectra", "Zafira"],
    Mazda: ["Axela", "BT-50", "Capella", "Roadster"],
    Jaguar: ["F-Type", "XE", "XJ", "X-Type"]
};

window.onload = selectBrand;
brand.onchange = selectBrand;

function selectBrand(ev) {
    model.innerHTML = "";
    let c = this.value || "Renault", o;
    for (let i = 0; i < models[c].length; i++) {
    o = new Option(models[c][i],i,false,false);
    model.add(o);
    };
}

const result = document.querySelector('#result');
const calculator = document.querySelector('#calculator');

calculator.addEventListener('click', () => {

//прописываем ценники на каждый параметр
let costBrand = 0;
if (brand.value == "Renault") {
    costBrand = 1000000;
} else if (brand.value == "Opel") {
    costBrand = 1500000;
} else if (brand.value == "Mazda") {
    costBrand = 2000000;
} else {
    costBrand = 3000000;
};

let costModel = 0;
if (model.value == [0]) {
    costModel = 100000;
} else if (model.value == [1] ) {
    costModel = 150000;
} else if (model.value == [2] ) {
    costModel = 200000;
} else {
    costModel = 250000;
};

let costFuel = 0;
if (document.querySelector('#fuel1').checked) {
    costFuel = 5000;
} else if (document.querySelector('#fuel2').checked) {
    costFuel = 8000;
} else if (document.querySelector('#fuel3').checked) {
    costFuel = 9500;
} else if (document.querySelector('#fuel4').checked) {
    costFuel = 10500;
};

let costVolume = 0;
if (document.querySelector('#volume').value < 2) {
    costVolume = 3000;
} else {
    costVolume = 5000;
};

let costCondition = 0;
if (document.querySelector('#condition1').checked) {
    costCondition = 500000;
}
else {
    costCondition = 200000;
};

let costPay = 0;
if (document.querySelector('#pay1').checked) {
    costPay = 30;
} else if (document.querySelector('#pay2').checked) {
    costPay = 15;
} else if (document.querySelector('#pay3').checked) {
    costPay = 65;
};

//выводим результат
result.innerHTML = costBrand + costModel + costFuel +
costVolume + costCondition + costPay + " " + "руб.";
});