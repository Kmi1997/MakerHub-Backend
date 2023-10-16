const { BaseSchema } = require('yup');
const { Request, Response, NextFunction, request, json} = require('express');
/**
 *
 * @param {BaseSchema} validator schema de validation 'yup'
 * @param {String or Null} template template à renvoyer avec les erreurs
 * @returns {(req: Request, res: Response, next: NextFunction) => undefined}
 */

const bodyValidation = (validator, template= null) => {
    return async (req, res, next) => {

        try {
            const data = await validator.noUnknown().validate(req.body, { abortEarly: false });
            req.body = data;
            return next();
        }
        catch (yupError) {
            req.body.id = req.query.id;
            if (!template) {
                res.status(422).json({ errors: yupError.errors });
            }
            else {
                res.status(422).render(template, { errors: yupError.errors, data: req.body })
            }
        }
    };
};



module.exports = bodyValidation;