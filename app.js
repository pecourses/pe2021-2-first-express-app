const express = require('express');
const { contactsController } = require('./controllers');

const app = express();

// втроенные middleware, чтобы спарсить req.body из json в js-объект
app.use(express.json());

// каждый контроллер (на данный момент) имеет сигнатуру(req,res)=>{}
// req.body - тело запроса
// req.params - параметры маршрута
// res.status() - задать статус-код ответа
// res.send() - отправить ответ с вложениями

app.get('/contacts', contactsController.getContacts);
app.post('/contacts', contactsController.createContact);

// параметры маршрута
// 'GET http://127.0.0.1:5000/contacts/55' => 55 попадет в req.params.is
app.get('/contacts/:id', contactsController.getContactsById);

module.exports = app;
