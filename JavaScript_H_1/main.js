//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
    for (let i = 0; i < dog_names.length; i++) {
        let currentName = dog_names[i];
        if (dog_string.toLowerCase().includes(currentName.toLowerCase())) {
            console.log("Matched " + currentName);
        }
    }
    if (!dog_names.some(name => dog_string.toLowerCase().includes(name.toLowerCase()))) {
        console.log("No Matches");
    }
}
  
//Call method here with parameters
findWords();

// __________Student Comment_________
/* 
    It wasnt clear if in this exercise I was only supposed to return the actual dogs name 
    or every instance of each word in the list that occurs in the string
    so I went with what was closest to the question
/*


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i< arr.length; i += 2) {
        arr.splice(i, 1, "even index")
    }
}

let given_arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

// Call method
replaceEvens(given_arr);
console.log(given_arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]