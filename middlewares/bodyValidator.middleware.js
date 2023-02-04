const { BaseSchema } = require('yup');
const { Request, Response, NextFunction, request } = require('express');
/**
 * 
 * @param {BaseSchema} validator schema de validation 'yup' 
 * @param {Number} code Code d'erreur si les données sont invalides
 * @returns {(req: Request, res: Response, next: NextFunction) => undefined}
 */

const bodyValidation = (validator, code = 422) => {
    return async (req, res, next) => {
        try {
            const data = await validator.noUnknown().validate(req.body, { abortEarly: false });
            req.body = data;

            return next();
        }
        catch (yupError) {
            res.status(code).json({ errors: yupError.errors, code });
        }
    };
};



module.exports = bodyValidation;