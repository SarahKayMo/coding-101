function sayHello(person) {
  console.log(`Hello, my name is ${person.firstName}. I have ${person.eyeColor} eyes. People call me ${person.nickName}.`);
}
// const people = ["Sarah", "Maxwell", "Deanne Troi"];

// people.forEach(person => sayHello(person));

const sarah = {
  height: 66, 
  eyeColor: 'blue',
  hairColor: 'Dirty Blonde',
  firstName: 'Sarah',
  lastName: 'Morris',
  nickName: 'Smo',
  job: 'Account Services',
};
sayHello(sarah)
