const router = require('express').Router()


router.use('/user', require('./user.router'))
router.use('/auth', require('./auth.router'))

module.exports = router
