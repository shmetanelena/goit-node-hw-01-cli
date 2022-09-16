const fs = require("fs").promises;
const path = require("path");
require("colors");
//const contactsPath = path.resolve("./db/contacts.json");
const contactsPath = path.join("./db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const result = JSON.parse(data);
  return console.table(result);
};
// function listContacts() {
//   fs.readFile(contactsPath)
//     .then((data) => {
//       console.log(data, data.toString().blue);
//       const obj = JSON.parse(data);
//       console.table(obj).blue;
//     })
//     // .then(
//     //   //(result) => console.log(result.toString().blue)
//     //   (data) => console.table(data.toString().blue)
//     // )
//     .catch((error) => console.log(error.message));
// }

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}
module.exports = { listContacts, getContactById, removeContact, addContact };
