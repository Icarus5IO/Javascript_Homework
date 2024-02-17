//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            // If the value is an array, log each item in the array
            console.log(`${key}:`);
            for (let i = 0; i < person[key].length; i++) {
                if (typeof person[key][i] === 'object') {
                    // If the array element is an object, iterate through it
                    for (let subKey in person[key][i]) {
                        console.log(`  ${subKey}: ${person[key][i][subKey]}`);
                    }
                } else {
                    console.log(`  ${person[key][i]}`);
                }
            }
        } else {
            // If the value is a string, log it directly
            console.log(`${key}: ${person[key]}`);
        }
    }
}

displayFavoriteFoods(person3);



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Use an arrow to create the printInfo method
Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Create another arrow function for the addAge method that takes a single parameter
Person.prototype.addAge = (years) => {
    this.age += years;
};

let person1 = new Person("John", 25);
let person2 = new Person("Jane", 30);

person1.printInfo();
person2.printInfo();

// Adding to the age 
person1.addAge(3);

person1.printInfo();
person2.printInfo();



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

checkStringLength("Hello World!")
    .then(result => {
        console.log(result); // Output: Big word
    })
    .catch(error => {
        console.log(error); // This won't be called in this case
});

checkStringLength("Hello")
    .then(result => {
        console.log(result); // This won't be called in this case
    })
    .catch(error => {
        console.log(error); // Output: Small Number
});