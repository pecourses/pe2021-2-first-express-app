const yup = require("yup");

const CONTACT_CREATION_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(64).required(),
  telNumber: yup
    .string()
    .min(13)
    .max(13)
    .matches(/^\+380\d{9}$/, "Number must start with +380")
    .required(),
  birthday: yup.date().min("1900-01-01").max(new Date()),
});

const CONTACT_UPDATING_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(60),
  telNumber: yup
    .string()
    .min(13)
    .max(13)
    .matches(/^\+380(\d){9}$/, "number must start with +380"),
  birthday: yup.date().min("1900-01-01").max(new Date()),
  isFavourite: yup.boolean(),
});

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
