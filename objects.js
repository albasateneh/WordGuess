/*const stuff = {
    
}

adder = (x,y,z) => {
    return x + y + z
};

let add1 = adder(1,1,1)

add1 = (2,3,5)

console.log(add1);

isString = (x, y, z) => {
    if (typeof x === 'string') {
        console.log(x + ' is a string')
        
    }
    else if (typeof x === 'number') {
        console.log(x + ' is a number')
    } 
    else if (typeof x === 'boolean') {
        console.log(x + ' is a boolean')
    }
    if (typeof y === 'string') {
        console.log(y + ' is a string')
        
    }
    else if (typeof y === 'number') {
        console.log(y + ' is a number')
    } 
    else if (typeof y === 'boolean') {
        console.log(y + ' is a boolean')
    }
    if (typeof z === 'string') {
        console.log(z + ' is a string')
        
    }
    else if (typeof z === 'number') {
        console.log(z + ' is a number')
    } 
    else if (typeof z === 'boolean') {
        console.log(z + ' is a boolean')
    }
 
    
}

isString('asdf', false, 1)

var car = {
    make: "Honda",
    model: "Fit",
    color: "Blue Raspberry",
    mileage: 3000,
    isWorking: true,

    driveToWork: function() {

      console.log("Old Mileage: " + this.mileage);

      this.mileage = this.mileage + 8;

      console.log("New mileage: " + this.mileage);
    },

    driveAroundWorld: function() {

      console.log("Old Mileage: " + this.mileage);

      this.mileage = this.mileage + 24000;

      console.log("New Mileage: " + this.mileage);
      console.log("Car needs a tuneup!");

      this.isWorking = false;
    },

    getTuneUp: function() {
        console.log("Car is ready to go!");
      this.isWorking = true;
    },

    honk: function() {
        console.log("Honk! Honk!");
    }
  };

  


  // How would we log...

  // The car's make?
console.log(car.make)
  // The car's model?
console.log(car.model)
  // The car's mileage?
console.log(car.mileage)
  // How would we run the car's driveToWork method?
car.driveToWork()
  // How would we run the car's driveAroundWorld method?
car.driveAroundWorld()
  // How would we run the getTuneUp method?
car.getTuneUp()
*/
const questions = [
    {
        q: "Is the sky blue?",
        a: "t"

    },
    {
        q: "is the ocean blue",
        a: "t"
    },
    {
        q: "is money blue?",
        a: 'f'
    }
  

]

questions.forEach((question) => {
  var answer = prompt(question.q)
 if (answer === question.a) {
   alert("Correct!!!")
 }
 else {
   alert("Incorrect!!!")
 }

});


