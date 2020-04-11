const users = require('./users.js');

function sayHello(user) {
  console.log(`Hello, my name is ${user.firstName} ${user.lastName}. People call me ${user.nickName}. I am ${user.activity}.`);
}

users.forEach(user => sayHello(user));
