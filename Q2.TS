// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "salman"
let lowercase = `Person's Name in Lower case: ${personName.toLowerCase()}`;
console.log(lowercase);
let uppercase = `Person's Name in Upper case: ${personName.toUpperCase()}`;
console.log(uppercase);
let tittlecase = `Person's Name in Tittle case: ${personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase()}`;
console.log(tittlecase);