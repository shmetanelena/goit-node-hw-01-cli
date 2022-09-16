const contacts = require("./contacts");
require("colors");
//console.log(readContacts.);
//contacts.listContacts("listContacts function");

const argv = require("yargs").argv;

// TODO: рефакторить
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeContactById = await contacts.removeContact(id);
      console.log(removeContactById);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({ action: "list" });
invokeAction({ action: "get", id: "5" });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
invokeAction({ action: "remove", id: "HHYdK0Pdh6p1KseZXmEZy" });
