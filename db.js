// faux database

var pets = exports.pets = [];

pets.push({ name: 'Maya', id: 0 });
pets.push({ name: 'Luka', id: 1 });
pets.push({ name: 'Chino', id: 2 });
pets.push({ name: 'Loki', id: 3 });

var users = exports.users = [];

users.push({ name: 'Niall', pets: [pets[0], pets[1], pets[2]], id: 0  });
users.push({ name: 'Jason', pets: [pets[3]], id: 1 });
users.push({ name: 'Adele', pets: [], id: 2 });