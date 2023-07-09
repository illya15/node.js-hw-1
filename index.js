// console.log('welcame to the node.js');
// const contactsPath = require('./contacts') ;
// console.log(contactsPath);
//  const listContacts = require("./contacts");
// console.log(listContacts);

const { program } = require("commander");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({action:"list"});
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
//  invokeAction({ action: "add", name: "Zahar Sidor", email: "Zahar_Sidor.gmail .com", phone: "050 555 555 55" });;
// invokeAction({ action: "remove", id : "kBoS0Sq6vAxc5cAhMRRDj"});

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv);
