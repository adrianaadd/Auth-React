const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js'); 
const { response } = require('express');
const bcrypt = require('bcrypt');

async function Signup(req, res,) {
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
    req.body.password = hashedPassword
try{
    const user = await User.create(req.body)
    const payload = {email: req.body.email}
    const token = jwt.sign(payload,process.env.SECRET,{ expiresIn: '1h' })
  
    return res.status(200).json({token, role: user.role, user: user.email}) 
}
catch(error){
return res.status(500).send(error.message)}
}

async function Login(req, res){
    try {
        const user = await User.findOne({
            where:{email:req.body.email}
        })

if(!user)return res.status(404).send("Error: No such user")

const comparePass = bcrypt.compareSync(req.body.password,user.password)

if(comparePass) {
    const payload = {email :user.email}
    const token = jwt.sign(payload,process.env.SECRET)
    return res.status(200).json({token, role: user.role})
}else {
    return res.status(404).json("Error las contraseñas no coinciden")
}  
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = {Signup , Login}