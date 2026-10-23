import { body } from "express-validator";

export const loginValidator = [
  body().custom((value, { req }) => {
    if (!req.body.username && !req.body.email) {
      throw new Error("Username or email is required");
    }
    return true;
  }),
  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];
