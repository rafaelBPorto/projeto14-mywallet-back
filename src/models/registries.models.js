import joi from "joi";

export const registriesSchema = joi.object({
    value: joi.number().required(),
    description: joi.string().required(),
    type: joi.string().valid('inflow', 'outflow').required(),
    date: joi.string().required()
})