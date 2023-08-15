import { body } from 'express-validator'

export const RegisterValidations = [
    body('email', "Ваш E-mail не коректний").isEmail(),
    body('password', "Ваш пароль слишком слабий").isLength({min: 5}),
    body("fullname", "Минимальная довжина ника 3 символа").isLength({min: 3})
]