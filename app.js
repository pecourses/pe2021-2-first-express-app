const express = require('express');
const { contactsController } = require('./controllers');

const app = express();

// втроенные middleware, чтобы спарсить body в объект
app.use(express.json());

// app.get('/', (req, res) => {
//   console.log('req', req);
//   res.status(200).send();
// });

//-------------------------------------------------------------------------------------------

app.get('/contacts', contactsController.getContacts);
app.post('/contacts', contactsController.createContact);

module.exports = app;
