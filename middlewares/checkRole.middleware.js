const { getThisAdmin } = require('../services/admin.service')
function checkRoleMiddleware() {

    return async function checkRole(req, res, next) {

        const thisAdmin = await getThisAdmin(req.cookies.jwt_token);
        if (thisAdmin && thisAdmin.superRoot) {
            next();
        }
        else {
            return res.status(401).redirect('/admin/home');
        }
    };
};

module.exports = checkRoleMiddleware;