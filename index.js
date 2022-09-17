const { program } = require("commander");
// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");
// const argv = require("yargs").argv;

const contacts = require("./contacts");

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

//=== commander
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const options = program.opts();
console.log(options);

invokeAction(options);

//=== end commander

//==== yargs
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);
//==== end yargs

//==== test function
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "5" });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
//invokeAction({ action: "remove", id: "TPXV2MyeDQcC20UCZDdCW" });
//==== end test function
