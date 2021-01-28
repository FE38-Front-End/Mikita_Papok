function Car(name, model, year, color,  maxSpeed, fuelCapacity,  fuelConsumption) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity || 60;
    this.fuelConsumption = fuelConsumption || 10;


}

Car.prototype.getFullName = function () {
    console.log(this.name + ' ' + this.model);
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;

}

Car.prototype.changeColor = function (color) {
    if (color === this.color) {
        console.log('color already exists');
    } else {
        this.color = color;
        console.log('color has changed');

    }
}

Car.prototype.calculateWay = function (kilometers, fuel) {
    fuel = this.fuelCapacity;
    let fuelCount = fuel / this.fuelConsumption * 100;
    if (fuel < 10) {
        console.log('You have to get refuel ');
    }
    let totalTime = Math.floor(kilometers / this.maxSpeed);
    console.log(`it takes ${totalTime} hour(s)`);


    let totalRefuel = Math.floor(kilometers / fuelCount);
    if (totalRefuel !== 0) {
        console.log(`youm should refuel ${totalRefuel} time(s)`)

    }

}

const car = new Car({
    name: 'asdf',
    model: '12345',
    year: 1992,
    color: 'red',
    maxSpeed: 240,
    fuelCapacity: 90,
    fuelConsumption: 30

})

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype; 
}


function Bmw(name) {
    Bmw.superclass.constructor.call(this, name);

    this.sunRoof = sunRoof || 'true';

}


const hj = new Bmw({
    name: 'asdf',
    model: '12345',
    year: 1992,
    color: 'red',
    maxSpeed: 240,
    fuelCapacity: 90,
    fuelConsumption: 30,
    sunRoof: 'false'


})
