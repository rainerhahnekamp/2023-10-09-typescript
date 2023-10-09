function Passenger(id, firstname, lastname) {
  this.id = id;
  this.firstname = firstname;
  this.lastname = lastname;
}

function PassengerManager() {
  this.passengers = [];

  this.add = (passenger) => {
    this.passengers.push(passenger);
  };

  this.getById = (id) => {
    return this.passengers.find((passenger) => passenger.id === id);
  };

  this.getByLastname = (lastname) => {
    return this.passengers.find((passenger) => passenger.lastname === lastname);
  };

  this.count = () => this.passengers.length;
}

var manager = new PassengerManager();
var rudolf = new Passenger(1, "Rudolf", "Huber");
console.log(manager.count());
manager.add(rudolf);
console.log(manager.count());
console.log(manager.getById(1));
console.log(manager.getByLastname("Huber"));

console.log(manager.getById(2));
console.log(manager.getByLastname("Schmidt"));
