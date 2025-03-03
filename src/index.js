const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Deepak", "Kumar", "Bhopal", "India", "In", "10001", "1234567890", "chourasiadeepak2002@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());
