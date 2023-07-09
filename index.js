// console.log('welcame to the node.js');
// const contactsPath = require('./contacts') ;

// console.log(contactsPath);
//  const listContacts = require("./contacts");
// console.log(listContacts); 

const contacts = require("./contacts");




const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
       const allContacts = await contacts.listContacts();
       return console.log(allContacts);
      break;

    case "get":
        const oneContact = await contacts.getContactById(id);
        return console.log (oneContact);
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({action:"list"});
invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });