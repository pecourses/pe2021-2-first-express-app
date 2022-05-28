const {
  CONTACT_CREATION_VALIDATION_SCHEMA,
  CONTACT_UPDATING_VALIDATION_SCHEMA,
} = require("../utils/validationSchemas");

module.exports.validateContactOnCreate = (req, res, next) => {
  const { body } = req;

  CONTACT_CREATION_VALIDATION_SCHEMA.validate(body)
    .then((validatedContact) => {
      req.body = validatedContact;
      next();
    })
    .catch((err) => {
      res.status(422).send(err);
    });
};

module.exports.validateContactOnUpdate = (req, res, next) => {
  const { body } = req;
  CONTACT_UPDATING_VALIDATION_SCHEMA.validate(body)
    .then((validatedUpdatedContact) => {
      req.body = validatedUpdatedContact;
      next();
    })
    .catch((err) => {
      res.status(422).send(err);
    });
};
