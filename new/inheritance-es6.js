class Car {
    constructor(options) {
        this.name = options.name;
        this.model = options.model;
        this.year = options.year;
        this.color = options.color;
        this.maxSpeed = options.maxSpeed;
        this.fuelCapacity = options.fuelCapacity || 60;
        this.fuelConsumption = options.fuelConsumption || 10;
    }

    getFullName() {
        console.log(this.name + ' ' + this.model);
    }
    getAge() {
        return new Date().getFullYear() - this.year;

    }
    changeColor(color) {
        if (color === this.color) {
            console.log('color already exists');
        } else {
            this.color = color;
            console.log('color has changed');

        }

    }
    calculateWay(kilometers, fuel) {
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

class Bmw extends Car {
    constructor(options) {
        super(options)
        this.sunRoof= options.sunRoof || 'true';
    }

}

class Lexus extends Car{
    constructor(options){
        super(options)

        this.climatControl=options.climatControl || 'true';

    }

}
class Lincoln extends Car{
    constructor(options){
        super(options)

        this.airFreshener=options.airFreshener || 'true';
    }

}

const on=new Bmw({
    name: 'asdf',
    model: '12345',
    year: 1992,
    color: 'red',
    maxSpeed: 240,
    fuelCapacity: 90,
    fuelConsumption: 30,
    sunRoof: 'false'

})