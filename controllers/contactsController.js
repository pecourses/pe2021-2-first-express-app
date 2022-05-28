const { Contacts } = require("./../models");

module.exports.getContacts = (req, res) => {
  const contacts = Contacts.getContacts();
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const { body } = req;
  const newContact = Contacts.createContact(body);
  res.status(201).send(newContact);
};

module.exports.getContactsById = (req, res) => {
  const { id } = req.params;
  const foundContacts = Contacts.getContactById(id);

  if (foundContacts) {
    return res.status(200).send(foundContacts);
  }
  res.status(404).send("Contacts Not Found");
};

module.exports.updateContacts = (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const updatedContact = Contacts.updateContact(id, body);

  if (updatedContact) {
    return res.status(200).send(updatedContact);
  }
  res.status(404).send("Contact Not Found");
};

module.exports.deleteContact = (req, res) => {
  const { id } = req.params;
  const delContact = Contacts.deleteContact(id);
  if (delContact) {
    return res.status(204).send();
  }
  res.status(404).send("contact not found");
};
