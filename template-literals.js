let person = {
  first: "James",
  last: "Bond",
};

// let sentence = "My favorite character is first last. He is very cool."
// let sentence = "My favorite character is " + person.first + " " + person.last+ ". He is very cool."
let sentence = `My favorite character is ${person.first} ${person.last}. He is very cool.`

console.log(sentence);

