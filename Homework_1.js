function sayHello(person) {
    console.log(`Hello, my name is ${person.firstName} ${person.lastName}. People call me ${person.nickName}. I am ${person.activity}.`);
  }
const maxwell = {
  firstName: 'Maxwell',
  lastName: 'Mears',
  nickName: 'DJ Max',
  activity: 'teaching Sarah how to code.',};

const sarah = {
    firstName: 'Sarah',
    lastName: 'Morris',
    nickName: 'Smo',
    activity: 'learning about coding',
};
const people = [maxwell, sarah];

people.forEach(person => sayHello(person));

//Note for Sarah - use lower camel (?) case for object definition, even where noting a pronoun 
// Question for Max - cover difference between object and string. String is just a series of alpha characters, and requires quotes. 
// Objects are ? A label for a properties list?
// When do $ come in the mix? And what was the Ruby equivalent? 