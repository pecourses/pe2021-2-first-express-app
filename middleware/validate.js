const {
  CONTACT_CREATION_VALIDATION_SCHEMA,
  CONTACT_UPDATING_VALIDATION_SCHEMA,
} = require("../utils/validationSchemas");

module.exports.validateContactOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedContact = await CONTACT_CREATION_VALIDATION_SCHEMA.validate(
      body
    );
    req.body = validatedContact;
    next();
  } catch (err) {
    next(err);
    // res.status(422).send(err);
  }
};

module.exports.validateContactOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedUpdateContact =
      await CONTACT_UPDATING_VALIDATION_SCHEMA.validate(body);
    req.body = validatedUpdateContact;
    next();
  } catch (err) {
    next(err);
    // res.status(422).send(err);
  }
};
