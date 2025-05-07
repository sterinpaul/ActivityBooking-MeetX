import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string()
  .pattern(/^[6-9]\d{9}$/)
  .required()
  .messages({
    'string.pattern.base': 'Phone number must be a 10-digit number starting with 6, 7, 8, or 9',
    'string.empty': 'Phone number is required',
  }),
  email: Joi.string().email().required(),
  password: Joi.string()
  .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$'))
  .required()
  .messages({
    'string.pattern.base': 'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character',
    'string.empty': 'Password is required',
  }),
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required.',
  })
})
