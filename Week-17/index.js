//Практическое задание 1

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 — то есть 10*31



//Практическое задание 2

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://1gai.ru/uploads/posts/2016-01/1453152501_013.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    };

    getInfo() {
        return `<img src=${this.image} width=200px/>
            <p>Type: ${this.type}</p>
            <p>Brand: ${this.brand}</p>`
    }

    getPrice() {
        return `<p>Price: ${this.price}₽</p>`
    }
};

class Car extends Transport {
    constructor(type, price, brand, doors, image) {
        super(type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return `<p>Doors: ${this.doors}</p>`
    }
};

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed, image) {
        super(type, price, brand, image);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return `<p>Max speed: ${this.maxSpeed}</p>`
    }
};

function newHTML() {
    const newArray = data.map((transport) => {
    if (transport.type === 'car') {
        return new Car(transport.type, transport.price, transport.brand, transport.doors, transport.image);
    } else {
        return new Bike(transport.type, transport.price, transport.brand, transport.maxSpeed, transport.image);
    }
    });

    let toHTML = '';

    newArray.forEach((item) => {
    if (item instanceof Car) {
        toHTML = toHTML + `<div id="card"> ${item.getInfo()} ${item.getDoorsCount()} ${item.getPrice()} </div>`
    } else {
        toHTML = toHTML + `<div id="card"> ${item.getInfo()} ${item.getMaxSpeed()} ${item.getPrice()} </div>`
    }});
    document.querySelector('#transport-info').innerHTML = toHTML;
};

newHTML();