
const User = require('../models/user.model')

async function getOneUser(req, res) {
    try {
        const user = await User.findByPk( req.params.id )
        if (user) {
            return res.status(200).json(user)
        } else {
            return res.status(200).send('No user found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
  getOneUser,
};