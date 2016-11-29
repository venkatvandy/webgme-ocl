var OclEngine = require('ocl-js').default,
    myEngine;

console.log(OclEngine);
myEngine = new OclEngine();

//now the actual test:
function Car(){
    this.color = 'red';
    this.owner = null;
}

function People(){
    this.name = 'John';
    this.fleet = [];
    this.age = 15;
}

var people1 = new People(),
    people2 = new People(),
    car1 = new Car(),
    car2 = new Car();

car1.owner = people2;

car2.owner = people1;

people1.name = 'Tamas';
people1.age = 36;
people1.fleet.push(car1);
people1.fleet.push(car2);

people2.name = 'SomeOne';
people2.age = 17;
people2.fleet.push(car1);

myEngine.addOclExpression('context Car inv: self.owner.age >= 18');
myEngine.addOclExpression('context Car inv: self.owner.age >= 16');

console.log(myEngine.evaluate(car1));
console.log(myEngine.evaluate(car2));
console.log(myEngine.evaluate(people1));

console.log(myEngine.getOclExpressionsForType('Car'));