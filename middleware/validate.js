const yup = require("yup");

const CONTACT_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(64).required(),
  telNumber: yup
    .string()
    .min(13)
    .max(13)
    .matches(/^\+380\d{9}$/, "Number must start with +380")
    .required(),
  birthday: yup.date().min("1900-01-01").max(new Date()),
});

module.exports.validateContactOnCreate = (req, res, next) => {
  const { body } = req;

  CONTACT_VALIDATION_SCHEMA.validate(body)
    .then((validatedContact) => {
      req.body = validatedContact;
      next();
    })
    .catch((err) => {
      res.status(422).send(err);
    });
};

//
