console.log("***** Object Practice *****");

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
[x]  - Give the object a 'firstName & (separate) 'lastName' property
[x]  - Give it a boolean 'hasSiblings' property
[x]  - Give it  a numeric 'shoeCount' property
[x]  - Also give it an array 'favThreeFoods'
*/

const me = {
  // TODO - add properties here

  firstName: 'Sarith',
  lastName: 'Seang',
  hasSiblings: true, 
  shoeCount: 20,
  faveThreeFoods: ['Miyazaki Beef', 'KFC', 'Burgers'],
};

console.log("A little about me:", me);

/* 2. Accessing object properties.
[x]  - Create a variable called fullName 
[x]  - Use the firstName & lastName properties of the object you 
[x]    created above to set its value. 
[x]  - Console.log fullName
*/

const fullName = `${me.firstName} ${me.lastName}`;
console.log(fullName);

/* 3. Nested arrays
[x]  - Console.log your first favorite food
[x]  - Console.log your last favorite food 
*/

console.log(me.faveThreeFoods[0]);
console.log(me.faveThreeFoods[2]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
