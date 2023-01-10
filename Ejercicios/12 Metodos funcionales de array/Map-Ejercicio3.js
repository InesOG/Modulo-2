
// Este ejercicio muestra como trabajar con Map y objetos:
'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const userGreetings = users.map((user) => {
  if (user['isPremium']) {
    return `Bienvenida ${user.name}. Eres Premium`;
  } else {
    return `Bienvenida ${user.name}`;
  }
});

console.log(userGreetings);
