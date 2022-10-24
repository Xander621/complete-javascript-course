'use strict';

const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create methods within constructor functions
    // this.calcAge = function () {
    //     console.log(2022 - this.birthYear);
    // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to a prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes & prototypal inheritance
Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));     // true
console.log(Person.prototype.isPrototypeOf(matilda));   // true 
console.log(Person.prototype.isPrototypeOf(Person));    // false

// set properties on prototypes
Person.prototype.species = 'Homo Sapiens';

console.log(jonas.hasOwnProperty('firstName'));         // true
console.log(jonas.hasOwnProperty('species'));           // false

/**
 * Coding Challenge #1
 * 
 * 1.   Use a constructor function to implement a Car.  A car has a make and a 
 *      speed property.  The speed property is the current speed of the car in km/h.
 * 2.   Implement an 'accelerate' method that will increase the car's speed by 10, and
 *      log the new speed to the console.
 * 3.   Implement a 'brake' method that will decrease the car's speed by 5, and log the 
 *      new speed to the console.
 * 4.   Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple
 *      times on each of them.
 * 
 * DATA CAR 1: 'BMW' going 120 kmph
 * DATA CAR 2: 'Mercedes' going 95 kmph
 */

// 1. 
const Car = function(make, speed) {
    // Instance properties
    this.make = make;
    this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`The ${this.make} is currently going ${this.speed} km/h.`);
};

// 3.
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`The ${this.make} is currently going ${this.speed} km/h.`);
};

// 4.
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1, car2);

car1.accelerate();
car2.brake();
car2.accelerate();
car1.accelerate()
car1.brake();

/**
 * ES6 Classes
 * 
 * 1. Classes are not hoisted, i.e. they must be declared before we can use 
 * 2. Classes are first-class citizens
 * 3. Classes are executed in strict mode.
 */

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };

    // static method, not put on prototype property
    static hey() {
        console.log('Hey there!');
    };

    // Methods will be added to the .prototype property
    calcAge() {
        console.log(2022 - this.birthYear);
    };

    //Getter
    get age() {
        return 2022 - this.birthYear
    };

    get fullName() {
        return this._fullName;
    }

    //Setter
    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`)
    }
}

const jessica = new PersonCl('Jessica Dallas', 1996);
jessica.fullName = 'Jessica Davis';
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullName);

console.log(jessica.__proto__ === PersonCl.prototype);

/**
 * Getters and Setters
 */

// Object 
const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    }, 

    set latest(mov) {
        this.movements.push(mov);
    },
}

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

PersonCl.hey();
// jessica.hey();  // hey not a function of jessica

/**
 * Using Object.create()
 */

const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();