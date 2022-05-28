const yup = require("yup");

module.exports.CONTACT_CREATION_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(64).required(),
  telNumber: yup
    .string()
    .min(13)
    .max(13)
    .matches(/^\+380\d{9}$/, "Number must start with +380")
    .required(),
  birthday: yup.date().min("1900-01-01").max(new Date()),
});

module.exports.CONTACT_UPDATING_VALIDATION_SCHEMA = yup.object({
  name: yup.string().trim().min(2).max(60),
  telNumber: yup
    .string()
    .min(13)
    .max(13)
    .matches(/^\+380(\d){9}$/, "number must start with +380"),
  birthday: yup.date().min("1900-01-01").max(new Date()),
  isFavourite: yup.boolean(),
});
