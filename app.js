const express = require('express');

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

module.exports = app;
