const { BaseSchema } = require('yup');
const { Request, Response, NextFunction, request } = require('express');
/**
 * 
 * @param {BaseSchema} validator schema de validation 'yup' 
 * @param {Number} errorCode Code d'erreur si les données sont invalides
 * @returns {(req: Request, res: Response, next: NextFunction) => undefined}
 */

const bodyValidation = (validator, errorCode = 422) => {
    return async (req, res, next) => {
        try {
            const data = await validator.noUnknown().validate(req.body, { abortEarly: false });
            console.log(req.body, data);
            req.body = data;

            return next();
        }
        catch (yupError) {
            console.log(yupError);
            res.status(errorCode).send(yupError + ' ' + errorCode);
        }
    };
};



module.exports = bodyValidation;