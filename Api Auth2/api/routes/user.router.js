const { getOneUser } = require("../controllers/user.controller");
const { checkAuth,checkAdmin } = require("../middleware/index.js");

const router = require('express').Router() 

router.get("/:id",checkAuth,checkAdmin,getOneUser);


module.exports = router

