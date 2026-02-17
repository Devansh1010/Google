function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);


function Vehicle(speed, fuel) {
  this.speed = speed;
  this.fuel = fuel
}

function Car(speed, fuel, doors) {
  Vehicle.call(this, speed, fuel);
  this.doors = doors
}
function Bike(speed, fuel, hasCarrier) {
  Vehicle.call(this, speed, fuel);
  this.hasCarrier = hasCarrier
}

console.log(new Bike(110, 'Petrol', false))
console.log(new Car(180, 'Disel', 4))

Vehicle.prototype.move = function () {
  console.log(`Moving at ${this.speed} km/h`);
};

const v1 = new Vehicle(220, "Petrol")
v1.move()

Bike.prototype = Object.create(Vehicle.prototype);
Car.prototype = Object.create(Vehicle.prototype);

// console.log(Math.max.call(null, 1, 20, 3, 4, 5))

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]


