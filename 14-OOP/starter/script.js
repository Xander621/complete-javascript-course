'use strict';

// const Person = function(firstName, birthYear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // Never create methods within constructor functions
//     // this.calcAge = function () {
//     //     console.log(2022 - this.birthYear);
//     // }
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to a prototype
// // 4. function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jonas instanceof Person);

// // Prototypes & prototypal inheritance
// Person.prototype.calcAge = function () {
//     console.log(2022 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));     // true
// console.log(Person.prototype.isPrototypeOf(matilda));   // true
// console.log(Person.prototype.isPrototypeOf(Person));    // false

// // set properties on prototypes
// Person.prototype.species = 'Homo Sapiens';

// console.log(jonas.hasOwnProperty('firstName'));         // true
// console.log(jonas.hasOwnProperty('species'));           // false

// /**
//  * Coding Challenge #1
//  *
//  * 1.   Use a constructor function to implement a Car.  A car has a make and a
//  *      speed property.  The speed property is the current speed of the car in km/h.
//  * 2.   Implement an 'accelerate' method that will increase the car's speed by 10, and
//  *      log the new speed to the console.
//  * 3.   Implement a 'brake' method that will decrease the car's speed by 5, and log the
//  *      new speed to the console.
//  * 4.   Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple
//  *      times on each of them.
//  *
//  * DATA CAR 1: 'BMW' going 120 kmph
//  * DATA CAR 2: 'Mercedes' going 95 kmph
//  */

// // 1.
// const Car = function(make, speed) {
//     // Instance properties
//     this.make = make;
//     this.speed = speed;
// };

// // 2.
// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`The ${this.make} is currently going ${this.speed} km/h.`);
// };

// // 3.
// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`The ${this.make} is currently going ${this.speed} km/h.`);
// };

// // 4.
// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// console.log(car1, car2);

// car1.accelerate();
// car2.brake();
// car2.accelerate();
// car1.accelerate()
// car1.brake();

// /**
//  * ES6 Classes
//  *
//  * 1. Classes are not hoisted, i.e. they must be declared before we can use
//  * 2. Classes are first-class citizens
//  * 3. Classes are executed in strict mode.
//  */

// // class expression
// // const PersonCl = class{}

// // class declaration
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     };

//     // static method, not put on prototype property
//     static hey() {
//         console.log('Hey there!');
//     };

//     // Methods will be added to the .prototype property
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     };

//     //Getter
//     get age() {
//         return 2022 - this.birthYear
//     };

//     get fullName() {
//         return this._fullName;
//     }

//     //Setter
//     set fullName(name) {
//         if(name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`)
//     }
// }

// const jessica = new PersonCl('Jessica Dallas', 1996);
// jessica.fullName = 'Jessica Davis';
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.fullName);

// console.log(jessica.__proto__ === PersonCl.prototype);

// /**
//  * Getters and Setters
//  */

// // Object
// const account = {
//     owner: 'Jonas',
//     movements: [200, 530, 120, 300],

//     get latest() {
//         return this.movements.slice(-1).pop();
//     },

//     set latest(mov) {
//         this.movements.push(mov);
//     },
// }

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// PersonCl.hey();
// // jessica.hey();  // hey not a function of jessica

// /**
//  * Using Object.create()
//  */

// const PersonProto = {
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// /**
//  * Coding Challenge #2
//  *
//  * 1.   Re-create challenge 1, but this time using an ES6 class.
//  * 2.   ADd a getter called 'speedUS' which returns the current
//  *      speed in mph (divide by 1.6);
//  * 3.   Add a setter called 'speedUS' which sets the current speed
//  *      in mph (but converts it to kmph before storing the value, by
//  *      multiplying the input by 1.6)
//  * 4.   Create a new car and experiment with the accelerate and brake
//  *      methods, and with the getter and setter.
//  *
//  * DATA CAR3: 'Ford' going 120 kmph
//  */

// class CarCl {
//     // 1.
//     constructor(make, speed) {
//         // Instance properties
//         this.make = make;
//         this.speed = speed;
//     };

//     accelerate () {
//         this.speed += 10;
//         console.log(`The ${this.make} is currently going ${this.speed} km/h.`);
//     };

//     brake () {
//         this.speed -= 5;
//         console.log(`The ${this.make} is currently going ${this.speed} km/h.`);
//     };

//     // getter
//     get speedUS() {
//         return this.speed / 1.6;
//     };

//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     };
// }

