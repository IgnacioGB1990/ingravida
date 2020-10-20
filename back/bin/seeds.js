const mongoose = require('mongoose');
const User = require('../models/user');

const dbName = 'seeds-ingravida';
mongoose.connect(`mongodb://localhost/${dbName}`);

const users = [
  {
    name: "Julia",
    surname: "Felina",
    address: "Jerez 4",
    age: 15
  },
  {
    name: "Amelia",
    surname: "Garcia",
    address: "Mendez Pelayo 27",
    age: 20
  },
  {
    name: "Gloria",
    surname: "Estefan",
    address: "Doctor Juan Jose Lopez Ibor",
    age: 33
  },
  {
    name: "Sara",
    surname: "Vazquez",
    address: "Capitan Haya",
    age: 40
  },

]

User.create(users, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${users.length} ingravida users`)
  mongoose.connection.close();
});