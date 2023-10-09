function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

var numbers = [1, 2, 3, 4];
function log(value) {
  console.log(value);
}

function Person(id, firstname, name) {
  this.id = id;
  this.firstname = firstname;
  this.name = name;

  this.introduce = function () {
    console.log(`${this.firstname} ${this.name}`);
  };
}

// forEach(numbers, log)

var rudi = new Person(1, "Rudolf", "Huber");

rudi.introduce();
