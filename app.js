const express = require('express');
const { format } = require('date-fns');

const app = express();

app.get('/', (req, res) => {
  console.log('req', req);
  res.status(200).send();
});

app.post('/', (req, res) => {});
app.patch('/', (req, res) => {});
app.delete('/', (req, res) => {});

app.get('/contests', (req, res) => {
  // создать http-запрос
  // сформировать в ответ объект-заглушку
  // 200,

  res.status(200).send({ id: 1 });
});
app.post('/contests', (req, res) => {
  // создать http-запрос
  // сформировать в ответ объект-заглушку
  // 200, {id:2}
  res.status(200).send({ id: 2 });
});
app.patch('/contests/1', (req, res) => {});
app.delete('/contests/1', (req, res) => {});
//-------------------------------------------------------------------------------------------
const contactsDB = [
  {
    id: 0,
    name: 'Test',
    telNumber: '+380123456789',
    birthday: '2000-12-01',
    isFavourite: false,
  },
  {
    id: -1,
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
];
class ContactsDB {
  constructor (arr) {
    this.contacts = [...arr];
  }

  createContact (newContact) {
    this.contacts.push({ ...newContact, id: Date.now(), isFavourite: false });
    return this.contacts[this.contacts.length - 1];
  }

  getContacts () {
    return [...this.contacts];
  }

  updateContact (id, values) {
    const foundContactIndex = this.contacts.findIndex(c => c.id === id);
    this.contacts[foundContactIndex] = {
      ...this.contacts[foundContactIndex],
      ...values,
    };
    return this.contacts[foundContactIndex];
  }

  deleteContact (id) {
    const foundContactIndex = this.contacts.findIndex(c => c.id === id);
    this.contacts.splice(foundContactIndex, 1);
  }
}
//------------------------------------------------------------------
const contactsDbInstace = new ContactsDB(contactsDB);

app.get('/contacts', (req, res) => {
  const contacts = contactsDbInstace.getContacts();
  res.status(200).send(contacts);
});

app.post('/contacts', (req, res) => {});

module.exports = app;