// const car3 = new CarCl('Ford', 120);
// console.log('car3 mph :>> ', car3.speedUS);
// console.log(car3);
// car3.speedUS = 85;
// console.log(car3);
// car3.accelerate();
// console.log(car3.speedUS);

// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course
// }

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// // Adding function to Student Prototype
// Student.prototype.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };

// const mike = new Student('Mike', 2000, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// console.dir(Student.prototype.constructor);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// /**
//  * Coding Challenge #3
//  *
//  * 1. Use a constructor function to implement an Electric Car
//  *      (called EV) as a CHILD 'class' of Car.  Besides a make
//  *      and current speed, the EV also has the current battery
//  *      charge in % ('charge' property)
//  * 2. Implement a 'chargeBattery' method which taktes an
//  *      argument 'chargeTo' and sets the batter charge to
//  *      'chargeTo'
//  * 3. Implement an 'accelerate' method that will increase the
//  *      car's speed by 20, and decrease the charge by 1%.  Then
//  *      log a message like this: 'Tesla going 140 kmph, with a
//  *      charge of 22%'
//  * 4. Create an electric car object and experiment with calling
//  *      'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
//  *      Notice what happens when you 'accelerate'! HINT: Review the
//  *      definition of polymorphism ;)
//  *
//  * DATA CAR 4: 'Tesla' going 120 kmph, with a charge of 23%
//  */

// const EV = function(make, speed, charge) {
//     Car.call(this, make, speed);
//     this.charge = charge;
// }

// // Linking Prototypes
// EV.prototype = Object.create(Car.prototype);

// // Add new method to prototype
// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// };

// // Override accelerate for EV
// EV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`The ${this.make} is currently going ${this.speed} kmph, with a charge of ${this.charge}%.`);
// };

// const car4 = new EV('Tesla', 120, 23);
// console.log(car4);
// car4.accelerate();
// console.log(car4);
// car4.brake();
// console.log(car4);
// car4.chargeBattery(90);
// console.log(car4);

/**
 * Section 220: Inheritance Between "Classes"
 * ES6 Classes
 */

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // static method, not put on prototype property
  static hey() {
    console.log('Hey there!');
  }

  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  //Getter
  get age() {
    return 2022 - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  //Setter
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happend first, creates the this keyword
    super(fullName, birthYear);
    this.course = course;
  }

  // Override calcAge
  calcAge() {
    console.log(`I'm ${2022 - this.birthYear} years old.`);
  }
}

const martha = new Student('Martha Jones', 1974, 'Chemistry');
martha.calcAge();

/**
 * 221: Inheritance Between "Classes": Object.create
 *
 */

const PersonProto = {
  calcAge() {
    console.log(`I am ${2022 - this.birthYear} years old.`);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.introduce();
jay.calcAge();

/**
 * Section 222: Another Class Example
 * Section 223: Encapsulation: Protected Properties and Methods
 * Section 224: Encapsulation: Private Class Fields and Methods
 * Section 225: Chaining Methods
 */

class Account {
  // Public fields (on class instances)
  local = navigator.language;

  // Private fields (on class instances)
  #movements = [];
  #pin = '';

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Private Methods
  #approveLoan(val) {
    return true;
  }

  // PUBLIC INTERFACE OR API BELOW
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // return this to allow for method chaining
  }

  withdrawl(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved for amount ${val}`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(250);
acc1.withdrawl(140);
console.log(acc1);
acc1.requestLoan(1000);
console.log(acc1);
acc1.requestLoan(1234);

// Method chaining
acc1.deposit(300).deposit(500).withdrawl(35).requestLoan(25000).withdrawl(4000);
console.log(acc1.getMovements());

/**
 * Coding Challenge 4
 *
 * 1. Re-create challenge 3, but this time using ES6 classes:
 *      Create an 'EVCl' child class of the 'CarCl' class
 * 2. Make the 'charge' property private
 * 3. Implement the ability to chain the 'accelerate' and
 *      'chargeBattery' methods of this class, also update
 *      the 'brake' method in teh Car class.  Then experiment
 *      with chaining.
 *
 * DATA CAR 1: 'Rivian' going 120 kmph, with a charge of 23%
 */

class CarCl {
  make;
  speed;

  constructor(make, speed) {
    // Instance properties
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is currently going ${this.speed} km/h.`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is currently going ${this.speed} km/h.`);
    return this;
  }

  // getter
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `The ${this.make} is currently going ${
        this.speed
      } kmph, with a charge of ${this.#charge}%.`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.brake().accelerate().accelerate().brake().chargeBattery(55);
console.log(rivian.speedUS);
