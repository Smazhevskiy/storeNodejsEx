const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async checkAuth(req, res, next) {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('id не найден'))
        }
        res.json(id)
    }
}

module.exports = new UserController()