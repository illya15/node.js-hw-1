

const fs = require('fs').promises   ;
const path = require('path');


/*
 * Розкоментуй і запиши значення
 * const contactsPath = ;
 */
const contactsPath = require('./db/contacts.json') ;
// console.log(contactsPath)
// TODO: задокументувати кожну функцію
 const listContacts =     async () => {
 
    const pathToFile = path.join('db','contacts.json');
        
    const readContacts = await fs.readFile(pathToFile) ;
     return JSON.parse(readContacts)   ;

   
 
};


function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}

module.exports = {contactsPath,
listContacts}