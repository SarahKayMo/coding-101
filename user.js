const users = require('./users.js');

function sayHello(user) {
  const phrase = `Hello, my name is ${user.firstName} ${user.lastName}. People call me ${user.nickName}. I am ${user.activity}.`
  console.log(phrase);
  return phrase;
}

function getInitials(user) {
  const initials = `${user.firstName[0]}${user.lastName[0]}`;
  console.log(initials);
  return initials;
}

//users.forEach(user => getInitials(user));
// getInitials(users[1]);
users.forEach((user) => {
  sayHello(user);
  getInitials(user);
}); 