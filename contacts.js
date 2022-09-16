const fs = require("fs").promises;
const path = require("path");
require("colors");
const { nanoid } = require("nanoid");
const { writeFile } = require("fs");

const contactsPath = path.join("./db/contacts.json");
const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  //console.table(JSON.parse(data));
  return JSON.parse(data);
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

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

function removeContact(contactId) {
  // ...твой код
}

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};
module.exports = { listContacts, getContactById, removeContact, addContact };
