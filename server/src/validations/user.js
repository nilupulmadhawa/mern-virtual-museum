import { Joi } from 'celebrate'

export const registerSchema = {
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
}

export const loginSchema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
}

export const resetPasswordSchema = Joi.object({
    old_password: Joi.string().required(),
    new_password: Joi.string().required()
})

export const userIdSchema = {
    id: Joi.string().required()
}