const express = require("express");
const { contactsController } = require("./controllers");
const { validate } = require("./middleware");

const app = express();

// втроенные middleware, чтобы спарсить req.body из json в js-объект
app.use(express.json());

// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("first handler");
//     next(); // передает управление на след. в цепочке обработчик
//   },
//   (req, res, next) => {
//     console.log("another handler");
//     next();
//   },
//   (req, res) => {
//     console.log("second handler");
//     res.status(200).send("Answer");
//   }
// );

// yup схема для нового контакта

// каждый контроллер (на данный момент) имеет сигнатуру(req,res)=>{}
// req.body - тело запроса
// req.params - параметры маршрута
// res.status() - задать статус-код ответа
// res.send() - отправить ответ с вложениями

app.get("/contacts", contactsController.getContacts);
app.post(
  "/contacts",
  validate.validateContactOnCreate,
  contactsController.createContact
);

// параметры маршрута
// 'GET http://127.0.0.1:5000/contacts/55' => 55 попадет в req.params.id
app.get("/contacts/:id", contactsController.getContactsById);

// добавить валидацию на обновление
app.patch(
  "/contacts/:id",
  validate.validateContactOnUpdate,
  contactsController.updateContacts
);

// delete (по id), controller, edit model
app.delete("/contacts/:id", contactsController.deleteContact);

module.exports = app;
